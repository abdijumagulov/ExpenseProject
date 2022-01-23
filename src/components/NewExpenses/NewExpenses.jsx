import './css/NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {// Это компонента в которой логика создавания новой expense карты
	const onSaveExpenseDateHandler= (enteredExpenseData) => {
		const expenseData = {// Функция отвечает за айди каждого обекта который поподает в массив, ну или упаковывает и дает штрих код
			...enteredExpenseData,
			id: Math.random().toString()
		}
			
		props.onSaveExpenseDateHandlerr(expenseData)// Передаем радителю уже упакованные обекты
	}


	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} />
		</div>
	)
}

export default NewExpenses
