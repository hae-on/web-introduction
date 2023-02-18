const movieForm = document.querySelector('form');
const result = document.querySelector('.result');

const movieInput = document.getElementsByName('movie');
const movieLength = document.getElementsByName('movie').length;

movieForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = event.target['name'];
  const favoriteMovies = [];

  for (var i = 0; i < movieLength; i++) {
    if (movieInput[i].checked) favoriteMovies.push(movieInput[i].value);
  }
  result.innerText = `⭐️ ${nameInput.value}이(가) 좋아하는 영화는 ${favoriteMovies}입니다. ⭐️`;

  alert(
    `${nameInput.value}님 저랑 ${favoriteMovies.length}개의 취향이 같으시네요 🤭`
  );
});
