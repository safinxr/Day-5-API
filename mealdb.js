const searchFood= () =>{
    const input = document.getElementById("input");
    const inputValue = input.value;
    input.value = '';
    input.style.border ="1px solid lightgray";
    if(inputValue == ""){
        input.style.border ="1px solid red";
    }
    else{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(result => resultDisply(result.meals))
    }
    
}

const resultDisply = (meals) =>{
    const dad =document.getElementById('dad');
    dad.innerHTML ="";
    if(meals == null){
        const h1 = document.createElement("h1");
        
        h1.innerText ="NO Result Found"
        h1.classList.add("mx-auto")
        dad.appendChild(h1);
    }
    else{
        meals.forEach(meal => {
            const div = document.createElement("div");
            div.classList.add("col")
            div.innerHTML =`
            <div onclick="details(${meal.idMeal})" class="card">
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
}

const details =(md) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${md}`)
    .then(res => res.json())
    .then(D => mealDetailCard (D.meals[0]))

}
const mealDetailCard = x =>{
    console.log(x);
    const dad =document.getElementById("first-dad");
    dad.innerHTML ="";
    const div =document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`
    <img src="${x.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${x.strMeal}</h5>
      <p class="card-text">${x.strInstructions.slice(0, 100)}</p>
      <a href="${x.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    dad.appendChild(div);
}