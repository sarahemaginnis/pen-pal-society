import { LetterForm } from "./Form.js"
import { Letters } from "./Letters.js"

export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="letterForm">
            ${LetterForm()}
        </section>

        <section class="letters">
            ${Letters()}
        </section>
    `
}