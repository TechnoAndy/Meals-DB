const items = async () => {
  try {
    let resorve = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=e'
    );
    console.log(resorve);

    let data = await resorve.json();
    console.log(data);
    meals = data.meals;
    meals.forEach((element) => {
      document.getElementById(
        'recipe-section'
      ).innerHTML += `<p>${element.strMeal}</p>
        <img src=${element.strMealThumb} alt="img=" class="strMealThumb">`;
    });
  } catch (error) {
    return error;
  }
};

items();
