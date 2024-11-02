import { z } from 'zod'
import { isValidCPF } from '@/utils/validators'
import type { ZodSchema } from 'zod'

export const schema: ZodSchema[] = [
  z.object({
    name: z.string().trim().min(1, 'O nome é obrigatório'),
    birthDate: z.string().trim().min(1, 'A data de nascimento é obrigatória'),
    cpf: z
      .string()
      .trim()
      .min(1, 'O CPF é obrigatório')
      .transform((val) => val.replace(/\D/g, ''))
      .refine((val) => isValidCPF(val), 'CPF inválido'),
    monthlyIncome: z
      .string()
      .min(1, 'O salário mensal é obrigatório')
      .transform((val) => Number(val.replace(/\D/g, '')))
  }),
  z
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
    ),
  z.object({
    cep: z
      .string()
      .transform((val) => val.replace(/\D/g, ''))
      .refine((val) => val.length === 8, 'CEP inválido'),
    state: z.string().min(1, 'O Estado é obrigatório'),
    city: z.string().min(1, 'A cidade é obrigatória'),
    neighborhood: z.string().min(1, 'O bairro é obrigatório'),
    street: z.string().min(1, 'A rua é obrigatória')
  })
]
