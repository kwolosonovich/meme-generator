document.addEventListener("DOMContentLoaded", function() {

// var photoInput = document.getElementById('file-id').value
// var photoInput = document.getElementById("file-id").files[0];

var createMeme = document.getElementById('submit-button')

// local storage array
var memeArr = JSON.parse(localStorage.getItem("memeArr")) || [];
// var memeArr = [];



var memeObj = {
  photoInput: undefined,
  photoSrc: undefined,

  imgData: undefined,
  imgCanvas: undefined,
  imgContext: undefined,
  imgCanvasWidth: undefined,
  imgCanvasHeight: undefined,
// dateURL: undefined,
  topText: undefined,
  bottomText: undefined,
};

var canvasImg = {
    canvas: undefined,
    src: undefined,
    width: 200,
    height: 200,
}

// add event listener to addPhoto

// photoInput.addEventListener('input', function(e) {
//     e.preventDefault()
//     updatePhotoVal(e)
// })

// set photo value


function photoSrc () {
    memeObj.photoInput = document.getElementById("file-id").files[0];
    // var photoInput = document.getElementById("file-id");
    memeObj.photoSrc = document.getElementById("file-id").files[0].name;
    image = getBase64Image(memeObj.photoInput)
    // console.log("photoSrc:" + memeObj.photoSrc);
    // const ctx = photoInput.getContext("2d");
    // console.log(ctx)
    // console.log(photoInput);
    // console.log(height)

    // memeObj.photo = photoInput;
}

function saveImg(photo) {
    memeObj.imgData = getBase64Image(photo)
    console.log(memeObj)
    memeArr.push(memeObj);
    // console.log("memeArr")
    // console.log(memeArr[0]);
    localStorage.setItem("memeArr", JSON.stringify(memeArr));
}



function getBase64Image(img) {
    console.log("at get base")
    var imgCanvas = document.createElement("canvas");
    imgCanvas.width = img.width
    imgCanvas.height = img.height

    var imgContext = imgCanvas.getContext("2d")
    imgContext.drawImage(img, 0, 0)

    var dataURL = imgCanvas.toDataURL("image/jpeg")
    

    



    // canvas.width = memeObj.photo.width;
    // canvas.height = memeObj.photo.height;
    //var ctx = canvas.getContext("2d");
   // ctx.drawImage(memeObj.photo, canvasImg.width, canvasImg.width);

    // var dataURL = canvas.toDataURL("image/png");
    // console.log(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/,"")
};

// function memeCanvas() {
//     memeObj.imgCanvas = document.createElement("canvas")
//     memeObj.imgContext = memeObj.imgCanvas.getContext("2d");
//     console.log(memeObj)
//     console.log(memeObj.photo.width);

//     memeObj.imgCanvas.width = memeObj.photo.width;
//     memeObj.imgCanvas.height = memeObj.photo.height;
//     memeObj.imgContext.drawImage(
//       memeObj.photo,
//       0,
//       0,
//       memeObj.photo.width,
//       memeObj.photo.height
//     );
//     // console.log(memeObj)
// }


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
    saveImg()
    appendMemeToDiv();
})

//save to local storage 

function appendMemeToDiv () {
    var memeGallery = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // console.log(memeGallery);
    

    const image = new Image(60, 45);
    image.src = './pictures/example.jpg'
    document.body.appendChild(image)
    // image.onload = drawImageActualSize;
    src = JSON.parse(localStorage.getItem("memeArr"))
    console.log(src)
    // image.src = 
    
    // memeGallery.append(canvasImg);


// function drawImageActualSize () {
//     canvas.width = this.naturalWidth;
//     canvas.height = this.naturalHeight;
//     ctx.drawImage(this, 0, 0, this.width, this.height);
// }

}

/// function createMemePhoto () {
//     var newMeme = document.createElement("img")
//     newMeme.src = memeObj.photoSrcmeObj.photo;
//     console.log(newMeme)
// }

// function createMemeText() {
//     var memeTopText = document.createElement("div");

// }

// add new meme to gallery 


// reset form


// add btn to delete meme from page



});