import ExpenseDate from './ExpenseDate'
import './css/ExpenseItem.css'


function ExpenseItem(props) {// Эта компонента где уже код самой карты типа штмл кода но динамическая
	//props не меняется
	// console.log(useState('some value'));

	const expenseTitle = props.title// тут я просто задаю значение переменной как название карты
	const expenseAmount = props.amount// Тоже самое но только с ценой

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			<h2 className='expense-item__description'>{expenseTitle} </h2>
			<div className='expense-item__price'>{expenseAmount}$</div>
		</div>
	)
}

export default ExpenseItem
