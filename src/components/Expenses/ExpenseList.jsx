import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./css/ExpenseList.css"

const ExpenseList = (props) => {// Тут мы уже фильтруем все карты по годам
    let expenseContent = <h2 className='expenses-list__fallback'>No Expenses found</h2>// Это контент по умолчанию
    
    if(props.expense.length > 0){// Тут он проверяет больше ли длинна массива с фильтрованными обектами 0 если да то он создает новые карты
        expenseContent = props.expense.map((element) => {
			return (
				<ExpenseItem
						key={element.id}
						title={element.title}
						amount={element.amount}
						date={element.date}
					/>
			)
		})
    }
    if(props.filteredYear === 'All'){// Тут он проверяет равен ли велью выбронного елемента на "All" если да то он показывает все карты 
        expenseContent = props.arr.map((element) => {
            return (
            <ExpenseItem
                    title={element.title}
                    amount={element.amount}
                    key={element.id}
                    date={element.date}
                    />
            )
            })
    }
    return(
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    )
};

export default ExpenseList;