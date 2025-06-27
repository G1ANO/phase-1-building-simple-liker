// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide the error modal initially by adding the 'hidden' class
const modal = document.getElementById('modal');
modal.classList.add('hidden');

// Select all heart icons with class 'like-glyph'
const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // On success: toggle heart state and styling
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(errorMessage => {
        // On failure: show modal with error message
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = errorMessage;
        modal.classList.remove('hidden');

        // Hide modal after 3 seconds
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Provided mimicServerCall function (do not modify)
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}