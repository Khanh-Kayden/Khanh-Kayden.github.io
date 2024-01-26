let myImage1 = document.querySelector('#images1');
let myImage3 = document.querySelector('#images3');

myImage1.onclick = function() {
    let mySrc = myImage1.getAttribute('src');
    if(mySrc === 'images/Homie_1.jpeg') {
      myImage1.setAttribute ('src','images/Homie_2.jpeg');
    } else {
      myImage1.setAttribute ('src','images/Homie_1.jpeg');
    }
}

myImage3.onclick = function() {
    let mySrc = myImage3.getAttribute('src');
    if(mySrc === 'images/Homie_3.jpeg') {
      myImage3.setAttribute ('src','images/Homie_4.jpeg');
    } else {
      myImage3.setAttribute ('src','images/Homie_3.jpeg');
    }
}

let myUserButton = document.querySelector('.user_button');
let myStrangerHeading = document.querySelector('.stranger_name');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myStrangerHeading.innerHTML = 'Hello ' + myName + ',';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myStrangerHeading.innerHTML = 'Hello ' + storedName + ',';
}

myUserButton.onclick = function() {
  setUserName();
}

let myDumbButton = document.querySelector('.dumb_button');

myDumbButton.onclick = () => {
    alert('Please click with purpose!');
}