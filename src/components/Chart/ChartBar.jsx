import React from 'react';
import "./ChartBar.css"

const ChartBar = (props) => {// Это компонента для деограммы
    let barFillHeight = '0%';// Это процент затрыты в на один месяц по умолчанию
    if(props.maxValue > 0){// Тут он проверяет больше ли максимальная затрата 0 если да то процент по умолчанию становится число после математических дествий ниже
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* Этому диву я задаю высоту как barFillHeight тоесть уже тот процент который вышел выше */}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    )
};

export default ChartBar;