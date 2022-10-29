const url = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2yUXOXfEoNKm2RSgRRdh/likes/');
const getLikes = async () => {
  const resolve = await fetch(url);
  const data = await resolve.json();
  return data;
};
const postLikes = async (url, id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
//   const likeArray = await getLikes();
// console.log(likeArray)
//   likeArray.forEach((element) => {
// console.log(element)
//     if (Number(element.item_id) === Number(id)) { count.innerText = `${element.likes}`; }
//   });
};
export { getLikes, postLikes };