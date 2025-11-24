const closeSide = document.querySelector('#menu-hide');
const showSide = document.querySelector('#menu');
const Aside = document.querySelector('.Aside');
const lis = document.querySelectorAll('.Aside-menu li');
const rowData = document.querySelector('#rowData');
const faSpin = document.querySelector('#spin');
const box = document.querySelector('#box');
const logoImg = document.querySelector('.logo-img');
const searchLink = document.querySelector('#searchLink');
const cateLink = document.querySelector('#cateLink');
const areaLink = document.querySelector('#areaLink');
const ingredLink = document.querySelector('#ingredLink');
const contactLink = document.querySelector('#contactLink');




logoImg.addEventListener('click',()=>{
    window.location.reload();
})

showSide.addEventListener('click',()=>{
    showSide.classList.replace('d-block','d-none');
    Aside.style.left = '0';
    closeSide.classList.replace('d-none','d-block');
    lis.forEach(li => {
        li.style.animationName = 'slideUp';
    });
});

function autoCloseSlide(){
    closeSide.classList.replace('d-block','d-none');
    Aside.style.left = '-271px';
    showSide.classList.replace('d-none','d-block');
}
closeSide.addEventListener('click',()=>{
    autoCloseSlide();
        lis.forEach(li => {
        li.style.animationName = 'slideDown';
    });
    
})

async function getData(){
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    console.log(data);
    
    displayAllData(data.meals,20);
};
getData();

function displayAllData(list,Length){
    let container = ``;
    for (let index = 0; index < Length; index++) {
        container += `<div class="col-md-3 meal" onclick="showDetails(${list[index].idMeal})"> 
                <div  class="inner position-relative">
                <div  class="overlay d-flex align-items-center   position-absolute">
                    <p class="ms-2 h2">${list[index].strMeal}</p>
                </div>
                <img src="${list[index].strMealThumb}" class="w-100 h-100" alt="meal">
                </div>
            </div>`; }
    document.querySelector('#rowData').innerHTML = container;
};

async function showDetails(id){
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const meal = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(meal.meals[0]);
    box.innerHTML = `<div class="row text-white text-start" id="rowData">
            <div class="col-md-4 details-image">
                <img src="${meal.meals[0].strMealThumb}" class="w-100" alt="">
                <h2 class="mt-2 text-white">${meal.meals[0].strMeal}</h2>
            </div>
            <div class="col-md-8 details-info">
                <h2>Instructions</h2>
                <p>${meal.meals[0].strInstructions}</p>
                <p class="h3 fw-bold">Area :<span class="fw-semibold"> ${meal.meals[0].strArea}</span></p>
                <p class="h3 fw-bold">Category :<span class="fw-semibold"> ${meal.meals[0].strCategory}</span></p>
                <p class="h3 ">Recipes :<br> 
                <span class="recipe${meal.meals[0].strIngredient1==""?'d-none':''}">${meal.meals[0].strMeasure1} ${meal.meals[0].strIngredient1}</span>
                <span class="recipe${meal.meals[0].strIngredient2==""?'d-none':''}">${meal.meals[0].strMeasure2} ${meal.meals[0].strIngredient2}</span>
                <span class="recipe${meal.meals[0].strIngredient3==""?'d-none':''}">${meal.meals[0].strMeasure3} ${meal.meals[0].strIngredient3}</span>
                <span class="recipe${meal.meals[0].strIngredient4==""?'d-none':''}">${meal.meals[0].strMeasure4} ${meal.meals[0].strIngredient4}</span>
                <span class="recipe${meal.meals[0].strIngredient5==""?'d-none':''}">${meal.meals[0].strMeasure5} ${meal.meals[0].strIngredient5}</span>
                <span class="recipe${meal.meals[0].strIngredient6==""?'d-none':''}">${meal.meals[0].strMeasure6} ${meal.meals[0].strIngredient6}</span>
                <span class="recipe${meal.meals[0].strIngredient7==""?'d-none':''}">${meal.meals[0].strMeasure7} ${meal.meals[0].strIngredient7}</span>
                <span class="recipe${meal.meals[0].strIngredient8==""?'d-none':''}">${meal.meals[0].strMeasure8} ${meal.meals[0].strIngredient8}</span>
                <span class="recipe${meal.meals[0].strIngredient9==""?'d-none':''}">${meal.meals[0].strMeasure9} ${meal.meals[0].strIngredient9}</span>
                <span class="recipe${meal.meals[0].strIngredient10==""?'d-none':''}">${meal.meals[0].strMeasure10} ${meal.meals[0].strIngredient10}</span>
                <span class="recipe${meal.meals[0].strIngredient11==""?'d-none':''}">${meal.meals[0].strMeasure11} ${meal.meals[0].strIngredient11}</span>
                <span class="recipe${meal.meals[0].strIngredient12==""?'d-none':''}">${meal.meals[0].strMeasure12} ${meal.meals[0].strIngredient12}</span>
                <span class="recipe${meal.meals[0].strIngredient13==""?'d-none':''}">${meal.meals[0].strMeasure13} ${meal.meals[0].strIngredient13}</span>
                <span class="recipe${meal.meals[0].strIngredient14==""?'d-none':''}">${meal.meals[0].strMeasure14} ${meal.meals[0].strIngredient14}</span>
                <span class="recipe${meal.meals[0].strIngredient15==""?'d-none':''}">${meal.meals[0].strMeasure15} ${meal.meals[0].strIngredient15}</span>
                <span class="recipe${meal.meals[0].strIngredient16==""?'d-none':''}">${meal.meals[0].strMeasure16} ${meal.meals[0].strIngredient16}</span>
                </p>
                <p class="h3">Tags :<br> 
                    <a href="${meal.meals[0].strSource}" class=" tag bg-success">Source</a>
                    <a href="${meal.meals[0].strYoutube}" class="tag">Youtube</a>
                </p>
            </div>
        </div>`;
};


searchLink.addEventListener('click',()=>{
    autoCloseSlide();
    box.innerHTML=`<div class="d-flex justify-content-center gap-4 container mt-4" id="search">
        <input type="text" class="form-control " onkeyup="searchByName(${'this.value'})" placeholder="Search By Name" id="searchByName">
        <input type="text" class="form-control " onkeyup="searchByLetter(${'this.value'})" maxlength="1" placeholder="Search By First Letter" id="searchByLetter">
    </div>
        <div class="row" id="rowData">
        </div>
    `;
});


async function searchByName(searchName){
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.meals);
    let container = ``;
    for (let index = 0; index < data.meals.length; index++) {
        container += `<div class="col-md-3 meal" onclick="showDetails(${data.meals[index].idMeal})"> 
                <div  class="inner position-relative">
                <div  class="overlay d-flex align-items-center   position-absolute">
                    <p class="ms-2 h2">${data.meals[index].strMeal}</p>
                </div>
                <img src="${data.meals[index].strMealThumb}" class="w-100 h-100" alt="meal">
                </div>
            </div>`; }
    document.querySelector('.row').innerHTML = container;
}

async function searchByLetter(searchLetter) {
        faSpin.classList.replace('d-none','d-block');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`);
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    let container = ``;
    for (let index = 0; index < data.meals.length; index++) {
        container += `<div class="col-md-3 meal" onclick="showDetails(${data.meals[index].idMeal})"> 
                <div  class="inner position-relative">
                <div  class="overlay d-flex align-items-center   position-absolute">
                    <p class="ms-2 h2">${data.meals[index].strMeal}</p>
                </div>
                <img src="${data.meals[index].strMealThumb}" class="w-100 h-100" alt="meal">
                </div>
            </div>`; }
    document.querySelector('.row').innerHTML = container;
}


cateLink.addEventListener('click',async()=>{
    autoCloseSlide();
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.categories);

    let container = ``;
    for (let index = 0; index < data.categories.length; index++) {
        container += `
            <div class="col-md-3  category-meal " onclick="getCateName('${data.categories[index].strCategory}')" >
                <div class="category-inner position-relative">
                <div class="category-overlay p-2 position-absolute text-center">
                    <p class="h2">${data.categories[index].strCategory}</p>
                    <p>${data.categories[index].strCategoryDescription}</p>
                </div>
                <img src="${data.categories[index].strCategoryThumb}" class="w-100 h-100" alt="meal">
                </div>
            </div>
            
    `; }
    document.querySelector('#rowData').classList.remove('text-white','text-center');
    document.querySelector('#rowData').innerHTML = container;
});


async function getCateName(cateName){
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateName}`);
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.meals);
    displayAllData(data.meals,data.meals.length);
}

areaLink.addEventListener('click',async()=>{
    autoCloseSlide();
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.meals);

    let container = ``;
    for (let index = 0; index < data.meals.length; index++) {
        container += `
            <div class="col-md-3 text-white d-flex align-items-center justify-content-center" onclick="getAreaName('${data.meals[index].strArea}')">
                <div class="text-center location" id="location">
                    <i class="fa-solid fa-house-laptop"></i>
                    <p class="mt-2 fw-medium h2">${data.meals[index].strArea}</p>
                </div>
            </div>
            
    `; }
    document.querySelector('#rowData').classList.remove('text-white','text-center');
    document.querySelector('#rowData').innerHTML = container;
});


async function getAreaName(areaName){
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.meals);
    displayAllData(data.meals,data.meals.length);
};


ingredLink.addEventListener('click',async()=>{
    autoCloseSlide();
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.meals[0]);
    let container = ``;
    for (let index = 0; index < 20; index++) {
        container += `
            <div class="col-md-3 text-white text-center" onclick="getIngredName('${data.meals[index].strIngredient}')">
                <div class="text-center ingredients" id="ingredients">
                    <i class="fa-solid fa-drumstick-bite"></i>
                    <p class="mt-2 fw-medium h2">${data.meals[index].strIngredient}</p>
                    <p>${data.meals[index].strDescription.split(' ').splice(0,20).join(' ')}</p>
                </div>
            </div>
    `; }
    document.querySelector('#rowData').classList.remove('text-white','text-center');
    document.querySelector('#rowData').innerHTML = container;
});


async function getIngredName(ingredName){
    faSpin.classList.replace('d-none','d-block');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredName}`);
    const data = await response.json();
    faSpin.classList.replace('d-block','d-none');
    // console.log(data.meals);
    displayAllData(data.meals,data.meals.length);
}

contactLink.addEventListener('click',async()=>{
    autoCloseSlide();
    document.querySelector('#rowData').classList.remove('text-white','text-center');
    document.querySelector('#rowData').innerHTML = `<div class="min-vh-100 d-flex align-items-center justify-content-center">
        <div class="container w-75 text-center">
            <div class="row g-4">
            <div class="col-md-6">
                <input type="text" id="btnName" class="form-submit w-100 " data-regex="^[a-zA-Z]+$" placeholder="Enter Your Name">
                <p class="alert alert-danger ms-4 d-none">Special characters and numbers not allowed</p>
            </div>
            <div class="col-md-6">
                <input type="text" id="btnEmail" class="form-submit w-100 " data-regex="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" placeholder="Enter Your Email">
                <p class="alert alert-danger ms-4 d-none">Email not valid *exemple@yyy.zzz</p>
            </div>
            <div class="col-md-6">
                <input type="tel" id="btnPhone" class="form-submit w-100 " data-regex="^01[0-2,5][0-9]{8}$" placeholder="Enter Your Phone">
                <p class="alert alert-danger ms-4 d-none">Enter valid Phone Number</p>
            </div>
            <div class="col-md-6">
                <input type="number" id="btnAge" class="form-submit w-100 " data-regex="^(0?[1-9]|[1-9][0-9]|1[0-9][0-9]|200)$" placeholder="Enter Your Age">
                <p class="alert alert-danger ms-4 d-none">Enter valid age</p>
            </div>
            <div class="col-md-6">
                <input type="password" id="btnPass" class="form-submit w-100 " data-regex="^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,}$" placeholder="Enter Your Password">
                <p class="alert alert-danger ms-4 d-none">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
            </div>
            <div class="col-md-6">
                <input type="password" id="btnRepass" class="form-submit w-100 " placeholder="Repassword">
                <p class="alert alert-danger ms-4 d-none">Enter valid repassword</p>
            </div>
            <button class="mx-auto mt-3 submitBtn disabled" >Submit</button>
            </div>
        </div>
        </div>`;

    validationForm();
});


function validationForm(){
    const inputs = document.querySelectorAll('input');
    const btnName = document.querySelector('#btnName');
    const btnEmail = document.querySelector('#btnEmail');
    const btnPhone = document.querySelector('#btnPhone');
    const btnAge = document.querySelector('#btnAge');
    const btnPass = document.querySelector('#btnPass');
    const btnRepass = document.querySelector('#btnRepass');
    const submitBtn = document.querySelector('.submitBtn');

    
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('blur',function(){
            // console.log(this.value);
            validation(this);

    if(btnName.nextElementSibling.classList.contains('d-none') &&
        btnAge.nextElementSibling.classList.contains('d-none') &&
        btnEmail.nextElementSibling.classList.contains('d-none') &&
        btnPass.nextElementSibling.classList.contains('d-none') &&
        btnPhone.nextElementSibling.classList.contains('d-none') &&
        btnRepass.nextElementSibling.classList.contains('d-none') &&
        btnName.value!='' &&
        btnEmail.value!='' &&
        btnPhone.value!='' &&
        btnPass.value!='' &&
        btnRepass.value!='' &&
        btnAge.value!=''
    ){
        submitBtn.classList.remove('disabled');
    }
    else{
            submitBtn.classList.add('disabled');
        }

        });


}


function validation(Tag){
    const regex = new RegExp(Tag.getAttribute('data-regex'));
    if(!regex.test(Tag.value)){
        Tag.nextElementSibling.classList.replace('d-none','d-block');
    }else{
        Tag.nextElementSibling.classList.replace('d-block','d-none');
    }

if(inputs[5].value!=''){
    if(inputs[4].value!=inputs[5].value){
        inputs[5].nextElementSibling.classList.replace('d-none','d-block');
    }else{
        inputs[5].nextElementSibling.classList.replace('d-block','d-none');
    }}



}



    // const nameRegex = new RegExp(btnName.getAttribute('data-regex'));
    // const emailRegex = new RegExp(btnEmail.getAttribute('data-regex'));
    // const phoneRegex = new RegExp(btnPhone.getAttribute('data-regex'));
    // const passRegex = new RegExp(btnPass.getAttribute('data-regex'));
    // const ageRegex = new RegExp(btnAge.getAttribute('data-regex'));

    
// btnName.addEventListener('blur',()=>{
//     if(nameRegex.test(`${btnName.value}`)){
        
//     }
// })


    
}