import progressBarFactory from './progressBar'
import snackbarFactory from './snackbar'
import tabsFactory from './tabs'

const progressBar = progressBarFactory(document.querySelector('.progress-bar'))
const snackbar = snackbarFactory(document.querySelector('.snackbar'))
const tabs = tabsFactory(document.querySelector('.tabs'))

const progressInput = document.getElementById('progress')
const messageInput = document.getElementById('message')
const tabsAnimationTypeInput = document.getElementById('tabs-animation-type')

window.setProgress = () => {
  progressBar.changeValue(progressInput.value)
}

snackbar.addHideListener(() => {
  console.log('snackbar closed')
})

window.show = () => {
  snackbar.show(messageInput.value)
}

tabs.addChangeListener(index => {
  snackbar.show(`Tab ${index} is now visible`)
})

tabsAnimationTypeInput.addEventListener('change', event => {
  tabs.setAnimationType(event.target.value)
})

