import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    activeTransactionType: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onChangeInputTitle = e => {
    this.setState({titleInput: e.target.value})
  }

  onChangeAmount = e => {
    this.setState({amountInput: e.target.value})
  }

  onChangeOption = e => {
    this.setState({activeTransactionType: e.target.value})
  }

  onDeleteTrans = id => {
    const {transactionList} = this.state
    const finalList = transactionList.filter(each => id !== each.id)
    this.setState({transactionList: finalList})
  }

  renderTypeInput = () => {
    const {activeTransactionType} = this.state
    return (
      <>
        <label htmlFor="amountInput" className="label">
          TYPE
        </label>
        <select
          className="select"
          value={activeTransactionType}
          onChange={this.onChangeOption}
        >
          {transactionTypeOptions.map(eachResource => (
            <option
              className="option-name"
              key={eachResource.id}
              value={eachResource.id}
            >
              {eachResource.displayText}
            </option>
          ))}
        </select>
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, activeTransactionType} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: activeTransactionType,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      activeTransactionType: transactionTypeOptions[0].optionId,
    }))
  }

  renderAmountInput = () => {
    const {amountInput} = this.state
    return (
      <>
        <label htmlFor="amountInput" className="label">
          AMOUNT
        </label>
        <input
          id="amountInput"
          placeholder="AMOUNT"
          value={amountInput}
          onChange={this.onChangeAmount}
          type="text"
          className="input-field"
        />
      </>
    )
  }

  renderTitleInput = () => {
    const {titleInput} = this.state
    return (
      <>
        <label htmlFor="titleInput" className="label">
          TITLE
        </label>
        <input
          id="titleInput"
          placeholder="TITLE"
          value={titleInput}
          onChange={this.onChangeInputTitle}
          type="text"
          className="input-field"
        />
      </>
    )
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenseAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {transactionList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpenseAmount()
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="heading-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="para">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <ul className="unordered-list">
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
            />
          </ul>
          <div className="lower-container">
            <form className="form-container1" onSubmit={this.onSubmitForm}>
              <h1 className="heading2">Add Transaction</h1>
              <div className="field">{this.renderTitleInput()}</div>
              <div className="field">{this.renderAmountInput()}</div>
              <div className="field">{this.renderTypeInput()}</div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <form className="form-container2">
              <h1 className="heading2">History</h1>
              <div className="history-container">
                <nav className="nav-header">
                  <p className="title-heading">Title</p>
                  <p className="title-heading">Amount</p>
                  <p className="title-heading">Type</p>
                </nav>
                <ul className="transaction-unordered-item">
                  {transactionList.map(eachTrans => (
                    <TransactionItem
                      eachTransDetails={eachTrans}
                      key={eachTrans.id}
                      onDeleteTrans={this.onDeleteTrans}
                    />
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
