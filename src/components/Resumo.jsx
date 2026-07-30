import { formatarMoeda } from '../utils/formatarMoeda.js'
import './Resumo.css'

// Mostra o saldo atual e os totais de entradas e saídas.
function Resumo({ saldo, entradas, saidas }) {
  return (
    <section className="resumo">
      <div className="resumo__saldo">
        <span>Saldo atual</span>
        <strong style={{ color: saldo >= 0 ? 'var(--cor-entrada)' : 'var(--cor-saida)' }}>
          {formatarMoeda(saldo)}
        </strong>
      </div>

      <div className="resumo__linha">
        <div className="resumo__box">
          <span>Entradas</span>
          <strong className="verde">{formatarMoeda(entradas)}</strong>
        </div>
        <div className="resumo__box">
          <span>Saídas</span>
          <strong className="vermelho">{formatarMoeda(saidas)}</strong>
        </div>
      </div>
    </section>
  )
}

export default Resumo
