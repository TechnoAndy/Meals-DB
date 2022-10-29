export default function countComments(Elements) {
  let counter = 0;
  const comments = Elements.querySelectorAll('div');
  comments.forEach(() => {
    counter += 1;
  });
  return counter;
}