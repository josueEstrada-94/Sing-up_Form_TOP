let button = document.querySelector('button')

button.addEventListener("click", function(){
    
    let password = document.querySelector('#password').value;
    let confirm = document.querySelector('#confirm').value;

    let error = document.querySelector('#error')

    if(password !== confirm){
        error.innerHTML='*password does not match'
    }
    console.log('hi');


})

