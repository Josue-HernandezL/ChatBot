const d = document;
const $btnSendRequest = d.getElementById("send-request");
const $responseIa = d.getElementById("response-ia");

$btnSendRequest.addEventListener("click", (e) => {
    const $requestIa = d.getElementById("request").value;
    const $txtDemo = d.getElementById("demo");

    e.preventDefault();
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
        $txtDemo.style.display ="none";
        $responseIa.innerHTML += `
        <h2>${$requestIa}</h2>
        <p>${data.text}</p>
        `
        console.log(data);
        
    })
    .catch(err => {
        console.log(err);
    })

    console.log($requestIa);

});