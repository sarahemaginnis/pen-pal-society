import { getRecipients, fetchRecipients } from "./dataAccess.js"

export const Recipients = () => {
    const state = fetchRecipients()
    .then(
        () => {
            const recipients = getRecipients()
            let html = '<label class="label" for="recipient">Recipient</label>'
            html += '<select id=recipients">'
            html += '<option value="0"></option>'
            const arrayOfOptions = recipients.map((recipient) => {
                if (state.recipients === recipient.id) {
                    return `<option id ="recipient" value="${recipient.id}" selected>${recipient.recipientName}</option>`
                } else {
                    return `<option id =recipient" value="${recipient.id}">${recipient.recipientName}</option>`
                }
            })
        
            html += arrayOfOptions.join("")
            html += "</select>"
            document.getElementById("recipientDiv").innerHTML = html
        }
    )
}