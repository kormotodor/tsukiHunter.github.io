function upDate(previewPic){
  document.getElementById("image").style.margin = "50% 0% 0% 0%";
  document.getElementById('image').innerHTML = "";
  var image = document.getElementById("image");
  image.style.background = "url(" + previewPic.src + ") #FFFFFF";
	}
