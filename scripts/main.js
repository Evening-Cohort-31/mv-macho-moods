import { MoodsList } from "./moods.js"

const container = document.querySelector("#container")

const page = `
  <h1> Macho Moods <h1>
  <h2> How are you feeling today?</h2>
  ${MoodsList()}
`
container.innerHTML = page
