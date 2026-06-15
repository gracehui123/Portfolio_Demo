const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is currently visible in the viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
};

// shows when 30% of the element is visible
const observerOptions = {
  root: null, // Defaults to the browser viewport
  threshold: 0.2
};

// create the observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// select and observe all targeted elements
const elements = document.querySelectorAll('.projects-scroll');
elements.forEach(el => observer.observe(el));

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});