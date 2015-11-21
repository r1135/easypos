var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/HTHospElite.jpg') {
        myImage.setAttribute('src', 'images/POS-Img.gif');
    } else {
        myImage.setAttribute('src', 'images/HTHospElite.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'EasyPOS is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'EasyPOS is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}