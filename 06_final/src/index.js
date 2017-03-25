import { createChangeIndexAnimation, activate, deactivate } from './timeline'
import { swipeIn, change } from './body'

const timeLineItems = document.querySelectorAll('.timeline__list__item')
const descriptionBoxes = document.querySelectorAll('.description_box')
const imageBoxes = document.querySelectorAll('.image_box')

let activeIndex = 0

const goTo = newIndex => {
  createChangeIndexAnimation({
    toActivate: timeLineItems[newIndex],
    toDeactivate: timeLineItems[activeIndex],
    onFinish: () => {
      change({
        inDescriptionBox: descriptionBoxes[newIndex],
        inImageBox: imageBoxes[newIndex],
        outDescriptionBox: descriptionBoxes[activeIndex],
        outImageBox: imageBoxes[activeIndex],
        onFinish: () => {
          activeIndex = newIndex
        }
      })
    }
  })
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
      activate({
        toActivate: node
      })
    }
  }, false)
  node.addEventListener('mouseleave', () => {
    if (index !== activeIndex) {
      deactivate({
        toDeactivate: node
      })
    }
  }, false)
  node.addEventListener('click', () => {
    if (index !== activeIndex) {
      deactivate({
        toDeactivate: timeLineItems[activeIndex],
        onFinish: () => {
          activeIndex = index
        }
      })
    }
  }, false)
})

// Init

activate({
  toActivate: timeLineItems[0]
})

swipeIn({
  descriptionBox: descriptionBoxes[0],
  imageBox: imageBoxes[0]
})

