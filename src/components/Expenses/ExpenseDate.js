import './css/ExpenseDate.css'

function ExpenseDate(props){// Это компонента для даты карты все берется через пропс 
    const month = props.date.toLocaleString('en-Us', {month:'long'})// Месяц
    const day = props.date.toLocaleString('en-Us', {day:'2-digit'})// День
    const year = props.date.getFullYear()// Год

    return(
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
    )
}
export default ExpenseDate