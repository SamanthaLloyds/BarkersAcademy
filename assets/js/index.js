(function() {
  "use strict"

  const dogSizeImages = document.getElementsByClassName("dog-size-img");
  let selectedDogSize = "";
  const dogAgeToHuman = {
      "small": {
          "1": "15",
          "2": "24",
          "3": "28",
          "4": "32",
          "5": "36",
          "6": "40",
          "7": "44",
          "8": "48",
          "9": "52",
          "10": "56",
          "11": "60",
          "12": "64",
          "13": "68",
          "14": "72",
          "15": "76",
          "16": "80"
      },
      "medium": {
          "1": "15",
          "2": "24",
          "3": "28",
          "4": "32",
          "5": "36",
          "6": "42",
          "7": "47",
          "8": "51",
          "9": "56",
          "10": "60",
          "11": "65",
          "12": "69",
          "13": "74",
          "14": "78",
          "15": "83",
          "16": "87"
      },
      "large": {
          "1": "15",
          "2": "24",
          "3": "28",
          "4": "32",
          "5": "36",
          "6": "45",
          "7": "50",
          "8": "55",
          "9": "61",
          "10": "66",
          "11": "72",
          "12": "77",
          "13": "82",
          "14": "88",
          "15": "93",
          "16": "120"
      }
  }

  for (let i = 0; i < dogSizeImages.length; i++) {
      dogSizeImages[i].addEventListener("click", function() {
          for (let i = 0; i < dogSizeImages.length; i++) {
              dogSizeImages[i].style.border = "none";
          }

          this.style.border = "5px solid rgba(52, 73, 94, 1)";
          selectedDogSize = this.id;
      })
  }

  document.getElementById("calc-dog-age-button").addEventListener("click", function () {
      const dogAge = document.getElementById("dog-age").value;
      if (selectedDogSize && dogAge && (dogAge <= 16)) {
        document.getElementById("dog-calc-error").style.display = "none";
        const age = dogAgeToHuman[selectedDogSize][dogAge];
        document.getElementById("dog-human-age").innerText = `Age in Human Years: ${age}`;
      } else {
          document.getElementById("dog-calc-error").style.display = "block";
      }
  })

  document.getElementById("clear-dog-age-button").addEventListener("click", function () {
      document.getElementById("dog-age").value = "";
      document.getElementById("dog-human-age").innerText = "";
      selectedDogSize = "";
      for (let i = 0; i < dogSizeImages.length; i++) {
          dogSizeImages[i].style.border = "none";
      }
  })
})();