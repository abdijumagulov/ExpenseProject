import './css/ExpenseForm.css'
import { useState } from 'react'
import ModalForm from './ModalForm'

const ExpenseFrom = (props) => {
	const [modal, setModal] = useState(false)



	const submitHandler = (event) => {
		event.preventDefault();
		setModal(true)
	}

	const onSaveData = (event) => {
		props.onSaveExpenseDate(event)// Тут мы кидпепжлтр колтоааем радителю уже готовый обект карт
	}

	return (
		<div onSubmit={submitHandler}>
			{modal ? <ModalForm onSaveExpenseDate={onSaveData} onCensel={() => {setModal(false)}}/> : console.log("he")}
			<div className='new-expense__actions'>
				<button onClick={submitHandler}>Add Expense</button>
			</div>
		</div>
	)
}

export default ExpenseFrom
