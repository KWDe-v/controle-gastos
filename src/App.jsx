import { useState, useEffect } from 'react'
import Resumo from './components/Resumo.jsx'
import FormularioTransacao from './components/FormularioTransacao.jsx'
import ListaTransacoes from './components/ListaTransacoes.jsx'
import './App.css'

// Guarda todas as transações (entradas e saídas) e persiste no LocalStorage.
function App() {
  const [transacoes, setTransacoes] = useState(() => {
    const salvas = localStorage.getItem('transacoes')
    return salvas ? JSON.parse(salvas) : []
  })

  useEffect(() => {
    localStorage.setItem('transacoes', JSON.stringify(transacoes))
  }, [transacoes])

  function adicionarTransacao(descricao, valor, tipo) {
    const nova = {
      id: Date.now(),
      descricao,
      valor: Number(valor),
      tipo, // 'entrada' ou 'saida'
    }
    setTransacoes([nova, ...transacoes])
  }

  function removerTransacao(id) {
    setTransacoes(transacoes.filter((t) => t.id !== id))
  }

  // Cálculos do resumo
  const entradas = transacoes
    .filter((t) => t.tipo === 'entrada')
    .reduce((soma, t) => soma + t.valor, 0)

  const saidas = transacoes
    .filter((t) => t.tipo === 'saida')
    .reduce((soma, t) => soma + t.valor, 0)

  const saldo = entradas - saidas

  return (
    <main className="app">
      <h1 className="app__titulo">💰 Controle de Gastos</h1>

      <Resumo saldo={saldo} entradas={entradas} saidas={saidas} />

      <FormularioTransacao aoAdicionar={adicionarTransacao} />

      <ListaTransacoes transacoes={transacoes} aoRemover={removerTransacao} />
    </main>
  )
}

export default App
