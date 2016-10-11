var Image = require('../models/image');

var ImageUI = function() {
  var image = new Image();
  image.all(this.render);
}

ImageUI.prototype.render = function(images) {
  var div = document.createElement("div");
  div.setAttribute("id", "imageGallery");
  div.setAttribute("class", "dashboard-widget");

  images.forEach(function(image) {
    var pTag = document.createElement('p');
    pTag.innerText = image.name;

    var img = document.createElement('img');
    img.src = image.url;

    div.appendChild(pTag);
    div.appendChild(img);
  });

  var widgets = document.querySelector("#widgets");
  widgets.appendChild(div);
};



module.exports = ImageUI;