document.body.style.fontFamily = "Silkscreen, cursive"





let buttonSottr = document.createElement('button');
    buttonSottr.style.cssText = `
    height: 40px;
    width: 40px;
    background-color: red;
    border:none;
    display: inline-block;
    margin-left:30%;`
    let meno = buttonSottr.innerHTML = '-'

buttonSottr.onmouseover = function(event){
    buttonSottr.style.cssText = `
    height: 40px;
    width: 40px;
    background-color: red;
    border:none;
    display: inline-block;
    opacity: 0.7;
    margin-left:30%;`
}
buttonSottr.onmouseout = function(event){
    buttonSottr.style.cssText = `
    height: 40px;
    width: 40px;
    background-color: red;
    border:none;
    display: inline-block;
    margin-left:30%;`
}

document.body.append(buttonSottr);







let div = document.createElement('div');
div.style.cssText = `
width:60px;
height:60px;
display: inline-block;
margin-left:17%`
document.body.append(div);



let number = document.createElement('span');
number.innerHTML = 0;
number.style.cssText = `
font-size: 40px;
font-family: 'Silkscreen', cursive;
display: inline-block;
right:1px;`

document.body.append(number)

div.appendChild(number);









let buttonAdd = document.createElement('button');
    buttonAdd.style.cssText = `
    height: 40px;
    width: 40px;
    background-color: green;
    border:none;
    display: inline-block;
    margin-left:17%;`
    let somma = buttonAdd.innerHTML = '+'

buttonAdd.onmouseover = function(event){
    buttonAdd.style.cssText = `
    height: 40px;
    width: 40px;
    background-color: green;
    border:none;
    display: inline-block;
    opacity: 0.7;
    margin-left:17%;`
}

buttonAdd.onmouseout = function(event){
    buttonAdd.style.cssText = `
    height: 40px;
    width: 40px;
    background-color: green;
    border:none;
    display: inline-block;
    margin-left:17%;`
}

document.body.append(buttonAdd);





buttonAdd.onclick = function(event){
    let incr = number.innerHTML ++ ;
   }
   
buttonSottr.onclick = function(event){
    let incr = number.innerHTML -- ;
   }














