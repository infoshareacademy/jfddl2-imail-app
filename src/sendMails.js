const sendMails = (recipientsEmails, sender, message, subject) => {

    // @TODO validate parametest

    fetch("https://tranquil-thicket-80023.herokuapp.com", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "emails": recipientsEmails,
            "subject": subject,
            "message": message,
            "from": sender,
            "fromName": "iMailApp"
        })
    }).then(response => response.json())
        .then((response) => {
            response = JSON.parse(response[0].body)
            if(response.code === 200) {
                alert('All sent!')
            }else {
                alert('Something is wrong! Emails not sent!')
            }
        }) // @TODO handle errors
}

export default sendMails