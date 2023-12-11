const fotoSkin = document.getElementById("fotoSkin");
const zoomedImage = document.getElementById("zoomedImage");

fotoSkin.addEventListener("mousemove", handleMouseMove);
fotoSkin.addEventListener("mouseleave", resetZoom);

function handleMouseMove(e) {
  const { left, top, width, height } = fotoSkin.getBoundingClientRect();
  const x = ((e.pageX - left) / width - 0.5) * 2; // Normalize to -1 to 1
  const y = ((e.pageY - top) / height - 0.5) * 2;

  const scaleValue = 1.5; // You can adjust the scale factor for zoom in

  const transformValue = `scale(${scaleValue}) perspective(1000px) rotateX(${
    y * 10
  }deg) rotateY(${x * 10}deg)`;
  zoomedImage.style.transform = transformValue;
}

function resetZoom() {
  zoomedImage.style.transform = "scale(1)";
}

var spanText = function spanText(text) {
  var string = text.innerText;
  var spaned = "";
  for (var i = 0; i < string.length; i++) {
    if (string.substring(i, i + 1) === " ")
      spaned += string.substring(i, i + 1);
    else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
  }
  text.innerHTML = spaned;
};

var headline = document.querySelector(".rekomendasi");

spanText(headline);

let letters = headline.textContent.split("  ");
headline.textContent = "";

letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animation = `slideLeft 1.5s forwards ${
    i * 0.1
  }s cubic-bezier(0.075, 0.82, 0.165, 1)`;
  headline.appendChild(span);
});
