import React from 'react';
import "./css/FilterExpenses.css"

const FilterExpenses = (props) => {// Это компонент с для фильтра наших затрат по дате
    const selectChangehandler = (event) => {// Тут мы бирем у селекта его изменение
        props.onChangeFilter(event.target.value)// И закидываем радителю
    };
    return (
        <div className='expenses-filter'>
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selectedyear} onChange={selectChangehandler}>
                <option value="All">Select All</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default FilterExpenses;