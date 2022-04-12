import { Authors } from "./Authors.js"
import { sendLetter } from "./dataAccess.js"
import { Recipients } from "./Recipients.js"
import { Topics } from "./Topics.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const userAuthor = document.querySelector("input[for='author']").value
        const userLetter = document.querySelector("input[for='letter']").value
        const userTopic = document.querySelector("input[for='topic']").value
        const userRecipient = document.querySelector("input[for='recipient']").value
        const userDate = document.getElementById('sendLetter').innerHTML = Date()

        const dataToSendtoAPI = {
            author: userAuthor,
            body: userLetter,
            topic: userTopic,
            recipient: userRecipient,
            date: userDate
        }

        sendLetter(dataToSendtoAPI)
    }
})

export const LetterForm = () => {
    let html = `
        <div class="field" id="authorDiv">
            ${Authors()}
        </div>
        <div class="field">
            <label class="label" for="letter">Letter</label>
            <textarea type="textarea" name="letterEntry" id="letterEntryInput" class="letterForm_letterEntry"></textarea>
        </div>
        <div class="field">
            <label class="label" for="topic">Topics</label>
            ${Topics()}
        </div>
        <div class="field" id="recipientDiv">
            ${Recipients()}
        </div>

        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}