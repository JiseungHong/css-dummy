const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imageText = document.getElementById("imageText");
const image = document.getElementById("image");
const imageLink = document.getElementById("imageLink");

let currentIndex = 0;

const imageNames = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

function showImage(index) {
  image.src = `images/image${index + 1}.png`;
  imageText.textContent = imageNames[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageNames.length;
  showImage(currentIndex);
});

imageLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = `https://jiseung-hong.tistory.com/${currentIndex+2}`;
  });

showImage(currentIndex);
