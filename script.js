function atualizarContador(){

const inicio = new Date("2025-08-03T00:00:00");
const agora = new Date();

const diferenca = agora - inicio;

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
const segundos = Math.floor((diferenca / 1000) % 60);

document.getElementById("contador").innerHTML =
`${dias} dias ❤️ ${horas} horas ❤️ ${minutos} minutos ❤️ ${segundos} segundos`;

}

setInterval(atualizarContador,1000);
atualizarContador();

function surpresa(){

document.getElementById("final").style.display="block";

for(let i = 0; i < 120; i++){

let heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration =
(3 + Math.random() * 5) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

if(navigator.vibrate){
navigator.vibrate([200,100,200,100,300]);
}

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}
