var likes = 0;

var likeButton = document.querySelector('button');
var likeDisplay = document.querySelector('p span');

likeButton.addEventListener('click', function() {
  likes++;
  likeDisplay.textContent = likes;
  likeDisplay.classList.add("liked");
});
