const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
const pixel = document.querySelectorAll('.pixel')

var botton = document.createElement('BUTTON')
var context = 'Clear'
botton.append(context)
document.body.appendChild(botton)

let colorChoice = document.querySelectorAll('.color-choice')
let id = document.querySelector('#id')

let selectedColor = ''

palette.addEventListener('click',function(){
    
     selectedColor = colorChoice[1].id
})


 painting.addEventListener('click', function(e){
    
     e.target.style.backgroundColor = selectedColor
 }
 )

 botton.addEventListener('click',function(){
     for (let i=0; i < pixel.length;i++){
         pixel[i].style.backgroundColor ='white'
     }
 })

 


painting.addEventListener('dblclick', function(e){
    
    e.target.style.backgroundColor = 'white'

})


