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
      let home_page = window.open("../home.html", "_self");
      home_page.addEventListener("DOMContentLoaded", () => {
        const sectionEl = home_page.document.querySelector(href);
        console.log(home_page.document.querySelector(href));
        sectionEl.scrollIntoView({ behavior: "smooth" });
      });
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
//NAVIGATION SCHEDULE

function navigationSchedule() {
  let items = document.querySelectorAll(".navigationSchedule_item");
  let itemsIcon = document.querySelectorAll(".navigationSchedule_item--icon");
  let itemsText = document.querySelectorAll(".navigationSchedule_item--text");

  itemsIcon[0].style.opacity = "100%";
  itemsText[0].style.color = "#115e59";
  itemsText[0].style.opacity = "100%";

  items[0].addEventListener("click", () => {
    items[0].classList.toggle("focus");
    items[1].classList.toggle("focus");

    for (let item_key = 0; item_key <= 1; item_key++) {
      let image_name =
        items[item_key].firstElementChild.attributes.src.nodeValue;
      if (items[item_key].classList.contains("focus")) {
        items[item_key].firstElementChild.attributes.src.nodeValue =
          image_name.replace(".png", "_focus.png");

        itemsIcon[item_key].style.opacity = "100%";
        itemsText[item_key].style.color = "#115e59";
        itemsText[item_key].style.opacity = "100%";
      } else {
        items[item_key].firstElementChild.attributes.src.nodeValue =
          image_name.replace("_focus.png", ".png");
        itemsIcon[item_key].style.opacity = "50%";
        itemsText[item_key].style.color = "#455a64";
        itemsText[item_key].style.opacity = "50%";
      }
    }
  });

  items[1].addEventListener("click", () => {
    items[0].classList.toggle("focus");
    items[1].classList.toggle("focus");

    for (let item_key = 0; item_key <= 1; item_key++) {
      let image_name =
        items[item_key].firstElementChild.attributes.src.nodeValue;
      if (items[item_key].classList.contains("focus")) {
        items[item_key].firstElementChild.attributes.src.nodeValue =
          image_name.replace(".png", "_focus.png");
        itemsIcon[item_key].style.opacity = "100%";
        itemsText[item_key].style.color = "#115e59";
        itemsText[item_key].style.opacity = "100%";
      } else {
        items[item_key].firstElementChild.attributes.src.nodeValue =
          image_name.replace("_focus.png", ".png");
        itemsIcon[item_key].style.opacity = "50%";
        itemsText[item_key].style.color = "#455a64";
        itemsText[item_key].style.opacity = "50%";
      }
    }
  });
}

navigationSchedule();
///////////////////////////////////////////////////////////////////
