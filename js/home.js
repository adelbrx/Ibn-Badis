function display_navigation() {
  let navigation = document.querySelector(".navigation_list--link-nav");
  if (navigation.classList.contains("invisible")) {
    navigation.classList.remove("invisible");
    navigation.addEventListener("mouseout", () => {
      navigation.classList.add("invisible");
    });
  }
}

let element_navigation = document.querySelector(
  ".navigation_list--link:nth-child(4)"
);
element_navigation.addEventListener("mouseover", display_navigation);
