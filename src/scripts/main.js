import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    fetchRecipients()
    fetchTopics()
    fetchLetters().then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)