import { curry } from 'lodash'

export const createTimeout = curry((time, listener) => {
    const id = setTimeout(listener, time)
    return () => {
        clearTimeout(id)
    }
})

export const addListener = curry((selector, eventType, listener) => {
    const element = document.querySelector(selector)
    element.addEventListener(eventType, listener)
    return () => {
        element.removeEventListener(eventType, listener)
    }
})

export const createInterval = curry((time, listener) => {
    let i = 0
    const id = setInterval(() => {
        listener(i++)
    }, time)
    return () => {
        clearInterval(id)
    }
})
