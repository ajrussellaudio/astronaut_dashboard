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
    console.log(image);
    var pTag = document.createElement('h4');
    pTag.setAttribute("class", "caption");
    pTag.innerText = image.location;

    var imgDiv = document.createElement('div');
    imgDiv.style.backgroundImage = 'url('+ image.smallurl + ')'
    imgDiv.setAttribute("class", "galleryImage");
    // img.src = image.thumburl;

    var link = document.createElement('a');
    link.href = image.fullurl;
    link.target = "_blank";

    imgDiv.appendChild(pTag);
    link.appendChild(imgDiv);
    div.appendChild(link);
  });

  var widgets = document.querySelector("#widgets");
  widgets.appendChild(div);
};



module.exports = ImageUI;