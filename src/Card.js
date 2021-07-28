const Card = ({id, name, type, color, wheel_size, price, description,status,bicycles,setBicycles,updateStat}) =>{
        var closeIcon = "https://image.flaticon.com/icons/png/512/1828/1828778.png"
        // Функция изменяет статус объекта с указанным айди
        const changeStatus = (id) =>{
                bicycles.map(bicycle=>{ 
                if(bicycle.id==id){
                        // Получаем статус объекта по айди
                        let status = document.getElementById('status_'+id)
                        // Записываем в переменную текущий статус
                        status = status.options[status.selectedIndex].text
                        // Обновляем статус объекта
                        bicycle.status = status
                        updateStat() // И вызываем перерендеринг статистики
                }})
        }
        // Функция удаляет из массива объект с указнным айди
        const deleteBicycle = (id) =>{
                bicycles.map(bicycle=>{ 
                if(bicycle.id==id){
                        var arr = [...bicycles]
                        arr.splice(arr.indexOf(bicycle),1)
                        setBicycles(arr) // Обновляет состояние компонента
                        updateStat() // И также вызывает перерендеринг статистики
                }})
        }
        return(
                <div className={"card "+status}>
                                <div className="label">
                                        <strong>{name}</strong>
                                        <span> - {type} ({color})</span>
                                </div>
                                <div className="id">
                                        ID: {id}</div>
                                <div className="status">
                                        STATUS:
                                        <select id={"status_"+id}
                                                onChange={() => changeStatus(id)}>
                                        <option value='Available'>Available</option>
                                        <option value='Busy'>Busy</option>
                                        <option value='Unavailable'>Unavailable</option>
                                        </select>
                                </div>
                                <div className="price">
                                {price.toFixed(2)} UAH/hr.
                                </div>
                                <img src={closeIcon} onClick={()=>deleteBicycle(id)}/>
                        </div>
                )
}
export default Card