import { createChangeIndexAnimation, activate, deactivate } from './timeline'

const timeLineItems = document.querySelectorAll('.timeline__list__item')

let activeIndex = 0

const goTo = newIndex => {
  const animation = createChangeIndexAnimation(timeLineItems[newIndex], timeLineItems[activeIndex])
  animation.play()
  activeIndex = newIndex
}

const next = () => {
  if (activeIndex < timeLineItems.length - 1) {
    goTo(activeIndex + 1)
  }
}

const previous = () => {
  if (activeIndex > 0) {
    goTo(activeIndex - 1)
  }
}

document.querySelector('[data-next]').addEventListener('click', next, false)
document.querySelector('[data-previous]').addEventListener('click', previous, false)
timeLineItems.forEach((node, index) => {
  node.addEventListener('mouseenter', () => {
    if (index !== activeIndex) {
      activate(node).play()
    }
  }, false)
  node.addEventListener('mouseleave', () => {
    if (index !== activeIndex) {
      deactivate(node).play()
    }
  }, false)
  node.addEventListener('click', () => {
    if (index !== activeIndex) {
      deactivate(timeLineItems[activeIndex]).play()
      activeIndex = index
    }
  }, false)
})

// Init

activate(timeLineItems[0])

