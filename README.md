# Projeto de Teste de Login

## Requisitos
- Node.js
- npm

## Instalação
1. Navegue até o diretório do projeto:
   ```bash
   cd <DIRETORIO_DO_PROJETO>
   ```
2. Execute `npm install` para instalar as dependências:
   ```bash
   npm install
   ```

## Estrutura do Projeto
```plaintext
cypress/
  ├── fixtures/
  ├── integration/
  │   └── login_tests/
  │       └── login.spec.js
  ├── plugins/
  ├── support/
  │   ├── elements/
  │   │   └── elsHome.js
  │   │   └── elsAccount.js
  │   ├── interactions/
  │   │   └── intHome.js
  │   │   └── intAccount.js
  │   └── commands.js
  ├── cypress.config.js
  └── cypress.env.json
```

## Executar os Testes
1. Abra o Cypress:
   ```bash
   npx cypress open
   ```
2. Selecione o teste `login.spec.js` na interface do Cypress e execute.

## Estrutura dos Testes
Os testes estão organizados da seguinte forma:

- **describe**: Define o contexto geral do teste (Dado).
- **context**: Define situações específicas ou condições (Quando).
- **it**: Define as expectativas ou resultados (Então).