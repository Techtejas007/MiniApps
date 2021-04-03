/* global document */
var dogImage = document.querySelector('img');

dogImage.onclick = function () {
    'use strict';
    var myImages = dogImage.getAttribute('src');
    if (myImages === 'Images/puppy.jfif') {
        dogImage.setAttribute('src', 'C:\\Users\\HP\\OneDrive\\Desktop\\my-project\\sample-site\\Images\\dog.jfif');
    } else {
        dogImage.setAttribute('src', 'C:\\Users\\HP\\OneDrive\\Desktop\\my-project\\sample-site\\Images\\dog.jfif');
    }
};