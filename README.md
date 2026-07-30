# 💰 Controle de Gastos

## 📖 Descrição

Um controle de gastos pessoais feito em **React**. Permite registrar entradas e saídas de dinheiro e mostra o saldo atual em tempo real. As transações são salvas no **LocalStorage**. Ótimo para praticar **estado**, **cálculos** com `reduce` e **manipulação de dados**.

## ✨ Funcionalidades

- Registrar entradas e saídas
- Ver saldo atual, total de entradas e total de saídas
- Remover transações
- Valores formatados em Real (R$)
- Persistência com LocalStorage

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS puro

## ▶️ Como executar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## 📁 Estrutura básica do projeto

```
react-controle-gastos/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    ├── utils/
    │   └── formatarMoeda.js
    └── components/
        ├── Resumo.jsx               (+ .css)
        ├── FormularioTransacao.jsx  (+ .css)
        └── ListaTransacoes.jsx      (+ .css)
```

## 🚀 Melhorias futuras

- Categorias para os gastos (alimentação, transporte...)
- Filtro por mês
- Gráfico simples de entradas x saídas

## 👤 Autor

**Desenvolvido por KWDev**
