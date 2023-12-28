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

////////////////////////////////////////////////////////////////////////
//REGISTRATION
function buildHTMLTemplateRegistration(data) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lilita+One&family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="https://drive.google.com/file/d/1SJej1X4wx_fLsONLmx0wIF3R8dt46p9m/view?usp=drive_link" alt="logo" />
      </div>
      <div class="titre">New registration</div>
      <style>
        header {
          background-color: #115e59;
          /* font-family: "Noto Kufi Arabic", sans-serif; */
          color: aliceblue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-top: 20px;
          padding-bottom: 20px;
          gap: 1vw;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .logo img {
          height: 4vw;
          width: 5vw;
        }
      </style>
    </header>
    <main>
      <table>
        <tbody width="50vw">
          <tr>
            <td>First Name</td>
            <td>${data.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>${data.lastName}</td>
          </tr>
          <tr>
            <td>Birth Day</td>
            <td>${data.birthDay}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>${data.sexe}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>${data.street}</td>
          </tr>
          <tr>
            <td>Postal Code</td>
            <td>${data.codePostal}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>${data.city}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${data.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>${data.phone}</td>
          </tr>
          <tr>
            <td>School Name</td>
            <td>${data.school}</td>
          </tr>
          <tr>
            <td>School Location</td>
            <td>${data.schoolPlace}</td>
          </tr>
          <tr>
            <td>School Type</td>
            <td>${data.schoolType}</td>
          </tr>
          <tr>
            <td>Level</td>
            <td>${data.level}</td>
          </tr>
        </tbody>
      </table>
    </main>

    <style>
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      main table {
        margin-top: 4rem;
        border: 2px;
      }

      main table tbody td {
        width: 30vw;
        height: 3.2rem;
      }
    </style>
  </body>
</html>
`;
}

document.getElementById("sendMail").addEventListener("click", function () {
  const forms = document.querySelectorAll(".input_content--item");
  const first_name = forms[0].value;
  const last_name = forms[1].value;
  const birth_day = forms[2].value;
  const sexe = forms[3].value;
  const street = forms[4].value;
  const code_postal = forms[5].value;
  const city = forms[6].value;
  const email = forms[7].value;
  const phone = forms[8].value;
  const school = forms[9].value;
  const school_place = forms[10].value;
  const school_type = forms[11].value;
  const level = forms[12].value;

  const data = {
    firstName: first_name,
    lastName: last_name,
    birthDay: birth_day,
    sexe: sexe,
    street: street,
    codePostal: code_postal,
    city: city,
    email: email,
    phone: phone,
    school: school,
    schoolPlace: school_place,
    schoolType: school_type,
    level: level,
  };

  console.log(data);

  fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "adelbereksi1@gmail.com",
      subject: "New Registration",
      message: buildHTMLTemplateRegistration(data),
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});
