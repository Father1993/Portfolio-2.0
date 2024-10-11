window.addEventListener('scroll', fadeIn)

function fadeIn() {
  const footerEmail = document.querySelector('.footer__email')
  const footerContacts = document.querySelector('.footer__contacts')
  const windowHeight = window.innerHeight
  const scrollPosition = window.scrollY

  if (scrollPosition > 130) {
    footerEmail.classList.add('fade-in')
    footerContacts.classList.add('fade-in')
  } else {
    footerEmail.classList.remove('fade-in')
    footerContacts.classList.remove('fade-in')
  }
}

// Анимация элементов при scroll

// Функция для выезда с лево
function handleScrollAnimationLeft() {
  let elementsLeft = document.querySelectorAll('.scroll-animation-left')
  let windowHeight = window.innerHeight

  elementsLeft.forEach(function (element) {
    let position = element.getBoundingClientRect().top

    if (position < windowHeight) {
      element.classList.add('fade-in')
    }
  })
}

// Функция для выезда с право
function handleScrollAnimationRight() {
  let elementsRight = document.querySelectorAll('.scroll-animation-right')
  let windowHeight = window.innerHeight

  elementsRight.forEach(function (element) {
    let position = element.getBoundingClientRect().top

    if (position < windowHeight) {
      element.classList.add('fade-in')
    }
  })
}
// left animations
window.addEventListener('scroll', handleScrollAnimationLeft)
window.addEventListener('load', handleScrollAnimationLeft)
// right animations
window.addEventListener('scroll', handleScrollAnimationRight)
window.addEventListener('load', handleScrollAnimationRight)

// Показ карточек по кнопке для блока с проектами
const showMoreBtn = document.getElementById('showMoreBtn')
const secondLineCards = document.querySelectorAll('.project-second-line')
const thirdLineCards = document.querySelectorAll('.project-third-line')
const fourthLineCards = document.querySelectorAll('.project-fourth-line')

let showSecondLine = false
let showThirdLine = false
let showFourthLine = false

showMoreBtn.addEventListener('click', () => {
  if (!showSecondLine) {
    secondLineCards.forEach((card) => {
      card.classList.remove('d-none')
      card.classList.add('fade-in-animation')
    })
    showSecondLine = true
  } else if (!showThirdLine) {
    thirdLineCards.forEach((card) => {
      card.classList.remove('d-none')
      card.classList.add('fade-in-animation')
    })
    showThirdLine = true
  } else if (!showFourthLine) {
    fourthLineCards.forEach((card) => {
      card.classList.remove('d-none')
      card.classList.add('fade-in-animation')
    })
    showFourthLine = true
    showMoreBtn.style.display = 'none'
  }
})
