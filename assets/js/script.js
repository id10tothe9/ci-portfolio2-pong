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
    if (!this.classList.contains('activeBtn')) {
      this.classList.add('activeBtn');
      howtoBtn.classList.remove('activeBtn');
      if (storyBoxStyle.getPropertyValue('display') === 'none') {
        storyBox.style.display = '';
        howtoBox.style.display = 'none';
      }
    }
  });

  howtoBtn.addEventListener('click', function (event) {
    if (!this.classList.contains('activeBtn')) {
      this.classList.add('activeBtn');
      storyBtn.classList.remove('activeBtn');
      if (howtoBoxStyle.getPropertyValue('display') === 'none') {
        howtoBox.style.display = '';
        storyBox.style.display = 'none';
      }
    }
  });

  // Get text part elements
  let storyPts = [
    document.getElementById('story-pt1'),
    document.getElementById('story-pt2'),
    document.getElementById('story-pt3'),
    document.getElementById('story-pt4'),
  ];
  let howtoPts = [
    document.getElementById('howto-pt1'),
    document.getElementById('howto-pt2'),
    document.getElementById('howto-pt3'),
    document.getElementById('howto-pt4'),
    document.getElementById('howto-pt5'),
  ];

  // Get navigation elements
  let storyArrowLeft = document.getElementById('story-arrow-left');
  let storyBullets = [
    document.getElementById('story-bullet1'),
    document.getElementById('story-bullet2'),
    document.getElementById('story-bullet3'),
    document.getElementById('story-bullet4'),
  ];
  let storyArrowRight = document.getElementById('story-arrow-right');
  let howtoArrowLeft = document.getElementById('howto-arrow-left');
  let howtoBullets = [
    document.getElementById('howto-bullet1'),
    document.getElementById('howto-bullet2'),
    document.getElementById('howto-bullet3'),
    document.getElementById('howto-bullet4'),
    document.getElementById('howto-bullet5'),
  ];
  let howtoArrowRight = document.getElementById('howto-arrow-right');
  // Get number of currently active bullet and text part


  storyArrowLeft.addEventListener('click', function(event) {
    for (let i = 1; i < 4; i++) {
      if (storyBullets[i].classList.contains('fa-solid')) {
        storyBullets[i].classList.remove('fa-solid');
        storyBullets[i].classList.add('fa-regular');
        storyPts[i].style.display = 'none';
        storyBullets[i-1].classList.remove('fa-regular');
        storyBullets[i-1].classList.add('fa-solid');
        storyPts[i-1].style.display = '';
      }
    }
  });

  storyArrowRight.addEventListener('click', function(event) {
    for (let i = 2; i >= 0; i--) {
      if (storyBullets[i].classList.contains('fa-solid')) {
        storyBullets[i].classList.remove('fa-solid');
        storyBullets[i].classList.add('fa-regular');
        storyPts[i].style.display = 'none';
        storyBullets[i+1].classList.remove('fa-regular');
        storyBullets[i+1].classList.add('fa-solid');
        storyPts[i+1].style.display = '';
      }
    }
  });

  howtoArrowLeft.addEventListener('click', function(event) {
    for (let i = 1; i < 5; i++) {
      if (howtoBullets[i].classList.contains('fa-solid')) {
        howtoBullets[i].classList.remove('fa-solid');
        howtoBullets[i].classList.add('fa-regular');
        howtoPts[i].style.display = 'none';
        howtoBullets[i-1].classList.remove('fa-regular');
        howtoBullets[i-1].classList.add('fa-solid');
        howtoPts[i-1].style.display = '';
      }
    }
  });

  howtoArrowRight.addEventListener('click', function(event) {
    for (let i = 3; i >= 0; i--) {
      if (howtoBullets[i].classList.contains('fa-solid')) {
        howtoBullets[i].classList.remove('fa-solid');
        howtoBullets[i].classList.add('fa-regular');
        howtoPts[i].style.display = 'none';
        howtoBullets[i+1].classList.remove('fa-regular');
        howtoBullets[i+1].classList.add('fa-solid');
        howtoPts[i+1].style.display = '';
      }
    }
  });


});