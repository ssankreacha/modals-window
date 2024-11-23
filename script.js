'use strict';

// Selectors for modal, overlay, close button, and show buttons
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Updated to match HTML class

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); // Show the modal
  overlay.classList.remove('hidden'); // Show the overlay
};

// Loop through all buttons to add event listeners for opening the modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close the modal
const closeModal = function () {
  modal.classList.add('hidden'); // Hide the modal
  overlay.classList.add('hidden'); // Hide the overlay
};

// Close the modal outside overlay
const closeModalOverlay = function () {
  modal.classList.add('hidden'); // Hide the modal
  overlay.classList.add('hidden'); // Hide the overlay
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModalOverlay);

// Using the 'Esc' key
document.addEventListener('keydown', function (e) {
  console.log(e.key); // key is a property from the object generated, showcasing the key pressed.

  // Close modal if the 'hidden' class is not there (meaning modal is already open)
  // Use 'Esc' to close it.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
