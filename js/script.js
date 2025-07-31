document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const icon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });

  // Smooth Scrolling for Navigation Links
  const toggleBtn = document.getElementById("toggleSkills");
  const extraWrapper = document.getElementById("extraSkills");
  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    extraWrapper.classList.toggle("open", isOpen);

    toggleBtn.innerHTML = isOpen
      ? 'Show Less <i class="fa-solid fa-chevron-up"></i>'
      : 'Show More <i class="fa-solid fa-chevron-down"></i>';
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Fade-in Animation on Scroll
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationPlayState = "running";
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    fader.style.animationPlayState = "paused";
    appearOnScroll.observe(fader);
  });

  // Animate Skill Bars
  const skillFills = document.querySelectorAll(".skill-fill");
  skillFills.forEach((fill) => {
    const width = fill.getAttribute("data-fill");
    setTimeout(() => {
      fill.style.width = width;
    }, 300);
  });
});
