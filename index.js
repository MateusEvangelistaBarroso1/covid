var circulo = document.querySelector('.format-square');
var page_home = document.querySelector('.page-main')
function Main(){
    document.addEventListener('keydown', e=>{
        console.log(e.key)
        console.log(page_home)
         EventColor(e);
    })
  
   
}


function EventColor(event){
    switch(event.key){
        case '0':
            circulo.style.display = 'none';
            break;
        case '1':
            circulo.style.backgroundColor = 'red';
            break;
            case '2':
                circulo.style.backgroundColor = 'blue';
                break;
            case '3':
                    circulo.style.backgroundColor = 'orange';
                break;
              
        
        case 'Enter':
            circulo.style.margin = '10px';
            circulo.style.transition ='400ms';
            break;
    }
}
Main()