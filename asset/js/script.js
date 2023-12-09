document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const cardContainer3 = document.getElementById("cardContainer3");

  // Sample card data
  const cardData = [
    {
      imageSrc: "../ProjectUAS/asset/img/test.webp",
      alt: "Card 1 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image2.jpg",
      alt: "Card 2 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image3.jpg",
      alt: "Card 3 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image4.jpg",
      alt: "Card 4 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image5.jpg",
      alt: "Card 5 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image6.jpg",
      alt: "Card 6 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image7.jpg",
      alt: "Card 7 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image8.jpg",
      alt: "Card 8 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image9.jpg",
      alt: "Card 9 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image10.jpg",
      alt: "Card 10 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image11.jpg",
      alt: "Card 11 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image12.jpg",
      alt: "Card 12 Image",
      text: "$ 6 448.30",
    },
    // Add more card data as needed
  ];
  cardData.forEach((card) => {
    const cardColumn = document.createElement("div");
    cardColumn.className = "col-4 mt-3";
    cardColumn.style.cursor = "pointer"; // Set cursor property to pointer

    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.width = "200px"; // Set the width of the card
    cardElement.style.height = "230px"; // Set the height of the card
    cardElement.style.position = "relative"; // Set position to relative for absolute positioning inside
    cardElement.style.backgroundColor = "#282633"; // Set the background color
    cardElement.style.boxShadow =
      "10px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.cursor = "pointer";

    const cardImage = document.createElement("img");
    cardImage.src = card.imageSrc;
    cardImage.alt = card.alt;
    cardImage.className = "card-img-top";
    cardImage.style.width = "100%"; // Make the image fill the entire width
    cardImage.style.position = "absolute";
    cardImage.style.top = "0"; // Position the image at the top
    cardImage.style.left = "50%"; // Center the image horizontally
    cardImage.style.transform = "translateX(-50%)"; // Center the image horizontally

    const cardBody = document.createElement("div");
    cardBody.className = "cardbody";

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = card.text;
    cardText.style.position = "absolute";
    cardText.style.top = "70%"; // Center the text vertically
    cardText.style.left = "26%"; // Center the text horizontally
    cardText.style.transform = "translate(-50%, -50%)"; // Center the text both vertically and horizontally
    cardElement.style.boxShadow =
      " 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.color = "#fff"; // Set the button text color
    cardElement.style.fontSize = "18px";
    cardElement.style.fontWeight = "bold";

    const cardButton = document.createElement("a");
    cardButton.href = "#";
    cardButton.className = "btn btn-warning";
    cardButton.textContent = "🛒Trade🛒";
    cardButton.style.backgroundColor = "#ffcc00"; // Set the button background color
    cardButton.style.color = "#333"; // Set the button text color
    cardButton.style.position = "absolute";
    cardButton.style.bottom = "10px"; // Adjust the bottom position as needed
    cardButton.style.left = "50%"; // Center the button horizontally
    cardButton.style.transform = "translateX(-50%)"; // Center the button horizontally
    cardButton.style.width = "90%"; // Set the height of the card
    cardButton.style.fontWeight = "bold";

    // Add hover effect
    cardColumn.addEventListener("mouseover", function () {
      cardElement.style.transform = "scale(1.05)"; // Scale up the card on hover
      cardElement.style.backgroundColor = "#3a3f4a"; // Change background color on hover
    });

    cardColumn.addEventListener("mouseout", function () {
      cardElement.style.transform = "scale(1)"; // Reset the scale on mouse out
      cardElement.style.backgroundColor = "#282633"; // Reset background color on mouse out
    });

    cardButton.addEventListener("click", function () {
      const currentContainer = this.closest(".row"); // Get the current container

      if (currentContainer === cardContainer) {
        // Move the card from cardContainer to cardContainer3
        cardColumn.remove(); // Remove from cardContainer
        cardContainer3.appendChild(cardColumn); // Append to cardContainer3
      } else if (currentContainer === cardContainer3) {
        // Move the card back from cardContainer3 to cardContainer
        cardColumn.remove(); // Remove from cardContainer3
        cardContainer.appendChild(cardColumn); // Append to cardContainer
      }
    });

    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardBody);
    cardColumn.appendChild(cardElement);
    cardContainer.appendChild(cardColumn);
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remova("select-clicked");
      caret.classList.remova("caret-rotate");
      menu.classList.remova("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer2");
  const cardContainer4 = document.getElementById("cardContainer4");

  // Sample card data
  const cardData = [
    {
      imageSrc: "path/to/your/image1.jpg",
      alt: "Card 1 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image2.jpg",
      alt: "Card 2 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image3.jpg",
      alt: "Card 3 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image4.jpg",
      alt: "Card 4 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image5.jpg",
      alt: "Card 5 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image6.jpg",
      alt: "Card 6 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image7.jpg",
      alt: "Card 7 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image8.jpg",
      alt: "Card 8 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image9.jpg",
      alt: "Card 9 Image",
      text: "$ 6 448.30",
    },
    {
      imageSrc: "path/to/your/image10.jpg",
      alt: "Card 10 Image",
      text: "$ 6 448.30.",
    },
    {
      imageSrc: "path/to/your/image11.jpg",
      alt: "Card 11 Image",
      text: "$ 6 448.30.",
    },
    {
      imageSrc: "path/to/your/image12.jpg",
      alt: "Card 12 Image",
      text: "$ 6 448.30",
    },
    // Add more card data as needed
  ];

  cardData.forEach((card) => {
    const cardColumn = document.createElement("div");
    cardColumn.className = "col-4 mt-3";
    cardColumn.style.cursor = "pointer"; // Set cursor property to pointer

    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.width = "200px"; // Set the width of the card
    cardElement.style.height = "230px"; // Set the height of the card
    cardElement.style.position = "relative"; // Set position to relative for absolute positioning inside
    cardElement.style.backgroundColor = "#282633"; // Set the background color
    cardElement.style.boxShadow =
      "10px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.cursor = "pointer";

    const cardImage = document.createElement("img");
    cardImage.src = card.imageSrc;
    cardImage.alt = card.alt;
    cardImage.className = "card-img-top";
    cardImage.style.width = "100%"; // Make the image fill the entire width
    cardImage.style.position = "absolute";
    cardImage.style.top = "0"; // Position the image at the top
    cardImage.style.left = "50%"; // Center the image horizontally
    cardImage.style.transform = "translateX(-50%)"; // Center the image horizontally

    const cardBody = document.createElement("div");
    cardBody.className = "cardbody";

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = card.text;
    cardText.style.position = "absolute";
    cardText.style.top = "70%"; // Center the text vertically
    cardText.style.left = "26%"; // Center the text horizontally
    cardText.style.transform = "translate(-50%, -50%)"; // Center the text both vertically and horizontally
    cardElement.style.boxShadow =
      " 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.color = "#fff"; // Set the button text color
    cardElement.style.fontSize = "18px";
    cardElement.style.fontWeight = "bold";

    const cardButton = document.createElement("a");
    cardButton.href = "#";
    cardButton.className = "btn btn-warning";
    cardButton.textContent = "🛒Trade🛒";
    cardButton.style.backgroundColor = "#ffcc00"; // Set the button background color
    cardButton.style.color = "#333"; // Set the button text color
    cardButton.style.position = "absolute";
    cardButton.style.bottom = "10px"; // Adjust the bottom position as needed
    cardButton.style.left = "50%"; // Center the button horizontally
    cardButton.style.transform = "translateX(-50%)"; // Center the button horizontally
    cardButton.style.width = "90%"; // Set the height of the card
    cardButton.style.fontWeight = "bold";

    // Add hover effect
    cardColumn.addEventListener("mouseover", function () {
      cardElement.style.transform = "scale(1.05)"; // Scale up the card on hover
      cardElement.style.backgroundColor = "#3a3f4a"; // Change background color on hover
    });

    cardColumn.addEventListener("mouseout", function () {
      cardElement.style.transform = "scale(1)"; // Reset the scale on mouse out
      cardElement.style.backgroundColor = "#282633"; // Reset background color on mouse out
    });

    cardButton.addEventListener("click", function () {
      const currentContainer = this.closest(".row"); // Get the current container

      if (currentContainer === cardContainer2) {
        // Move the card from cardContainer2 to cardContainer4
        cardColumn.remove(); // Remove from cardContainer2
        cardContainer4.appendChild(cardColumn); // Append to cardContainer4
      } else if (currentContainer === cardContainer4) {
        // Move the card back from cardContainer4 to cardContainer2
        cardColumn.remove(); // Remove from cardContainer4
        cardContainer2.appendChild(cardColumn); // Append to cardContainer2
      }
    });

    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardBody);
    cardColumn.appendChild(cardElement);
    cardContainer.appendChild(cardColumn);
  });
});

$(document).ready(function () {
  $(".menu .filter-box").click(function () {
    $(this).toggleClass("active");
  });
});

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Toggle Navbar Menu on Burger Click
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Closed Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});
