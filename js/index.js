const d = document;
const $btnSendRequest = d.getElementById("send-request");

$btnSendRequest.addEventListener("click", (e) => {
    const $requestIa = d.getElementById("request").value;

    fetch('https://fi.jcaguilar.dev/v1/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            "prompt" : $requestIa
        })
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

    console.log($requestIa);

});