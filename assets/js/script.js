window.addEventListener('DOMContentLoaded', function () {

  let storyBtn = document.getElementById('btn-story-time');
  let howtoBtn = document.getElementById('btn-howto');


  storyBtn.addEventListener('click', function(event) {
    if (!this.classList.contains('active')) { // credit: property .contains and condition negation from ChatGPT4
      // Credit: idea to change class of active button and how to do it from ChatGPT4
      this.classList.add('active');
      howtoBtn.classList.remove('active');
    }
});




  howtoBtn.addEventListener('click', function(event) {
    if (!this.classList.contains('active')) { // credit: property .contains and condition negation from ChatGPT4
      // Credit: idea to change class of active button and how to do it from ChatGPT4
      this.classList.add('active');
      storyBtn.classList.remove('active');
    }
  });

});