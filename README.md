# Moov+ - Desafio de Frontend

⚡ Uma demonstração deste projeto está [disponível aqui](https://moovplus.moov.mov/).

![](https://imgur.com/SuzExsO.png)

## 💻 Tecnologias Utilizadas

- Nuxt 3
- Nuxt UI 2 (Headless UI)
- Zod
- Maska
- Eslint + Prettier
- Typescript

## 🚀 Configuração

1. Clone este repositório

```bash
git clone https://github.com/moovmooov/moovplus
```

2. Instale as dependências

```bash
bun install
```

3. Execute o projeto em modo de desenvolvimento

```bash
bun run dev
```

## Notas de Interface

Sempre gosto de fazer a prototipação das telas no Excalidraw para ter uma ideia de como ficaria a interface e ter uma referência visual.
![](https://imgur.com/V9d5qr1.png)

## 📝 Notas de Desenvolvimento

- A implementação do formulário foi um dos principais desafios, utilizando [Dynamic Components](https://vuejs.org/guide/essentials/component-basics#dynamic-components) do Vue.js em conjunto com validações dinâmicas do Zod.
- Utilizei o [Maska](https://github.com/beelain/masks.js) para criar os masks dos inputs, acabei testando vários outros como o vue-the-mask e o vue-money3, mas o Maska foi o mais prático e global para as situações de CPF, CEP, e dinheiro.
- Para guardar os dados do formulário, utilizei o [useState](https://nuxt.com/docs/api/composables/use-state) do Nuxt que é bem simples de usar é bem útil nesses casos onde a lógica não seria tão complexa, se fosse com mais dados e uma regra de negócio mais complexa, seria interessante incluir o Pinia para isso.
- Nuxt UI 2 tem componentes bem completos mas senti falta de um componente de Stepper, algo que descobri que veio no Nuxt UI 3, com a adição do Radix Vue que tem esse tipo de componente. Acabei instalando o Radix Vue a parte, mas depois decidi fazer o meu próprio componente de Stepper inves de baixar outra biblioteca de componentes.
- Achei interessante que o Vue tem a função nativa de debounced, que antes eu usava com Lodash, mas acabou sendo mais simples e direto de usar no campo de busca para que a interface evite de fazer uma requisição a cada letra digitada.
