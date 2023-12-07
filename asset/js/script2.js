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
