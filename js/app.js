document.addEventListener('DOMContentLoaded', () => {
  const newFormItem = document.querySelector('#new-form-item');
  newFormItem.addEventListener('submit', handleNewFormItemSubmit);
})

const handleNewFormItemSubmit = function (event) {
  event.preventDefault();

  const albumItem = createAlbumItem(event.target);
  const albumList = document.querySelector('#album-list');
  albumList.appendChild(albumItem);

  event.target.reset();
}

const createAlbumItem = function (form) {
  const albumItem = document.createElement('div');
  albumItem.classList.add('album-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  albumItem.appendChild(title);

  const artist = document.createElement('h3');
  artist.textContent = form.artist.value;
  albumItem.appendChild(artist);

  const genre = document.createElement('h4');
  genre.textContent = form.genre.value;
  albumItem.appendChild(genre);

  return albumItem;


}
