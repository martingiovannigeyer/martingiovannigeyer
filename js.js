let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navbar li ");
let title = document.querySelectorAll("h1");
let captions = document.querySelectorAll("h3");
let descriptions = document.querySelectorAll(".bullet p");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow-fill");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow-fill");
    link.classList.add("hovered-link");
  });
});

title.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow-fill");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow-fill");
    link.classList.add("hovered-link");
  });
});

 captions.forEach(caption => {
  caption.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  caption.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

descriptions.forEach(description => {
  description.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  description.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

// Flipping cards
let cards = document.querySelectorAll(".card__inner");

cards.forEach(card => {
  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
})

// Opening and closing mobile navigation pane
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
