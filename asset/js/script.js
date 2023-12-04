document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const cardContainer2 = document.getElementById("cardContainer3");

  // Sample card data
  const cardData = [
    {
      imageSrc: "path/to/your/image1.jpg",
      alt: "Card 1 Image",
      text: "Some quick example text for Card 1.",
    },
    {
      imageSrc: "path/to/your/image2.jpg",
      alt: "Card 2 Image",
      text: "Some quick example text for Card 2.",
    },
    {
      imageSrc: "path/to/your/image3.jpg",
      alt: "Card 3 Image",
      text: "Some quick example text for Card 3.",
    },
    {
      imageSrc: "path/to/your/image4.jpg",
      alt: "Card 4 Image",
      text: "Some quick example text for Card 4.",
    },
    {
      imageSrc: "path/to/your/image5.jpg",
      alt: "Card 5 Image",
      text: "Some quick example text for Card 5.",
    },
    {
      imageSrc: "path/to/your/image6.jpg",
      alt: "Card 6 Image",
      text: "Some quick example text for Card 6.",
    },
    {
      imageSrc: "path/to/your/image7.jpg",
      alt: "Card 7 Image",
      text: "Some quick example text for Card 7.",
    },
    {
      imageSrc: "path/to/your/image8.jpg",
      alt: "Card 8 Image",
      text: "Some quick example text for Card 8.",
    },
    {
      imageSrc: "path/to/your/image9.jpg",
      alt: "Card 9 Image",
      text: "Some quick example text for Card 9.",
    },
    // Add more card data as needed
  ];

  cardData.forEach((card) => {
    const cardColumn = document.createElement("div");
    cardColumn.className = "col-4 mt-3";

    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const cardImage = document.createElement("img");
    cardImage.src = card.imageSrc;
    cardImage.alt = card.alt;
    cardImage.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = card.text;

    const cardButton = document.createElement("a");
    cardButton.href = "#";
    cardButton.className = "btn btn-primary";
    cardButton.textContent = "Go somewhere";

    // Add an event listener to the cardButton
    cardButton.addEventListener("click", function () {
      // Move the card from cardContainer to cardContainer2
      cardColumn.remove(); // Remove from cardContainer
      cardContainer2.appendChild(cardColumn); // Append to cardContainer2
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
