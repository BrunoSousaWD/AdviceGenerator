const adviceNum = document.getElementById('advice-num');
console.log(adviceNum.innerHTML);
const advice = document.getElementById('advice');
console.log(advice.innerHTML);
const generate = document.getElementById('generate');

fetch("https://api.adviceslip.com/advice").then(res =>{
        return res.json();
    }).then(data =>{
        adviceNum.innerHTML = data.slip.id;
        advice.innerHTML= data.slip.advice;})

generate.addEventListener('click', ()=>{
    console.log('clicked');
    fetch("https://api.adviceslip.com/advice").then(res =>{
        return res.json();
    }).then(data =>{
        adviceNum.innerHTML = data.slip.id;
        advice.innerHTML= data.slip.advice;
    }).catch(error => console.log('Something went wrong', error));
});

