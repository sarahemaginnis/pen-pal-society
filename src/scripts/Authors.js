import { getAuthors, fetchAuthors } from "./dataAccess.js"

export const Authors = () => {
    const state = fetchAuthors()
    .then(
        () => {
            const authors = getAuthors()
            let html = '<label class="label" for="author">Author</label>'
            html += '<select id="authors">'
            html += '<option value="0"></option>'
            const arrayOfOptions = authors.map((author) => {
                if (state.authors === author.id) {
                    html += `<option id ="author" value="${author.id}" selected>${author.authorName}</option>`
                } else {
                    html += `<option id ="author" value="${author.id}">${author.authorName}</option>`
                }
            })
        
            html += arrayOfOptions.join("")
            html += "</select>"
            document.getElementById("authorDiv").innerHTML = html
        }
    ) 
}