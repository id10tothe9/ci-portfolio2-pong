window.addEventListener('DOMContentLoaded', function () {
  // Get main buttons
  let storyBtn = document.getElementById('btn-story-time');
  let howtoBtn = document.getElementById('btn-howto');
  // Get intro-boxes and their styles
  let storyBox = document.getElementById('story-box');
  let storyBoxStyle = window.getComputedStyle(storyBox);
  let howtoBox = document.getElementById('howto-box');
  let howtoBoxStyle = window.getComputedStyle(howtoBox);

  storyBtn.addEventListener('click', function (event) {
    if (!this.classList.contains('active')) { // credit: property .contains and condition negation from ChatGPT4
      // Credit: idea to change class of active button and how to do it from ChatGPT4
      this.classList.add('active');
      howtoBtn.classList.remove('active');
      // Credit: getting and removing property value from ChatGPT4
      if (storyBoxStyle.getPropertyValue('display') === 'none') {
        storyBox.style.display = '';
        howtoBox.style.display = 'none';
      }
    }
  });

  howtoBtn.addEventListener('click', function (event) {
    if (!this.classList.contains('active')) { // credit: property .contains and condition negation from ChatGPT4
      // Credit: idea to change class of active button and how to do it from ChatGPT4
      this.classList.add('active');
      storyBtn.classList.remove('active');
      // Credit: getting and removing property value from ChatGPT4
      if (howtoBoxStyle.getPropertyValue('display') === 'none') {
        howtoBox.style.display = '';
        storyBox.style.display = 'none';
      }
    }
  });

  // Get navigation elements
  let storyArrowLeft = document.getElementById('story-arrow-left');
  let storyBullet1 = document.getElementById('story-arrow-left');
  let storyBullet2 = document.getElementById('story-arrow-left');
  let storyBullet3 = document.getElementById('story-arrow-left');
  let storyArrowRight = document.getElementById('story-arrow-left');
  let howtoArrowLeft = document.getElementById('story-arrow-left');
  let howtoBullet1 = document.getElementById('story-arrow-left');
  let howtoBullet2 = document.getElementById('story-arrow-left');
  let howtoBullet3 = document.getElementById('story-arrow-left');
  let howtoArrowRight = document.getElementById('story-arrow-left');

  storyArrowLeft.addEventListener('click', function(event) {
    
  });

});