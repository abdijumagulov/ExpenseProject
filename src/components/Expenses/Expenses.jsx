import { useState } from 'react'
import Card from '../UI/Card'
import './css/Expenses.css'
import FilterExpenses from './FilterExpenses'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2022");// Это состояние для фильтры он по умолчанию будет "2022"
	const filteredChangeHandler = (selectYear) => {// Это функция будет сробатывать и давать состояние выше новое значение а точнее год выбранный самим юзаром
		setFilteredYear(selectYear)
	}

	const filteredExpenses = props.data.filter((expense) => {// Здесь мы берем у обекта затрат его общую дату и берем у него только год затем сравниваем с выбронным годом 
		return expense.date.getFullYear().toString() === filteredYear;
	});
	return (
		<Card className='expenses'>
			<FilterExpenses selectedyear={filteredYear} onChangeFilter={filteredChangeHandler}/>
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpenseList expense={filteredExpenses} filteredYear={filteredYear} arr={props.data}/>
		</Card>
	)
}

export default Expenses
