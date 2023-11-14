const sliderContainer = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slides')
const rightSlide = document.querySelector('.right-slides')
const upButton = document.querySelector('.up-btn')
const downButton = document.querySelector('.down-btn')
const slideLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', ()=> changeSlide('up'))
downButton.addEventListener('click', ()=> changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if(direction === 'up'){
    activeSlideIndex++;
    if(activeSlideIndex > slideLength - 1){
      activeSlideIndex = 0;
    }
  }else if(direction === 'down'){
    activeSlideIndex--;
    if(activeSlideIndex < 0){
      activeSlideIndex = slideLength - 1
    }
  }

  rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


