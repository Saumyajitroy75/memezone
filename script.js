const memes = [
  "images/meme1.jpg",
  "images/meme2.jpg",
  "images/meme3.jpg",
  "images/meme4.jpg",
  "images/meme5.jpg",
  "images/meme6.jpg",
  "images/meme7.jpg"
];

let index = 0;
const container = document.getElementById("memeContainer");

function loadMeme() {
  if(index >= memes.length) return;

  const box = document.createElement("div");
  box.className = "meme-box";
  box.innerHTML = `<img src="${memes[index]}" alt="meme">`;
  container.appendChild(box);

  if(index % 2 === 1) {
    const ad = document.createElement("div");
    ad.className = "ad-box";
    ad.innerHTML = "Ad Space (Paste AdSense Code Here)";
    container.appendChild(ad);
  }

  index++;
}

function loadMore() {
  for(let i=0; i<3; i++) loadMeme();
}

window.addEventListener("scroll", () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMore();
  }
});

loadMore();

document.getElementById("toggleDark").onclick = () => {
  document.body.classList.toggle("dark");
};
