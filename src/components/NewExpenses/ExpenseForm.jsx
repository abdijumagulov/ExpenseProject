import './css/ExpenseForm.css'
import { useState } from 'react'

const ExpenseFrom = (props) => {
	const [title, setTitle] = useState('')// Это состаяние названия обекта
	const [amount, setAmount] = useState('')// Состояние цены
	const [date, setDate] = useState('')// Состаяния даты


	const inputChangeHadler = (event) => {// Это функция сохраняет изменения всех инпутов
	    const currenInput = event.target.name;
	    if(currenInput=== 'title'){// Он проверяет name у инпута и если атрибут потходить то сохраняет изменение
	        setTitle(event.target.value)
	    }else if (currenInput === 'amount'){
	        setAmount(event.target.value)
	    }else if(currenInput==='date'){
			setDate(event.target.value)
	    }
	}

	const submitHandler = (event) => {
		event.preventDefault()// Это для того чтобы сайт не обновлялся
		const expenseData = {// тут мы ставим все в свои места для нальнейшего действия
			title: title,
			amount: amount,
			date: new Date(date)
		}
		props.onSaveExpenseDate(expenseData)// Тут мы кидаем радителю уже готовый обект карт
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						placeholder='Title'
						onChange={inputChangeHadler}
						value={title}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						type='number'
						placeholder='namber'
						onChange={inputChangeHadler}
						value={amount}
					/>
				</div>
				{/* Я решил ошибку с деограммой если вы помните мы еще в ранних уроках 
				мы в инпуте Amount  мы давали еше атрибуты типа степ и шаги я очень долго искал ошибку
				и пришел к тому что всему был виноват те самые лишние атрибуты там мы писали 
				step="0,1" типа этого это и мешало всему надеюсь вы сразу поймете почему он так себы вел*/}
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						type='date'
						min='2022-01-01'
						onChange={inputChangeHadler}
						value={date}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseFrom
