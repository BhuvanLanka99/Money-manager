// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransDetails, onDeleteTrans} = props
  const {id, title, amount, type} = eachTransDetails

  const deleteTrans = () => {
    onDeleteTrans(id)
  }

  return (
    <li className="list-transaction">
      <div className="card">
        <p className="title">{title}</p>
        <p className="amount">{amount}</p>
        <p className="type">{type}</p>
        <button
          className="press-button"
          type="button"
          data-testid="delete"
          onClick={deleteTrans}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
