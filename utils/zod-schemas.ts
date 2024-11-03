import { z } from 'zod'
import { isValidCPF, isAgeWithinRange } from '@/utils/validators'
import type { ZodSchema } from 'zod'

const userSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'O nome deve ter ao menos 2 palavras')
    .refine(
      (val) => val.split(' ').filter(Boolean).length >= 2,
      'O nome deve ter ao menos 2 palavras'
    ),
  birthDate: z
    .string()
    .trim()
    .min(1, 'A data de nascimento é obrigatória')
    .refine((val) => {
      const [day, month, year] = val.split('/').map(Number)
      const date = new Date(year, month - 1, day)
      return !isNaN(date.getTime())
    }, 'Data de nascimento inválida')
    .refine((val) => {
      const [day, month, year] = val.split('/').map(Number)
      const date = new Date(year, month - 1, day)
      return isAgeWithinRange(date, 18, 65)
    }, 'A idade deve estar entre 18 e 65 anos'),
  cpf: z
    .string()
    .trim()
    .min(1, 'O CPF é obrigatório')
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => isValidCPF(val), 'CPF inválido'),
  monthlyIncome: z
    .string()
    .min(1, 'A renda mensal é obrigatória')
    .transform((val) => Number(val.replace(/\D/g, '')))
    .refine((val) => val >= 100000, 'A renda mínima deve ser R$ 1.000,00')
})

const petSchema = z
  .object({
    species: z.string().min(1, 'O tipo do pet é obrigatório'),
    breed: z.string().min(1, 'A raça do pet é obrigatória'),
    customBreed: z.string()
  })
  .refine(
    (data) => {
      if (data.breed === 'Outro') {
        return data.customBreed.trim().length > 0
      }
      return true
    },
    {
      message: 'A raça personalizada é obrigatória quando selecionado "Outro"',
      path: ['customBreed']
    }
  )

const locationSchema = z.object({
  cep: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 8, 'CEP inválido'),
  state: z.string().min(1, 'O Estado é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  neighborhood: z.string().min(1, 'O bairro é obrigatório'),
  street: z.string().min(1, 'A rua é obrigatória')
})

export const schema: ZodSchema[] = [userSchema, petSchema, locationSchema]
