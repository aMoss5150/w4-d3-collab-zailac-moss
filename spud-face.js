window.addEventListener("DOMContentLoaded", (event) => {

  //!! ** Phase 1B: Update license with event delegation and event.target **
  //
  const submitForm = document.getElementById('drivers-license-form')

  //const userInput = document.getElementById('title');
  //


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
        //!!DONOR CHECK
        const donor = document.getElementById('donor-status')
        donor.addEventListener('click', (event) => {
          const cardDonor = document.getElementById('card-donor-status');
          if (donor.checked && licenseId1Val === licenseIdComVal) {
            cardDonor.innerText = "YES Please"

          }
        });
      } else {
        alert("License numbers do not match!")
      }
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
  const counter = 0;
  const submitButton = document.getElementsByClassName("form__submit");
  console.log(submitButton);
  submitButton.innerText = "";

  submitButton.addEventListener("click", event => {
    counter++;


    submitButton.innerHTML = "Submit" + counter;
  })




});
