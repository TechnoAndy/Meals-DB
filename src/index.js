const items = async () => {
  try {
    const resorve = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e');
    const data = await resorve.json();
    const { meals } = data;
    meals.forEach((element) => {
      document.getElementById('recipe-section').innerHTML += `<p>${element.strMeal}</p>
          <img src=${element.strMealThumb} alt="img=" class="images">`;
    }); return data;
  } catch (error) {
    return error;
  }
};
items();