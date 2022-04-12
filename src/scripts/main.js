import { fetchLetters } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
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