import React from 'react';
import "./Chart.css"
import ChartBar from './ChartBar';

const Chart = (props) => {// Это компонента уже с основной частю диограммы 
    const dataPointsValues = props.dataPoints.map(data => data.value);// тут мы берем велю у массива для инфы диограм 
    const totalMax = Math.max(...dataPointsValues);//Тут мы его самое высокое значение
    return(
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => (// Тут мы мапом выводим уже все диограммы
                    <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                    />
                ))
            }
        </div>
    )
};

export default Chart;// И кстати да я решил ту проблему с диограммой когда если мы писали две затраты с одинаковыми месяцами
// все диограммы просто онулировались, так вот посмотрите в файл ../NewExpenses/ExpenseForm.jsx там я все обясню