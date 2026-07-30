import { useState } from 'react'
import './FormularioTransacao.css'

// Formulário para adicionar uma entrada ou saída.
function FormularioTransacao({ aoAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('entrada')

  function enviar(evento) {
    evento.preventDefault()

    if (descricao.trim() === '' || Number(valor) <= 0) return

    aoAdicionar(descricao.trim(), valor, tipo)
    setDescricao('')
    setValor('')
    setTipo('entrada')
  }

  return (
    <form className="form-transacao" onSubmit={enviar}>
      <input
        type="text"
        placeholder="Descrição (ex: Salário)"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <div className="form-transacao__linha">
        <input
          type="number"
          step="0.01"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>

      <button type="submit">Adicionar transação</button>
    </form>
  )
}

export default FormularioTransacao
