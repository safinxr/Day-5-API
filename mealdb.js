const searchFood= () =>{
    const input = document.getElementById("input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(result => resultDisply(result.meals))
}

const resultDisply = (meals) =>{
    const dad =document.getElementById('dad');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML =`
        <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
              </div>
        ` 
        dad.appendChild(div);
    })
}