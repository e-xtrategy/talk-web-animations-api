import { createChangeIndexAnimation } from './timeline'
const timeLineItems = document.querySelectorAll('.timeline__list__item')

let index = 0

const goTo = newIndex => {
  const animation = createChangeIndexAnimation(timeLineItems, index, newIndex)
  animation.play()
  index = newIndex
}

const next = () => {
  if (index < timeLineItems.length - 1) {
    goTo(index + 1)
  }
}

const previous = () => {
  if (index > 0) {
    goTo(index - 1)
  }
}

document.querySelector('[data-next]').addEventListener('click', next, false)
document.querySelector('[data-previous]').addEventListener('click', previous, false)

