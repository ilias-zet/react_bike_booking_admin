
const AddBike = ({setBicycles,bicycles,updateStat}) =>{
    //Функции для проверки валидности данных
    const isNumber = (n) => {
        return !isNaN(Number(n));
    }
    const strCheck = (str) =>{
        return str.length>=5
    }
    //Функция для добавления велосипеда в список
    const addBike = () =>{
        var idCheck = true //Переменная уникальности айди
        var fieldCheck = true // Переменная заполненности полей
        // Считывание инпутов
        const _id = document.getElementById('id').value
        const _name = document.getElementById('name').value
        const _type = document.getElementById('type').value
        const _color = document.getElementById('color').value
        const _wheel_size = document.getElementById('wheel_size').value
        const _price = document.getElementById('price').value
        const _description = document.getElementById('description').value
        // Массив значений
        const arr = [_id,_name,_type,_color,_wheel_size,_price,_description]
        // Проверка заполненности полей
        arr.map(value =>{if(value.length==0) fieldCheck = false})
        // Проверка уникальности айди
        if(bicycles.filter(bicycle => bicycle.id==_id).length>0) idCheck = false
        
        if(fieldCheck){// Если поля заполнены
            // Если все числовые значения заполнены числами
            if(isNumber(_id)&&isNumber(_price)&&isNumber(_wheel_size)){
                // Если все строки имеют минимум 5 символов
                if(strCheck(_name)&&strCheck(_type)&&strCheck(_color)&&strCheck(_description)){
                    // Если айди уникален
                    if(idCheck){
                        // Создаем объект 
                        const newBycicle = {
                            id: Number(_id),
                            name: _name,
                            type: _type,
                            color: _color,
                            wheel_size: Number(_wheel_size),
                            price: Number(_price),
                            description: _description,
                            status:'Available'
                        }
                        // Добавляем его в список
                        setBicycles([...bicycles,newBycicle])
                        clear()
                    }
                    else alert('All Bike IDs should be unique!')
                }
                else alert('All text fields minimum length should be 5 characters!')
            }
            else alert('All number fields should accept only number!')
        }
        else alert('All fields should be required!')
    }
    const clear = () =>{
        document.getElementById('id').value = ''
        document.getElementById('name').value = ''
        document.getElementById('type').value = ''
        document.getElementById('color').value = ''
        document.getElementById('wheel_size').value = ''
        document.getElementById('price').value = ''
        document.getElementById('description').value = ''
    }
	return(
        <div>
        <div className="add-bike">
            <div className='input-container'>
                <div>
                    <input type="text" id="name" placeholder='Name'/>
                    <input type="text" id="color" placeholder='Color'/>
                    <input type="text" id="price" placeholder='Price'/>
                </div>
                <div>
                    <input type="text" id="type" placeholder='Type'/>
                    <input type="text" id="wheel_size" placeholder='Wheel size'/>
                    <input type="text" id="id" placeholder='ID (slug): XXXXXXXXXXXX'/>
                </div>
            </div>
            
            <textarea placeholder="Description" id="description"></textarea>
            <div className='button-container'>
                <button onClick={() => addBike()}>SAVE</button>
                <button onClick={() => clear()}>CLEAR</button>
            </div>
        </div>
        <hr/>
        </div>
	)
}

export default AddBike