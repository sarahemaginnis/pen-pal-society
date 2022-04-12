import { getLetters } from "./dataAccess.js"

export const Letters = () => {
    const letters = getLetters()
    let html = '<p>'
    const converLetterToParagraph = letters.map((letter) => {
        return `
        Dear ${letter.recipient.recipientName} (${letter.recipient.recipientEmail}),</p>
        <p>${letter.body}</p>
        <p>Sincerely ${letter.author.authorName} (${letter.author.authorEmail})</p>
        <p>Sent on ${letter.date}</p>
        <button class="topic" id="topic--${letter.topic.id}">${letter.topic.topicName}</button>
        `
    })
    html += converLetterToParagraph.join("")
    return html
}