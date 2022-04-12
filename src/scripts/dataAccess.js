const applicationState = {
    letters: []
}

const authorState = {
    authors: []
}

const topicState = {
    topics: []
}

const recipientState = {
    recipients: []
}

const API = "http://localhost:8086"

const mainContainer = document.querySelector("#container")

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (sentLetters) => {
                applicationState.letters = sentLetters
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter }))
}

export const sendLetter = (draftLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(draftLetter)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (author) => {
                authorState.authors = author
            }
        )
}

export const getAuthors = () => {
    return authorState.authors.map(author => ({ ...author }))
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topic) => {
                topicState.topics = topic
            }
        )
}

export const getTopics = () => {
    return topicState.topics.map(topic => ({ ...topic }))
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipient) => {
                recipientState.recipients = recipient
            }
        )
}

export const getRecipients = () => {
    return recipientState.recipients.map(recipient => ({ ...recipient }))
}