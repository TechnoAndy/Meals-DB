export default function countLikes(Elements) {
  let counter = 0;
  const likesCounter = Elements.querySelectorAll('div');
  likesCounter.forEach(() => {
    counter += 1;
  });
  return counter;
}