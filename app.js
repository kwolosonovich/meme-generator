document.addEventListener("DOMContentLoaded", function() {

var photoInput = document.getElementById('file-id').value
var createMeme = document.getElementById('submit-button')

var memeObj = {
  photo: undefined,
  imgCanvas: undefined,
  imgContext: undefined,
//   imgCanvasWidth: undefined,
//   imgCanvasHeight: undefined,

  dateURL: undefined,
  topText: undefined,
  bottomText: undefined,
};

// add event listener to addPhoto

// photoInput.addEventListener('input', function(e) {
//     e.preventDefault()
//     updatePhotoVal(e)
// })

// set photo value
function photoSrc (e) {
    var photoInput = document.getElementById("file-id").files[0].name;
    // var photoInput = document.getElementById("file-id");

    memeObj.photo = photoInput;
}

function memeCanvas() {
    memeObj.imgCanvas = document.createElement("canvas")
    memeObj.imgContext = memeObj.imgCanvas.getContext("2d");
    console.log(memeObj)
    console.log(memeObj.photo.width);

    memeObj.imgCanvas.width = memeObj.photo.width;
    memeObj.imgCanvas.height = memeObj.photo.height;
    memeObj.imgContext.drawImage(
      memeObj.photo,
      0,
      0,
      memeObj.photo.width,
      memeObj.photo.height
    );
    // console.log(memeObj)
}


function topTextInput() {
    var getTopText = document.getElementById("text-input-top").value;
    memeObj.topText = getTopText
}

function bottomTextInput() {
    var getBottomText = document.getElementById("text-input-bottom").value;
    memeObj.bottomText = getBottomText
}


createMeme.addEventListener('click', function(e) {
    e.preventDefault()
    photoSrc()
    topTextInput();
    bottomTextInput();
    // console.log(memeObj)
    memeCanvas()
})

//save to local storage using imgCanvas


// function createMemePhoto () {
//     var newMeme = document.createElement("img")
//     newMeme.src = memeObj.photo
//     console.log(newMeme)
// }

// function createMemeText() {
//     var memeTopText = document.createElement("div");

// }

// add new meme to gallery 


// reset form


// add btn to delete meme from page



});