let counter = 0;
const value = document.querySelector("#value")
const btns = document.querySelectorAll(`.btn`)

btns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        const target = e.currentTarget.classList;

        if(target.contains("decrease")){
            counter--;
        }
        else if(target.contains("increase")){
            counter++;
        }else{
            counter = 0;
        }

        value.textContent = counter;
        
    });
    
});



