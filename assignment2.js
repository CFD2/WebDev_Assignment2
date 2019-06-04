window.addEventListener("load", function () {
    captionFunc();
    displayFullWrapper();
});

function captionFunc () {
    console.log("captionFunc()");
    var imgDisplay = document.getElementById("imageDisplay").firstElementChild;
    imgDisplay.addEventListener("mouseover", showCaption);
    imgDisplay.addEventListener("mouseout", hideCaption);
}

function hideCaption () {
    console.log("hideCaption()");
    var caption = document.getElementById("caption");
    caption.style.display = "none";
}

function showCaption () {
    console.log("showCaption()");
    var caption = document.getElementById("caption");
    caption.style.display = "block";
}


/**
 * wrapper to setup listeners on five preview images.
 */
function displayFullWrapper() {
    var imgPrev1 = document.getElementById("prev1");
    // console.log(imgPrev1);
    var imgPrev2 = document.getElementById("prev2");
    var imgPrev3 = document.getElementById("prev3");
    var imgPrev4 = document.getElementById("prev4");
    var imgPrev5 = document.getElementById("prev5");

    imgPrev1.addEventListener("click", function () {
        displayFull(imgPrev1);
    });
    imgPrev2.addEventListener("click", function () {
        displayFull(imgPrev2);
    });
    imgPrev3.addEventListener("click", function () {
        displayFull(imgPrev3);
    });
    imgPrev4.addEventListener("click", function () {
        displayFull(imgPrev4);
    });
    imgPrev5.addEventListener("click", function () {
        displayFull(imgPrev5);
    });

}
/**
 * This function displays the fullsize image which preview in a div wrapper is clicked.
 * Also changes figure caption from image title.
 * @param elem is the DOM node element being clicked on
 */
function displayFull (elem) {
    var name = parseName(elem.getAttribute("src"));
    // console.log(title);
    console.log("Parsed filename:", name);
    var bigImg = constructPath(name);
    console.log("Constructed path to fullsize image:", bigImg);
    var fullSizeContainer = document.getElementById("imageDisplay").firstElementChild;
    fullSizeContainer.src = bigImg;
    console.log("Title to insert:", elem.title);
    addCaption(elem.title);
}

function addCaption(s) {
    document.getElementById("caption").innerHTML = s;
}


/**
 * Parses *.jpg from the filepath
 * @param a
 * @returns {string | *}
 */
function parseName (a) {
    var regex = /\d+\.jpg$/;
    var parsedName  = a.match(regex); //some regex to parse name;
    return parsedName[0];
}

/**
 * Constructs filepath using some other folder
 * @param a is the input filename
 * @returns {string} constructed file path
 */
function constructPath (a) {
    return "images/medium/" + a;    //path is successfully constructed
}