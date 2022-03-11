const searchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("input-field");

inputField.addEventListener("keypress", function(event) {
    // event.preventDefault();
    if (event.keyCode == 13)
    searchBtn.click();
});


const searchFood = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    if (searchText == '') {
        alert('Please Enter a Value')
    } else {
        // Load Data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    }
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // if (meals.length == 0) {
    //     alert('Enter Value')
    // }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            </div>
            </div>
        `
        searchResult.appendChild(div);
    })
}


const loadMealDetail = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="w-100 card-img-top" alt="Food Image">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Go somewhere</a>
        </div>
    `
    mealDetails.appendChild(div);
}