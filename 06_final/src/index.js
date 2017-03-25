import { createChangeIndexAnimation, activate, deactivate } from './timeline'
import { swipeIn, change } from './body'
import { fadeIn, change as changeTitle } from './title'

const timeLineItems = document.querySelectorAll('.timeline__list__item')
const titles = document.querySelectorAll('.main_article__title')
const descriptionBoxes = document.querySelectorAll('.description_box')
const imageBoxes = document.querySelectorAll('.image_box')
const detailsBoxes = document.querySelectorAll('.details_box')

console.log(detailsBoxes)

let activeIndex = 0

const goTo = newIndex => {
  createChangeIndexAnimation({
    toActivate: timeLineItems[newIndex],
    toDeactivate: timeLineItems[activeIndex],
    onFinish: () => {
      change({
        inDescriptionBox: descriptionBoxes[newIndex],
        inImageBox: imageBoxes[newIndex],
        inDetailsBox: detailsBoxes[newIndex],
        outDescriptionBox: descriptionBoxes[activeIndex],
        outImageBox: imageBoxes[activeIndex],
        outDetailsBox: detailsBoxes[activeIndex],
        onFinish: () => {
          changeTitle({
            toFadeIn: titles[newIndex],
            toFadeOut: titles[activeIndex]
          })
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
  imageBox: imageBoxes[0],
  detailsBox: detailsBoxes[0]
})

fadeIn({
  toFadeIn: titles[0]
})

