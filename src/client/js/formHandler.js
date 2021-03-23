import isValidUrl from './checkURL.js'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async (e) => {
    e.preventDefault()
    var enteredUrl = document.getElementById("article-url").value
    if (isValidUrl(enteredUrl))
    {
        const endpointRoute = "/add-url"
        const serverURL = `http://localhost:5000${endpointRoute}`
        const data = {
            url: enteredUrl
        }
        post(serverURL, data)
        .then(res => {
            document.getElementById("text").innerHTML = res.text
            document.getElementById("agreement").innerHTML = res.agreement
            document.getElementById("subjectivity").innerHTML = res.subjectivity
            document.getElementById("confidence").innerHTML = res.confidence
            document.getElementById("irony").innerHTML = res.irony
            document.getElementById("score_tag").innerHTML = res.score_tag
        })
    } else {
        alert("Invalid URL format!")
    }
}

export default handleSubmit