document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle (dark/light mode)
  const themeToggle = document.getElementById("themeToggle");
  const icon = themeToggle.querySelector("i");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    icon.classList.toggle("fa-moon", !isDark);
    icon.classList.toggle("fa-sun", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Show more/less button for skills
  const toggleBtn = document.getElementById("toggleSkills");
  const extraWrapper = document.getElementById("extraSkills");
  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    extraWrapper.classList.toggle("open", isOpen);
    toggleBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-chevron-up"></i>'
      : '<i class="fa-solid fa-chevron-down"></i>';
  });

  // Back to top button visibility and behavior
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("show", window.scrollY > 300);
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fade-in animation when scrolling into view
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

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

  // Animate skill bars with delay
  const skillFills = document.querySelectorAll(".skill-fill");
  skillFills.forEach((fill) => {
    const width = fill.getAttribute("data-fill");
    setTimeout(() => {
      fill.style.width = width;
    }, 300);
  });

  // Language switcher logic
  const langButtons = document.querySelectorAll(".lang-btn");
  const defaultLang = localStorage.getItem("lang") || "en";
  loadLanguage(defaultLang);
  updateActiveLangBtn(defaultLang);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      localStorage.setItem("lang", lang);
      loadLanguage(lang);
      updateActiveLangBtn(lang);
    });
  });

  async function loadLanguage(lang) {
    try {
      const res = await fetch(`lang/${lang}.json`);
      const translations = await res.json();

      // Text content elements
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) el.textContent = translations[key];
      });

      // Placeholder elements
      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[key])
          el.setAttribute("placeholder", translations[key]);
      });
    } catch (err) {
      console.error("Error loading language file:", err);
    }
  }

  function updateActiveLangBtn(lang) {
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }
});
