// Get the current year for the copyright
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Skills carousel manual controls
  const track = document.querySelector('.skills-slide-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (track && prevBtn && nextBtn) {
    let isScrollingForward = true;
    const slideWidth = 250; // Width of one slide
    
    // Function to toggle the animation direction
    function changeDirection(direction) {
      // Stop current animation
      track.style.animation = 'none';
      
      // Force reflow to ensure animation restarts
      void track.offsetWidth;
      
      if (direction === 'forward') {
        track.style.animation = 'scroll 30s linear infinite';
        isScrollingForward = true;
      } else {
        track.style.animation = 'scrollReverse 30s linear infinite';
        isScrollingForward = false;
      }
    }
    
    prevBtn.addEventListener('click', function() {
      changeDirection('backward');
    });
    
    nextBtn.addEventListener('click', function() {
      changeDirection('forward');
    });
  }
});