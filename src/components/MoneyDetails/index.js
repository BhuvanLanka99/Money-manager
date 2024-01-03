// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <>
      <li className="details-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="balance-pic"
        />
        <div className="balance-cont">
          <p className="balance">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </li>
      <li className="details-items2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="balance-pic"
        />
        <div className="balance-cont">
          <p className="balance">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </li>
      <li className="details-items3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="balance-pic"
        />
        <div className="balance-cont">
          <p className="balance">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
