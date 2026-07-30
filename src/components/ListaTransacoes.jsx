import { formatarMoeda } from '../utils/formatarMoeda.js'
import './ListaTransacoes.css'

// Mostra o histórico de transações.
function ListaTransacoes({ transacoes, aoRemover }) {
  if (transacoes.length === 0) {
    return <p className="transacoes__vazia">Nenhuma transação registrada ainda.</p>
  }

  return (
    <ul className="transacoes">
      {transacoes.map((t) => (
        <li
          key={t.id}
          className={t.tipo === 'entrada' ? 'transacao entrada' : 'transacao saida'}
        >
          <span className="transacao__descricao">{t.descricao}</span>
          <span className="transacao__valor">
            {t.tipo === 'entrada' ? '+' : '-'} {formatarMoeda(t.valor)}
          </span>
          <button className="transacao__remover" onClick={() => aoRemover(t.id)}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaTransacoes
