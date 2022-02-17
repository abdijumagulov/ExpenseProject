import { useState } from 'react';
import classes from "./css/ModalForm.module.css";

const ModalForm = (props) => {
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
		props.setModal(false)
		props.onSaveExpenseDate(expenseData)// Тут мы кидпепжлтр колтоааем радителю уже готовый обект карт
	}
    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className='new-expense__control'>
				<div className='new-expense__contr'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						placeholder='Title'
						onChange={inputChangeHadler}
						value={title}
					/>
				</div>
				<div className='new-expense__contr'>
					<label>Amount</label>
					<input
					
						name='amount'
						type='number'
						placeholder='namber'
						onChange={inputChangeHadler}
						value={amount}
					/>
				</div>
				<div className='new-expense__contr'>
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
				<button type='submit'>Add Expense</button>
				<button onClick={props.onCensel}>Censel</button>
        </form>
    );
};

export default ModalForm;