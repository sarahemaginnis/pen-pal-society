import { fetchTopics, getTopics } from "./dataAccess.js";

export const Topics = () => {
    const state = fetchTopics() // not sure I need this line of code or fetch?
    .then(
        () => {
            const topics = getTopics()
            let html = '<label class="label" for="topic">Topics</label>'
            html += '<div id=topicRadio">'
            const arrayOfOptions = topics.map((topic) => {
                    html += `<input type="radio" name="topic" value="${topic.id}" /> ${topic.topicName}`
                }
            )
            html += arrayOfOptions.join("")
            html += "</div>"
            document.getElementById("topicDiv").innerHTML = html
        }
    )
}