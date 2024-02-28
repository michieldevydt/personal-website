// // random color hover effect
// document.addEventListener("DOMContentLoaded", function() {
//   const pixels = document.querySelectorAll('.pixel'); // Get all pixels
//   const items = document.querySelectorAll('.item'); // Get all items

//   // Function to generate a random color
//   function generateRandomColor() {
//     return '#' + Math.random().toString(16).substr(2, 6); // Generate a random hex color
//   }

//   // Set random colors for all pixels
//   pixels.forEach(pixel => {
//     pixel.style.backgroundColor = generateRandomColor();
//   });

//   // Event listeners for mouseover and mouseout events
//   items.forEach((item, index) => {
//     item.addEventListener('mouseover', function() {
//       this.style.color = pixels[index].style.backgroundColor; // Set text color to corresponding pixel color on mouseover
//     });

//     item.addEventListener('mouseout', function() {
//       this.style.color = ''; // Reset text color on mouseout
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', function(event) {
  // array with texts to type in typewriter
  var dataText = ["I am Michiel De Vydt", "I am a quantitative social scientist"];

  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1").innerHTML += text.charAt(i);

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else {
      // text finished, call callback if there is a callback function
      if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
  }

  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (i < dataText.length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function() {
        // after callback (and whole text has been animated), start next text
        if (i < dataText.length - 1) {
          // Add a line break after the first sentence
          document.querySelector("h1").innerHTML += "<br>";
        }
        StartTextAnimation(i + 1);
      });
    }
  }

  // start the text animation
  StartTextAnimation(0);
});


//click to Back-to-top
document.addEventListener('DOMContentLoaded', function() {
  // Get the Back button element
  var backButton = document.querySelector('#back');

  // Get the target section element
  var backSection = document.querySelector('.landingpage');

  // Add a click event listener to the About button
  backButton.addEventListener('click', function() {
    // Scroll to the target section smoothly
    backSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// click to About
document.addEventListener('DOMContentLoaded', function() {
  // Get the About button element
  var aboutButton = document.querySelector('#about');

  // Get the target section element
  var aboutSection = document.querySelector('.section-about');

  // Add a click event listener to the About button
  aboutButton.addEventListener('click', function() {
    // Scroll to the target section smoothly
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// click to Research
document.addEventListener('DOMContentLoaded', function() {
  // Get the Research button element
  var researchButton = document.querySelector('#research');

  // Get the target section element
  var researchSection = document.querySelector('.section-research');

  // Add a click event listener to the About button
  researchButton.addEventListener('click', function() {
    // Scroll to the target section smoothly
    researchSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// click to Data skills
document.addEventListener('DOMContentLoaded', function() {
  // Get the Data button element
  var dataButton = document.querySelector('#data');

  // Get the target section element
  var dataSection = document.querySelector('.section-data');

  // Add a click event listener to the About button
  dataButton.addEventListener('click', function() {
    // Scroll to the target section smoothly
    dataSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// click to Run section
document.addEventListener('DOMContentLoaded', function() {
  // Get the Run button element
  var runButton = document.querySelector('#run');

  // Get the target section element
  var runSection = document.querySelector('.section-run');

  // Add a click event listener to the About button
  runButton.addEventListener('click', function() {
    // Scroll to the target section smoothly
    runSection.scrollIntoView({ behavior: 'smooth' });
  });
});

