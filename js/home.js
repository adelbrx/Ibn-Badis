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
      window.open("./waiting.html", "_self");
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
}

display_chatbox();

///////////////////////////////////////////////////////////
