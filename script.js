function updateHeading() {
  const heading = document.getElementById('spartan');
  if (window.innerWidth <= 850) {
    heading.textContent = 'Building supercharged communities for Web3';
  } else {
    heading.textContent = 'Crypto’s premium marketing agency for social media & GTM strategies';
  }
}

// Initial check
updateHeading();

// Add event listener for resizing
window.addEventListener('resize', updateHeading);












document.addEventListener('DOMContentLoaded', () => {
  const logosSlide = document.querySelector('.logos-slide');
  if (logosSlide) {
    logosSlide.style.animation = 'none'; // Pause animation
    logosSlide.offsetHeight; // Trigger a reflow
    logosSlide.style.animation = ''; // Resume animation
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelector(".logos");
  const original = document.querySelector(".logos-slide");
  const copy = original.cloneNode(true);

  // Append the clone to the container
  logos.appendChild(copy);

  // Trigger a reflow to ensure that the clone is correctly applied
  logos.offsetHeight; // Trigger reflow

  // Optionally, you might need to reset the animation to ensure smooth continuation
  logos.querySelectorAll(".logos-slide").forEach(slide => {
    slide.style.animation = 'none'; // Pause the animation
    slide.offsetHeight; // Trigger reflow
    slide.style.animation = ''; // Resume the animation
  });
});


let lastScrollTop = 0;
const nav = document.querySelector('nav');


window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    nav.classList.remove('visible');
    nav.classList.add('hidden');
  } else {
    // Scrolling up
    nav.classList.remove('hidden');
    nav.classList.add('visible');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



let lastScrollTopMobile = 0;
const mobileNav = document.querySelector('.mobile-nav');

// Function to update visibility based on scroll direction
function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll === 0) {
    // At the top of the page
    mobileNav.style.background = 'none'; // Reset background
    mobileNav.style.boxShadow = 'none'; // Remove box-shadow
    mobileNav.style.backdropFilter = 'none'; // Remove backdrop-filter
  } else if (currentScroll > lastScrollTopMobile) {
    // Scrolling down
    mobileNav.classList.remove('visible');
    mobileNav.classList.add('hidden');
    mobileNav.style.background = 'rgba(255, 255, 255, 0.30)';
    mobileNav.style.boxShadow = '0px 8px 25px 0px rgba(0, 0, 0, 0.25)';
    mobileNav.style.backdropFilter = 'blur(10px)';
  } else {
    // Scrolling up
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('visible');
  }

  lastScrollTopMobile = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize state on page load
window.addEventListener('load', function () {
  mobileNav.style.background = 'none'; // Reset background
  mobileNav.style.boxShadow = 'none'; // Remove box-shadow
  mobileNav.style.backdropFilter = 'none'; // Remove backdrop-filter
});




document.addEventListener('DOMContentLoaded', function () {
  const mobileXContainer = document.querySelector('.mobile-x-container');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOpenedNav = document.querySelector('.mobile-opened-nav');
  const body = document.body;
  let scrollPosition = 0;

  function toggleNav() {
    const isActive = mobileNav.classList.toggle('active');
    mobileOpenedNav.classList.toggle('visible', isActive);
    mobileXContainer.classList.toggle('active', isActive);
    body.classList.toggle('nav-active', isActive);

    if (isActive) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  // Event listener for the mobile X container
  mobileXContainer.addEventListener('click', toggleNav);


  // Event listeners for each link in the mobile opened nav
  const navLinks = mobileOpenedNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Call the toggleNav function
      toggleNav();
    });
  });


});








gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".hero-section-right-side",
  {
    x: '100%',
    opacity: 0
  },
  {
    x: '0%',
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.1, // Add a 0.5 second delay before the animation starts
    scrollTrigger: {
      trigger: ".hero-section-right-side",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);



// Fade in the element when it enters the viewport
gsap.fromTo(".hero-section-left-side",
  {
    opacity: 0  // Start fully transparent
  },
  {
    opacity: 1, // Fade to fully visible
    duration: 1, // Duration of 1 second
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".hero-section-left-side",
      start: "top 80%", // Start the animation when the top of the element hits 80% of the viewport
      toggleActions: "play none none none"
    }
  }
);


// Animate the element to fade in and move from bottom to top on page load
gsap.fromTo(".grid-hero",
  {
    opacity: 0,    // Start fully transparent
    y: 100         // Start 100 pixels below the original position
  },
  {
    opacity: 1,
    delay: 0.2,    // Fade to fully visible
    y: 0,          // Move to the original position
    duration: 1, // Duration of 1.5 seconds
    ease: "power2.out" // Smooth easing effect
  }
);













document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.framework-buttons > div'); // Select all buttons
  const images = document.querySelectorAll('.frm-image-container > div'); // Select all images
  const descriptions = document.querySelectorAll('.framework-desc-container > div'); // Select all descriptions

  function handleButtonClick(e) {
    // Remove active state from all buttons, images, and descriptions
    buttons.forEach(btn => btn.classList.remove('active'));
    images.forEach(img => img.classList.remove('active-img'));
    descriptions.forEach(desc => desc.classList.remove('active-desc'));

    // Add active state to the clicked button
    const clickedButton = e.currentTarget;
    clickedButton.classList.add('active');

    // Show the corresponding image and description
    const targetImgId = clickedButton.getAttribute('data-target');
    document.querySelector(`.${targetImgId}`).classList.add('active-img');

    // Determine which description to show based on button clicked
    const targetDescClass = targetImgId.replace('frm-img', 'desc'); // e.g., frm-img1 => desc1
    document.querySelector(`.${targetDescClass}`).classList.add('active-desc');
  }

  // Initialize by showing the first button, image, and description as active
  buttons[0].classList.add('active');
  images[0].classList.add('active-img');
  descriptions[0].classList.add('active-desc');

  // Attach event listeners to each button
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
});






gsap.fromTo(".framework-title",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".framework-title", // Element that triggers the animation
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top",   // When the bottom of the element hits the top of the viewport         // Optional: sync the animation with the scroll position
      once: true           // Optional: animate only once
    }
  }
);












let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
}





gsap.registerPlugin(ScrollTrigger);

// Framework buttons animation
gsap.fromTo(
  ".framework-buttons > div", // Select all buttons inside the container
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".framework-title", // Element that triggers the animation
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top",   // When the bottom of the element hits the top of the viewport
      once: true           // Optional: animate only once
    },
    stagger: 0.1 // Stagger the animation by 0.1 seconds
  }
);



// Framework description animation
gsap.utils.toArray(".framework-desc-container > div").forEach((desc) => {
  gsap.fromTo(
    desc, // Select each description
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".framework-title", // Same trigger as the framework buttons
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top",   // End when the bottom of the element leaves the top of the viewport
        once: true           // Only animate once
      }
    }
  );
});





gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".frm-image-container", // Select the container
  {
    opacity: 0, // Start with opacity 0 (invisible)
  },
  {
    opacity: 1, // End with opacity 1 (fully visible)
    duration: 0.5, // Animation duration
    ease: "power2.out", // Easing function for smooth transition
    scrollTrigger: {
      trigger: ".frm-image-container", // Element that triggers the animation
      start: "top 80%", // When the top of the container hits 80% of the viewport height
      end: "bottom 20%", // When the bottom of the container hits 20% of the viewport height
      once: true // Animate only once
    }
  }
);


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".phone-slider-header-title",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".phone-slider-header-title",
      toggleActions: "play none none none", // Only plays the animation on enter
    }
  }
);


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray([".top-row", ".description", ".image-placeholder"]).forEach((element, index) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element, // Same trigger as the framework buttons
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top",   // End when the bottom of the element leaves the top of the viewport
        once: true           // Only animate once
      }
    }
  );
});



gsap.utils.toArray(".dots .dot").forEach((dot, index) => {
  gsap.fromTo(
    dot, // Select each dot
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: index * 0.1, // Stagger the animation for each dot
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".dots", // Trigger when the dots container enters the viewport
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top",   // End when the bottom of the element leaves the top of the viewport
        once: true           // Only animate once
      }
    }
  );
});




gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".cmm-title",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cmm-title",
      toggleActions: "play none none none", // Only plays the animation on enter
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".cmm-alt",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cmm-alt",
      toggleActions: "play none none none", // Only plays the animation on enter
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".rigth-side-cmm",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".rigth-side-cmm",
      toggleActions: "play none none none", // Only plays the animation on enter
    }
  }
);







let customSlideIndex = 1;
showCustomSlides(customSlideIndex);

function changeCustomSlide(n) {
  showCustomSlides(customSlideIndex += n);
}

function currentCustomSlide(n) {
  showCustomSlides(customSlideIndex = n);
}

function showCustomSlides(n) {
  let i;
  let slides = document.getElementsByClassName("custom-slide");
  let dots = document.getElementsByClassName("custom-dot");
  if (n > slides.length) { customSlideIndex = 1 }
  if (n < 1) { customSlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" custom-actives", "");
  }
  slides[customSlideIndex - 1].style.display = "block";
  dots[customSlideIndex - 1].className += " custom-actives";
}








gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".tes-title",
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".tes-title", // Element that triggers the animation
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top",   // When the bottom of the element hits the top of the viewport         // Optional: sync the animation with the scroll position
      once: true           // Optional: animate only once
    }
  }
);


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".custom-slider-header-title",
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".custom-slider-header-title", // Element that triggers the animation
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top",   // When the bottom of the element hits the top of the viewport         // Optional: sync the animation with the scroll position
      once: true           // Optional: animate only once
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".custom-slider-content",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".custom-slider-content", // Element that triggers the animation
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top",   // When the bottom of the element hits the top of the viewport         // Optional: sync the animation with the scroll position
      once: true           // Optional: animate only once
    }
  }
);



gsap.utils.toArray(".custom-dots .custom-dot").forEach((dot, index) => {
  gsap.fromTo(
    dot, // Select each custom dot
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: index * 0.1, // Stagger the animation for each dot
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".custom-dots", // Trigger when the custom dots container enters the viewport
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top",   // End when the bottom of the element leaves the top of the viewport
        once: true           // Only animate once
      }
    }
  );
});



// Target all .first-tes elements
gsap.utils.toArray(".testies .first-tes").forEach((tes, index) => {
  gsap.fromTo(
    tes, // Select each .first-tes container
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5, // Adjust duration as needed
      delay: index * 0.2, // Stagger the animation for each .first-tes
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testies", // Trigger when the .testies container enters the viewport
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top",   // End when the bottom of the element leaves the top of the viewport
        once: true           // Only animate once
      }
    }
  );
});
