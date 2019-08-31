$(document).foundation()

$(document).ready(function(){
  $(".sticker").sticky({topSpacing:0});
  $(".sticker2").sticky({topSpacing:50});

});

// *-----Typewriter animation-----

const typewriterArr = ['Mobile-First-Approach', 'Responsive-Design', 'Clean-Code'];
document.addEventListener('DOMContentLoaded', init);

const typeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };
  
  //Type Method
  typeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    
    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.txtElement.innerHTML = `<span class="txt">
    ${this.txt}</span>`;
    
    let typeSpeed = 300;
    
    if(this.isDeleting) {
      typeSpeed /= 2;
    }
    
    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
    
    
    setTimeout(() => this.type(), typeSpeed);
  };
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = typewriterArr;
    const wait = txtElement.getAttribute('data-wait');
    new typeWriter(txtElement, words, wait);
  }
// *-----Typewriter animation end-----

//* ----Animate Bar on scroll-----

  window.addEventListener('scroll', () => {
  const elem = document.querySelectorAll(".progress-meter");   
  let width = 1;
  const id = setInterval(frame, 100);
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const scrolled = window.scrollY;
  console.log(scrolled);
  function frame() {
    if (Math.ceil(scrolled) === scrollable) {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = elem.style.width; 
      
    } else {
      clearInterval(id);
    }
  }
});
//* ----Animate Bar on scroll end-----