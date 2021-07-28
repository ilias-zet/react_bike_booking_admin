import React, { useState, useEffect } from 'react';


import Card from './Card.js'
import AddBike from './AddBike.js'
import Stats from './Stats.js'
import bicycleArr from './bicycleArr'

const Main = () =>{
	const [bicycles, setBicyclesValue] = useState(bicycleArr)
	// Функция возвращает объект с текущими статистическими значениями в момент вызова
	const returnCurrStat = () =>{
		let total_bicycles = bicycles.length
		let available_ = bicycles.filter(bicycle => bicycle.status=="Available").length
		let booked_ = bicycles.filter(bicycle => bicycle.status=="Busy").length
		let total_price = 0
		bicycles.map(bicycle => total_price+=bicycle.price)
		let average_
		total_bicycles>0
			?average_ = total_price/total_bicycles
			:average_ = 0
		let statistics = {
			total: total_bicycles,
			available: available_,
			booked: booked_,
			average: average_
		}
		return statistics
	}
	const [stat, setStat] = useState(returnCurrStat())
	
	/*
		Функция обновляет стейт статистики до текущего
		Такая форма записи позволяет вычислять текущие значения не в каждом 
		компоненте обновляющем стейт, а только в родительском, и передавать
		через параметры только функцию для обновления данных
	*/
	const updateStat = () =>{
		setStat(returnCurrStat())
	}
	// Вызывает обновление статистики при изменении массива
    useEffect(() => updateStat(), [bicycles])
    // Устанавливает в выпадающем списке статус указанный в объекте
    useEffect(() => {
    	bicycles.map(bicycle =>{
    		let status = document.getElementById('status_'+bicycle.id)
    		status.value = bicycle.status
    	})
    })
	const returnCards = () =>{
		return bicycles.map(bicycle => {
			return(
				<Card id={bicycle.id}
    			  name={bicycle.name}
    			  type={bicycle.type}
    			  color={bicycle.color}
    			  wheel_size={bicycle.wheel_size}
    			  price={bicycle.price}
    			  description={bicycle.description}
    			  status={bicycle.status}
    			  bicycles={bicycles}
    			  setBicycles={setBicyclesValue}
    			  updateStat={updateStat}
        	 	/>	
			)
		})
	}
	return(
	  <div className='main'>
        <div className="left-side">
        	{returnCards()}
        </div>
        <div className="right-side">
        	<AddBike bicycles={bicycles} setBicycles={setBicyclesValue} updateStat={updateStat}/>
        	<Stats stat={stat}/>
        </div>
      </div>
	)
}
export default Main