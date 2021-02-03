window.addEventListener("DOMContentLoaded", (event) => {

  // ** Phase 1B: Update license with event delegation and event.target **
  const submitButton = document.getElementsByClassName("form__submit");
  //const userInput = document.getElementById('title');
  // console.log('userInput:', userInput)


  // console.log('licenseEl:', licenseEl)

  submitButton.addEventListener("submit", (event) => {
    const licenseId1Val = document.getElementById("license-num").value;
    const licenseIdCompVal = document.getElementById("license-num-confirm").value;
    if (licenseId1Val === licenseIdCompVal) {

      function updateLicense(inputId, OutputId) {
        const userInput = document.getElementById(inputId).value;

        squareDiv.setAttribute("class", "square");
        squareDiv.style.backgroundColor = color;
        liElement.append(squareDiv);

      }
      outputId.value = inputId.value;


    }

  });
  updateLicense("blue-item", "blue");
  updateLicense("red-item", "red");
  updateLicense("purple-item", "purple");

  // ** Phase 2: Add focus and blur events to form inputs **




  // ** Phase 3: Check that license numbers match **




  // ** Phase 4: Update submit button click count **




});
