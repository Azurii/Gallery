`use strict`;

const setImage = () => {
  event.preventDefault();

  let largeImg = document.getElementById(`largeImg`);
  let target = event.target;

  event.preventDefault();

  largeImg.src = `${target.src}`;
};

const setEvents = () => {
  let thumbs = document.getElementById(`thumbs`);

  thumbs.addEventListener(`click`, setImage);
};

setEvents();

var imgs = document.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
  var url = imgs[i].parentNode.href;
  var img = document.createElement('img');
  img.src = url;
}
