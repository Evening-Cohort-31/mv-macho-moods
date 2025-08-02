import { getMoods } from "./database.js"

export const MoodsList = () => {
  const moods = getMoods()
  const moodsHTML = moods
    .map((mood) => {
      return `
      <div>
        <h3>${mood.name}</h3>
        <section>${mood.text}</section>
      </div>
    `
    })
    .join("")

  return moodsHTML
}
