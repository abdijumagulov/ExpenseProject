import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState } from "react"
const expenses = [
	// Это массив в которою будет скидыватся все затраты в виде обекта
]

function App() {
	const [arr, setArr] = useState(expenses);// Это состояние для массивы


	const onSaveExpenseDateHandlerr= (enteredExpenseData) => {// Это функция с помощю которой в массив затикют обекты из формы
	setArr((prevState) => {
		return [...prevState, enteredExpenseData]
	})		
	}



	return (
		<div>
			<NewExpenses onSaveExpenseDateHandlerr={onSaveExpenseDateHandlerr}/> 
			<Expenses data={arr} />
		</div>
	)
}
export default App
