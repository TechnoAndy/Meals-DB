export default function countMeals(card) {
  let counter = 0;
  const meals = card.querySelectorAll('div');
  meals.forEach(() => {
    counter += 1;
  });
  return counter;
}
