import { getAuthors, getLetters, getRecipients, getTopics } from "./dataAccess.js"

export const Letters = () => {
    const recipients = getRecipients()
    const authors = getAuthors()
    const topics = getTopics()
    const letters = getLetters()
    let html = '<section class="letter">'
    const convertLetterToParagraph = letters.map((letter) => {
        const letterAuthor = authors.find((author) => {
            return author.id === letter.author
        })
        const letterRecipient = recipients.find((recipient) => {
            return recipient.id === letter.recipient
        })
        const letterTopic = topics.find((topic) => {
            return topic.id === letter.topic
        })
        return `
                <div id="letter">
                <p>Dear ${letterRecipient.recipientName} (${letterRecipient.recipientEmail}),</p>
                <p>${letter.body}</p>
                <p>Sincerely ${letterAuthor.authorName} (${letterAuthor.authorEmail})</p>
                <p>Sent on ${letter.date}</p>
                <button class="topic" id="topic--${letterTopic.id}">${letterTopic.topicName}</button>
            `
    })
    html += '</div>'
    html += convertLetterToParagraph.join("")
    html += '</section>'
    return html
}