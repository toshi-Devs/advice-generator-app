// request.open('GET', 'https://api.adviceslip.com/advice', true)

// request.onload = function () {
//   // Begin accessing JSON data here
// }

// Send request
// request.send()
// 
function adviceGenerator() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => { 
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        const advice = data.slip.advice;
        const id = data.slip.id;
        // console.log(advice);
        document.getElementsByClassName('advice-API')[0].innerHTML = "\""+ advice+"\"";
        document.getElementById('advice-text').innerHTML = "ADVICE #"+id;
    })
    .catch((err) => {
        console.log(err);
    });
}
window.addEventListener("load", adviceGenerator);
const button = document.getElementById('advice-button');
button.addEventListener('click', adviceGenerator);

    
