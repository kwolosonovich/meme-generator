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
    newMemeDivAdd();
    createMemePhoto();
    createMemeText();
    removeMeme();
  });

  // set photo values
  function photoSrc(e) {
    var photoInput = document.getElementById("file-id").value;
    console.log(photoInput);
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

  //meme div
  function newMemeDivAdd() {
    var newMemeDiv = document.createElement("div")
    newMemeDiv.id = memeObj.photo;
    newMemeDiv.className += "new-meme-div"
    addToGallery.appendChild(newMemeDiv);
  }

  //create meme - add text - add delete button
  function createMemePhoto() {
    var memeDiv = document.getElementById(memeObj.photo)
    var newMeme = document.createElement("img");
    newMeme.src = memeObj.photo;
    newMeme.className += "meme-format";
    memeDiv.append(newMeme);

  }  

  function createMemeText() {   
    var memeDiv = document.getElementById(memeObj.photo);
    var memeTopText = document.createElement("div");
    memeTopText.className += "meme-top-text";
    memeTopText.innerHTML = memeObj.topText;
    memeDiv.append(memeTopText);

    var memeBottomText = document.createElement("div");
    memeBottomText.className += "meme-bottom-text";
    memeBottomText.innerHTML = memeObj.bottomText;
    memeDiv.append(memeBottomText);
  }

  function removeMeme() {
    var memeDiv = document.getElementById(memeObj.photo);
    var deleteMeme = document.createElement("button");
    deleteMeme.className += "remove-button";
    deleteMeme.innerHTML = "Delete";
    memeDiv.appendChild(deleteMeme);

    deleteMeme.addEventListener("click", function (e) {
      e.preventDefault;
      memeDiv.remove();
    });
  }
});
