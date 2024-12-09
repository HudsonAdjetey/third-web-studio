const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".x-close");
menuBtn.addEventListener("click", () => {
  const menu = document.querySelector(".mb-nav");
  menu.classList.add("active");

  document.body.style.overflow = "hidden";
});

const menuUsers = document.querySelector(".about_users");

closeBtn.addEventListener("click", () => {
  const menu = document.querySelector(".mb-nav");
  menu.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Smooth scrolling

function parallaxEffectWithIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const speed = entry.target.dataset.speed || 0.5;
      entry.target.style.transform = `translateY(-${0.6}rem)`;

      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(parallaxEffectWithIntersection, {
  threshold: 0.5,
});

function addIntersectionObserver() {
  const observer = new IntersectionObserver((entry) => {
    if (entry.intersection) {
      console.log("Adding");
    }
  });
}
function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  console.log(window.innerHeight);
  console.log(rect.top);
  return rect.top >= 0 && rect.bottom <= window.innerHeight; // Checks if the section is fully within the viewport
}

window.addEventListener("scroll", function () {
  const section = document.querySelector(".about_users");
  const isInView = isSectionInView(section);
  console.log(isInView);
});
document.querySelectorAll(".about_users img").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
