//////////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_self");
    }
  });
});

//////////////////////////////////////////////////////////////
//display navigation in home page
function display_navigation() {
  let navigation = document.querySelector(".navigation_list--link-nav");
  if (navigation.classList.contains("invisible")) {
    navigation.classList.remove("invisible");

    setTimeout(2000);
    navigation.addEventListener("mouseout", () => {
      navigation.classList.add("invisible");
    });
  }
}

let element_navigation = document.querySelector(
  ".navigation_list--link:nth-child(4)"
);

element_navigation.addEventListener("mouseover", display_navigation);

//////////////////////////////////////////////////////////////////////
//calculate gap of gallery

function set_gap_navigation_list() {
  let gap =
    (document.querySelector(".gallery_item").style.height * 3 + 40) / 13;

  document.querySelector(".activities_list").style.gap = `${gap - 0.1}rem`;
}

set_gap_navigation_list();

////////////////////////////////////////////////////////////////////
//displaying dialog chatbox with robot

function display_chatbox() {
  document.querySelector(".robot").addEventListener("click", () => {
    document.querySelector(".dialog").classList.toggle("invisible");
  });

  document
    .querySelector(".dialog_chatbox--exit")
    .addEventListener("click", () => {
      document.querySelector(".dialog").classList.add("invisible");
    });
}

display_chatbox();

///////////////////////////////////////////////////////////////////
//registration form button
function hide_form() {
  let form = document.querySelector(".registration_page--exit");
  form.addEventListener("click", () => {
    document.querySelector(".registration_page").classList.add("invisible");
  });
}

document
  .querySelector(".registration-btn--green")
  .addEventListener("click", () => {
    document.querySelector(".registration_page").classList.add("invisible");
  });

document.querySelector(".registration-btn").addEventListener("click", () => {
  document.querySelector(".registration_page").classList.remove("invisible");
});

hide_form();

///////////////////////////////////////////////////////////////////
//MOBILE NAVIGATION
function mobileNavigation() {
  let menus = document.querySelectorAll("ion-icon");
  document.querySelector(".btn-mobile-nav").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("nav-open");

    if (document.querySelector("header").classList.contains("nav-open")) {
      menus[1].style.display = "inline-block";
    } else {
      menus[1].style.display = "none";
    }
  });

  document.querySelector(".navigation").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("nav-open");

    if (document.querySelector("header").classList.contains("nav-open")) {
      menus[1].style.display = "inline-block";
    } else {
      menus[1].style.display = "none";
    }
  });
}

mobileNavigation();
