document.addEventListener("DOMContentLoaded", function() {

if (window.File && window.FileReader && window.FileList && window.Blob) {
    } else {
        alert("The File APIs are not fully supported in this browser.");
    }

var createMeme = document.getElementById('submit-button');
// var dragAndDrop = document.getElementById("file-id");

// local storage array
var memeArr = JSON.parse(localStorage.getItem("memeArr")) || [];

// meme values
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

// set photo value


createMeme.addEventListener("click", function (e) {
  e.preventDefault();
//   photoSrc();
    document.getElementById("file-id").addEventListener("change", readImage, false);
//   readImage()
//   saveImg();
  appendMemeToDiv();
  topTextInput();
  bottomTextInput();
});


// function photoSrc () {
//     memeObj.photoInput = document.getElementById("file-id").files[0];
//     memeObj.photoSrc = document.getElementById("file-id").files[0].name;  
//     // const ctx = photoInput.getContext("2d");
// }

function readImage(e) {
    console.log(e)
    var reader = new FileReader()
    reader.onload = function() {
        // var span = document.createElement("span")
        // span.innerHTML = ['<img class="memeFormat" src="', memeObj.photoInput, '" title="', escape(memeObj.photoSrc), '"/>'].join('');
        //   document.getElementById('gallery').insertBefore(div, null)
        // };
    // memeObj.photoSrc
    reader.readAsDataURL(memeObj.photoInput);
    }
}

function saveImg(photo) {
    memeObj.imgData = getBase64Image(photo)
    memeArr.push(memeObj);
    localStorage.setItem("memeArr", JSON.stringify(memeArr));
}

// function getBase64Image(img) {
//     console.log("at get base")
//     var imgCanvas = document.createElement("canvas");
//     imgCanvas.width = img.width
//     imgCanvas.height = img.height

//     var imgContext = imgCanvas.getContext("2d")
//     imgContext.drawImage(img, 0, 0)

//     var dataURL = imgCanvas.toDataURL("image/jpeg")
    

    // canvas.width = memeObj.photo.width;
    // canvas.height = memeObj.photo.height;
    //var ctx = canvas.getContext("2d");
   // ctx.drawImage(memeObj.photo, canvasImg.width, canvasImg.width);

    // var dataURL = canvas.toDataURL("image/png");
    // console.log(dataURL);
    // return dataURL.replace(/^data:image\/(png|jpg);base64,/,"")


//top text
function topTextInput() {
    var getTopText = document.getElementById("text-input-top").value;
    memeObj.topText = getTopText
}

//bottom text
function bottomTextInput() {
    var getBottomText = document.getElementById("text-input-bottom").value;
    memeObj.bottomText = getBottomText
}

//save to local storage 

function appendMemeToDiv () {
    var memeGallery = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");  
    var image = new Image(200, 200);
    
    image.src = './pictures/example.jpg'
    document.body.appendChild(image)
    document.getElementById("gallery").appendChild(image);
    // image.onload = drawImageActualSize;
    src = JSON.parse(localStorage.getItem("memeArr"))  
}

/// function createMemePhoto () {
//     var newMeme = document.createElement("img")
//     newMeme.src = memeObj.photoSrcmeObj.photo;
//     console.log(newMeme)
// }

function createMemeText() {
    var memeTopText = document.createElement("div");
}

});


// dragAndDrop.addEventListener("input", function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     e.dataTransfer.dropEffect = "copy";
// })