////////////////////////////////////////////////////////////////////////
//Contact us
document
  .getElementById("btn_contact-us")
  .addEventListener("click", function () {
    const forms = document.querySelectorAll(".item_input");
    const name = forms[0].value;
    const email = forms[1].value;
    const phone = forms[2].value;
    const message = forms[3].value;

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    console.log(data);

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "adelbereksi1@gmail.com",
        subject: "New Contact",
        message: JSON.stringify(data),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
