window.addEventListener("DOMContentLoaded", (event) => {

  // ** Phase 1B: Update license with event delegation and event.target ** 
  const submitButton = document.getElementsByClassName("form__submit");
  const userInput = document.getElementById('title');
  // console.log('userInput:', userInput)

  const licenseEl = document.getElementById('card-title')
  // console.log('licenseEl:', licenseEl)

  submitButton.addEventListener("submit", (event) => {
    const licenseId1Val = document.getElementById("license-num").value;
    const licenseIdCompVal = document.getElementById("license-num-confirm").value;
    if (licenseId1Val === licenseIdCompVal) {

    }
  });


  // ** Phase 2: Add focus and blur events to form inputs **




  // ** Phase 3: Check that license numbers match **




  // ** Phase 4: Update submit button click count **




});