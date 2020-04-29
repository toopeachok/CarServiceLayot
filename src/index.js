import "./styles/main.scss"

let siteSearch = document.querySelector("#site-search");

let isVisible = false;

function changeOpacity(domElement) {
  if (isVisible) {
    domElement.style.opacity = "0";
    domElement.style.visibility = "hidden";
  } else {
    domElement.style.opacity = "1";
    domElement.style.visibility = "visible";
  }
  isVisible = !isVisible
}

document.querySelector(".search-icon").addEventListener("click",
  () => changeOpacity(siteSearch)
);

const sliderItems = document.querySelectorAll(".navigation-slider__item");
const contentSliderItems = document.querySelectorAll(".content-slider__item");

for (let i = 0; i < sliderItems.length; i++) {
  sliderItems[i].addEventListener(
    "click",
    function () {
      this.classList.add("navigation-slider__item--active");

      for (let j = 0; j < sliderItems.length; j++) {
        if (this !== sliderItems[j]) {
          sliderItems[j].classList.remove("navigation-slider__item--active");
        }
      }


    }
  );

  sliderItems[i].addEventListener(
    "click",
    function () {
      let index = parseInt(this.dataset.indexNumber);
      for (let j = 0; j < contentSliderItems.length; j++) {
        contentSliderItems[j].classList.remove("visible-content-slider-item");
      }
      contentSliderItems[index].classList.add("visible-content-slider-item");
    }
  )
}




