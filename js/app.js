/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

 // Define Global Variables
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
// End Global Variables

// Begin Main Functions
// build the nav
for (let i = 0; i < sections.length; i++) {
  let linkText = sections[i].id;
  let links = document.createElement("li");
  let anchor = document.createElement('a');
  anchor.innerText = linkText;
  anchor.setAttribute("class", "menu__link");
  links.appendChild(anchor);
  navBar.appendChild(links);
  // Scroll to anchor ID using scrollTO event
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: sections[i].offsetTop,
      behavior: 'smooth'
    })
  });
}
// Add class 'active' to section when near top of viewport
function changeClassWhileScroll () {
  sections.forEach(function (section) {
    let pageY = window.pageYOffset;
    let sectionTop = section.offsetTop - 50;
    let sectionHeight = section.offsetHeight;
    if (pageY > sectionTop && pageY <= sectionTop + sectionHeight) {
      section.classList.add("your-active-class")
    } else {
      section.classList.remove("your-active-class")
    }
})
}
window.addEventListener("scroll", changeClassWhileScroll);
// End Main Functions


// Build menu

// Scroll to section on link click

// Set sections as active
