// Get the modal
const imgModal = document.getElementById('imgModal');

// Get the buttons that open the modal
// const btn = document.getElementsByClassName("img-btn");
const imgbtn1 = document.getElementById('imgbtn1');
const imgbtn2 = document.getElementById('imgbtn2');
const imgbtn3 = document.getElementById('imgbtn3');

// Get the <span> element that closes the modal
const modalX = document.getElementsByClassName('modal-x')[0];

// When the user clicks on the button, open the modal
imgbtn1.onclick = function () {
  imgModal.style.display = 'block';
};
imgbtn2.onclick = function () {
  imgModal.style.display = 'block';
};
imgbtn3.onclick = function () {
  imgModal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
modalX.onclick = function () {
  imgModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == imgModal) {
    imgModal.style.display = 'none';
  }
};
