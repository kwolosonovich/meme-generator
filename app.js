document.addEventListener("DOMContentLoaded", function() {

var photoInput = document.getElementById('file-id').value
var createMeme = document.getElementById('submit-button')

var memeObj = {
    photo: undefined,
    topText: undefined,
    bottomText: undefined,
}

// add event listener to addPhoto

// photoInput.addEventListener('input', function(e) {
//     e.preventDefault()
//     updatePhotoVal(e)
// })

// set photo value
function photoSrc (e) {
    var photoInput = document.getElementById("file-id").files[0].name;
    memeObj.photo = photoInput;
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
    console.log(memeObj)
    createMemePhoto();

})

function createMemePhoto () {
    var newMeme = document.createElement("img")
    newMeme.src = memeObj.photo
    console.log(newMeme)
}

function createMemeText() {
    var memeTopText = document.createElement("div");

}

// add new meme to gallery 


// reset form


// add btn to delete meme from page



});