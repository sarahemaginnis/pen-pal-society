import { getTopics } from "./dataAccess.js";

const topics = getTopics()

export const Topics = () => {
    let html = '<div id=topicRadio">'
    for (const topic of topics) {
        html += `<input type="radio" name="topic" value="${topic.id}" /> ${topic.topicName}`
    }

    html += "</div>"
    return html
}