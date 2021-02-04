window.addEventListener("DOMContentLoaded", (event) => {

  //!! ** Phase 1B: Update license with event delegation and event.target **
  //
  const submitForm = document.getElementById('drivers-license-form')
  //////////////---------------------------------------
  let labels = document.querySelectorAll('label');
  userInput.forEach(label => {



    licenseEl.innerHTML = userInput.value

  });

  const userInput = document.getElementById(inputId)
  const licenseEl = document.getElementById(outputId)


  // console.log('labels:', labels)
  ////////////-------------------------------------------

  //!!UPDATE LICENSE FUNC
  function updateLicense(inputId, outputId) {

    //!!SUBMIT FORM
    submitForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const licenseId1Val = document.getElementById("license-num").value;
      const licenseIdCompVal = document.getElementById("license-num-confirm").value;
      if (licenseId1Val === licenseIdCompVal) {
        const userInput = document.getElementById(inputId).value;
        const licenseEl = document.getElementById(outputId)
        licenseEl.innerHTML = userInput;
        const cardDonor = document.getElementById('card-donor-status');
        const donor = document.getElementById('donor-status') //
        if (donor.checked) {
          cardDonor.innerText = "YES Please"
        }
      } else {
        cardDonor.innerText = ""
        alert("License numbers do not match!")
      }


      // donor.addEventListener('click', (event) => {
      // });
    });
  }


  updateLicense("title", "card-title");
  updateLicense("first-name", "card-first-name");
  updateLicense("last-name", "card-last-name");
  updateLicense("eye-color", "card-eye-color");
  updateLicense("height", "card-height");
  updateLicense("license-num", "card-license-num");

  // ** Phase 2: Add focus and blur events to form inputs **

  const turnBlue = (id) => {
    const ids = document.getElementById(id);

    ids.addEventListener("focus", event => {
      event.target.style.backgroundColor = "blue";
    })
  }
  turnBlue("title");
  turnBlue("first-name");
  turnBlue("last-name");
  turnBlue("eye-color");
  turnBlue("height");
  turnBlue("license-num");

  const blurBlue = (id) => {
    const ids = document.getElementById(id);

    ids.addEventListener("blur", event => {
      event.target.style.backgroundColor = "white";
    })
  }
  blurBlue("title");
  blurBlue("first-name");
  blurBlue("last-name");
  blurBlue("eye-color");
  blurBlue("height");
  blurBlue("license-num");


  //!! ** Phase 3: Check that license numbers match **




  // ** Phase 4: Update submit button click count **
  let counter = 0;
  const submitButton = document.querySelector("button");
  submitButton.setAttribute("id", "button")
  console.log(submitButton);
  // submitButton.innerText = "";

  submitButton.addEventListener("click", event => {
    counter++;


    submitButton.innerText = "Submit" + " " + counter;
  })
});
