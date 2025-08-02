import { MoodsList } from "./moods.js"

const container = document.querySelector("#container")

const page = `
  ${MoodsList}
`

container.innerHTML = page
