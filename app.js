const hiddenProducts = document.getElementById("hidden-products")
const showMoreBtn = document.getElementById("show-more-btn");

// console.log(hiddenProducts, showMoreBtn);
showMoreBtn.addEventListener("click", ()=>{
    if(hiddenProducts.classList.contains("hidden")){
       hiddenProducts.classList.remove('hidden');
       hiddenProducts.classList.add('show');
       showMoreBtn.innerText="Collapse";
    }else{
       hiddenProducts.classList.remove('show');
       hiddenProducts.classList.add('hidden');
       showMoreBtn.innerText="Show More Products >"
    }
})

const subscribeBtn = document.getElementById("subscribe-btn");
const email = document.getElementById("email");
const error = document.getElementById("error");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeBtn.addEventListener("click", ()=>{
    if(emailRegex.test(email.value)){
        error.innerText="Subscribed";
    }else{
        error.innerText="Invalid Email";
    }
})