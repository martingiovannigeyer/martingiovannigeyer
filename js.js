let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navbar li ");
let headerMain = document.querySelectorAll(" h1");
let captions = document.querySelectorAll(".sectionheader h3");
let descriptions = document.querySelectorAll(".sectionheader p");
let images = document.querySelectorAll(".images img");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

headerMain.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

captions.forEach(caption => {
  caption.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    caption.classList.remove("hovered-caption");
  });
  caption.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    caption.classList.add("hovered-caption");
  });
});

descriptions.forEach(description => {
  description.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    description.classList.remove("hovered-caption");
  });
  description.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    description.classList.add("hovered-caption");
  });
});

images.forEach(image => {
  image.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  image.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});
