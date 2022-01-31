// пробуем сортироват лампочки

//получаем доступ к колонкам вывода
let dNumber = document.querySelector('.dNumber')
let dColor = document.querySelector('.dColor')
let dLength = document.querySelector('.dLength')


// выбираем из списка подсветки
let colorF = document.querySelector('.colorF')// доступ к списку подсветок
let lengthF = document.querySelector('.lengthF')// доступ к списку подсветок
let btF = document.querySelector('.btF')// доступ к кнопке

//строгое сравнение
btF.onclick = function(){
    dColor.innerHTML = '' // что бы очищалось поле
    dLength.innerHTML = ''
    dNumber.innerHTML = ''
    let lampFind = lamp.filter(item =>(item.color == colorF.value && item.length == lengthF.value))// массив куда будем выводить отфильтрованный массив
    let out1 =''
    let out2 =''
    let out3 =''
    for(let key in lampFind){
        let x = lampFind[key]
        out1 += x.model+'<br>'
        out2 += x.color+'<br>'
        out3 += x.length+'<br>'
        dNumber.innerHTML = out1
        dColor.innerHTML = out2
        dLength.innerHTML = out3 
        colorF.value = 'тип подсветки'  
        lengthF.value = 'длина'     
    }
}

// будет 3 блока с кнопками для строго сравнения. для фильтра по свету. для фильтра по длине

// фильтр только по подсветки
let colorOnly = document.querySelector('.colorOnly')
let btColorOnly = document.querySelector('.btColorOnly')

btColorOnly.onclick = function(){
    let lampFind = lamp.filter(item =>(item.color == colorOnly.value ))// массив куда будем выводить отфильтрованный массив
    let out1 =''
    let out2 =''
    let out3 =''
    for(let key in lampFind){
        let x = lampFind[key]
        out1 += x.model+'<br>'
        out2 += x.color+'<br>'
        out3 += x.length+'<br>'
        dNumber.innerHTML = out1
        dColor.innerHTML = out2
        dLength.innerHTML = out3 
        colorOnly.value = 'тип подсветки'   
    }
}

// фильтр только по по длине
let lengthOnly = document.querySelector('.lengthOnly')
let btLengthOnly = document.querySelector('.btLengthOnly')
btLengthOnly.onclick = function(){
    let lampFind = lamp.filter(item =>(item.length == lengthOnly.value ))// массив куда будем выводить отфильтрованный массив
    let out1 =''
    let out2 =''
    let out3 =''
    for(let key in lampFind){
        let x = lampFind[key]
        out1 += x.model+'<br>'
        out2 += x.color+'<br>'
        out3 += x.length+'<br>'
        dNumber.innerHTML = out1
        dColor.innerHTML = out2
        dLength.innerHTML = out3 
        lengthOnly.value = 'длина'  
    }
}

// для заполнения длин в html надо будет заняться сортировкой длин по возрастанию
// делаем вывод списка по возрастанию длины

// вводим новый массив который будет сортированной копией по длине
let hLamp = lamp.filter(item=>(item.length)).sort((a,b)=>(a.length - b.length))

// ну и выводим его
let btAllH = document.querySelector('.btAllH')
btAllH.onclick = function(){
    let out1 =''
    let out2 =''
    let out3 =''
    for(let key in hLamp){
        let x = hLamp[key]
        out1 += x.model+'<br>'
        out2 += x.color+'<br>'
        out3 += x.length+'<br>'
        dNumber.innerHTML = out1
        dColor.innerHTML = out2
        dLength.innerHTML = out3
    }
}

// находим лампы по партномеру
let inModel = document.querySelector('.inModel')
let btModel = document.querySelector('.btModel')

btModel.onclick = function(){
    
        //let findModel = lamp.filter(item=>(item.model==inModel.value))//отфильтрованный массив по модели занесённый пользователем
		let findModel = lamp.filter(function(item){
			if(item.model == inModel.value){
				return item
			}
		}
        let out1 =''
        let out2 =''
        let out3 =''
        if(findModel.length == 1){// проверяем получился ли массив
            for (let key in findModel){
                let x = findModel[key]
                out1 += x.model+'<br>'
                out2 += x.color+'<br>'
                out3 += x.length+'<br>'
                dNumber.innerHTML = out1
                dColor.innerHTML = out2
                dLength.innerHTML = out3
                inModel.value = ''// очищаем поле ввода
                
            }

        }
        else{// если массив не получился то значит номера нет в списке
            dColor.innerHTML = 'нет в базе'
            inModel.value = ''// очищаем поле ввода
            dNumber.innerHTML = ''// и поля вывода тоже
            dLength.innerHTML = ''
        }    
    
}

// очищаем список
document.querySelector('.clear').onclick = function(){
    dNumber.innerHTML = ''
        dColor.innerHTML = ''
        dLength.innerHTML = ''
}








   




