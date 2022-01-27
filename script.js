const quoteTag = document.querySelector('#quote-tag'),
    quoteText = document.querySelector('#quote-text'),
    quoteAuthor = document.querySelector('#quote-author'),
    newQuoteBtn = document.querySelector('#new-quote-btn')

async function updateQute() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    if (response.ok) {
        quoteTag.textContent = data.tags
        quoteText.textContent = data.content
        quoteAuthor.textContent = `- ${data.author} -`
    } else {
        quoteAuthor.textContent = "An error occured"
    }
}
updateQute()

newQuoteBtn.addEventListener('click', updateQute)
// fetch('https://api.quotable.io/random')
//     .then(response => response.json())
//     .then(data => {
//         quoteTag.textContent = data.tags
//         quoteText.textContent = data.content
//         quoteAuthor.textContent = data.author
//     })
