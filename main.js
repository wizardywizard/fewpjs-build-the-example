// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let newPromise = fetch(mimicServerCall) 
   .then(function(response){
     return response
   })   
   .catch(function(error){
     debugger
    let mod = document.getElementById('modal')
    mod.className=""
    let modm = document.getElementById('modal-message')
    modm.append(error)
    setTimeout(function() {
     mod.className='hidden'     
    }, 5000) 
   })


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
