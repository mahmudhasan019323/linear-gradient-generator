var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');

function setGradient(){
    var gradient = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
    document.body.style.background = gradient;
    h2.textContent = 'background-image: ' + gradient;

}

function randomGradient(){
    var color1 = "#"+((1<<24)*Math.random()|0).toString(16);
    var color2 = "#"+((1<<24)*Math.random()|0).toString(16);
    var gradient = `linear-gradient(to right, ${color1}, ${color2})`;

    document.body.style.background = gradient;
    h2.textContent = gradient;
}

h2.textContent = `background-image: linear-gradient(to right, ${input1.value}, ${input2.value})`;



input1.addEventListener('input', setGradient);
input2,addEventListener('input', setGradient);
btn.addEventListener("click", randomGradient)