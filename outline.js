document.addEventListener("DOMContentLoaded", function () {
  var createMeme = document.getElementById("submit-button");
  var addToGallery = document.getElementById("memes");
  var memeForm = document.getElementById("create-meme");

  var memeObj = {
    photo: undefined,
    topText: undefined,
    bottomText: undefined,
  };

  // main function
  createMeme.addEventListener("click", function (e) {
    e.preventDefault();
    photoSrc();
    topTextInput();
    bottomTextInput();
    memeForm.reset();
    createMemePhoto();
    createMemeText();
    removeMeme();
  });

  // set photo values
  function photoSrc(e) {
    var photoInput = document.getElementById("file-id").files[0].name;
    memeObj.photo = photoInput;
  }

  function topTextInput() {
    var getTopText = document.getElementById("text-input-top").value;
    memeObj.topText = getTopText;
  }

  function bottomTextInput() {
    var getBottomText = document.getElementById("text-input-bottom").value;
    memeObj.bottomText = getBottomText;
  }

  //create meme - add text - add delete button
  function createMemePhoto() {
    var newMeme = document.createElement("img");
    newMeme.src = memeObj.photo;
    newMeme.className += "meme-format";
    newMeme.id = memeObj.photo;
    addToGallery.appendChild(newMeme);
  }  

  function createMemeText() {   
    var memeImage = document.getElementById(memeObj.photo);
    var memeTopText = document.createElement("div");
    memeTopText.className += "top-text";
    memeTopText.innerHTML = memeObj.topText;
    memeImage.append(memeTopText);

    var memeBottomText = document.createElement("div");
    memeBottomText.className += "bottom-text";
    memeBottomText.innerHTML = memeObj.bottomText;
    memeImage.append(memeBottomText);
  }

  function removeMeme() {
    var memeImage = document.getElementById(memeObj.photo);
    var deleteMeme = document.createElement("button");
    deleteMeme.className += "remove-button";
    deleteMeme.innerHTML = "Delete";
    memeImage.append(deleteMeme);

    deleteMeme.addEventListener("click", function (e) {
      e.preventDefault;
      memeImage.revmove();
    });
  }
});
