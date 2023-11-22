"use strict";

let teclas = document.querySelectorAll(".tecla");
let Do = 261.63;
let Re = 293.66;
let Mi = 329.63;
let Fa = 349.23;
let Sol = 390.00;
let La = 440.00;
let Si = 493.88;
let DoSharp = 277.18;
let ReSharp = 311.13;
let FaSharp = 369.99;
let SolSharp = 415.30;
let LaSharp = 466.16;
let context;
let osc;
let a;

let btn = document.querySelector(".bt");

btn.addEventListener("click", ()=>{
	start();
	btn.classList.add("hide");
})


const start = ()=>{
	try{
		window.AudioContext = window.AudioContext || window.webKitAudioContext;
		context = new AudioContext();
	}catch(e){
		alert("la api no funciona");
		console.log(e);
	}
}







const sonar = sonido =>{
	osc = context.createOscillator();
	a = context.createGain();
	osc.connect(a);
	osc.type="sawtooth";
	osc.frequency.value = sonido;
	a.connect(context.destination);
	osc.start(0);
	a.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
}

const detener = ()=>{
	osc.frequency.value = 0;
}


for (let i = 0; i < teclas.length; i++) {
	teclas[i].addEventListener("mousedown", e=>{
		switch(teclas[i].textContent){
			case "Do":
			if (teclas[i].classList.contains("dos")) {
				sonar(Do + 261.62);
			}else{
				sonar(Do);
			}
			break;
			case "Re":
			if (teclas[i].classList.contains("dos")) {
				sonar(Re + 261.62);
			}else{
				sonar(Re);
			}
			break;
			case "Mi":
			if (teclas[i].classList.contains("dos")) {
				sonar(Mi + 261.62);
			}else{
				sonar(Mi);
			}
			break;
			case "Fa":
			if (teclas[i].classList.contains("dos")) {
				sonar(Fa + 261.62);
			}else{
				sonar(Fa);
			}
			break;
			case "Sol":
			if (teclas[i].classList.contains("dos")) {
				sonar(Sol + 261.62);
			}else{
				sonar(Sol);
			}
			break;
			case "La":
			if (teclas[i].classList.contains("dos")) {
				sonar(La + 261.62);
			}else{
				sonar(La);
			}
			break;
			case "Si":
			if (teclas[i].classList.contains("dos")) {
				sonar(Si + 261.62);
			}else{
				sonar(Si);
			}
			break;
			case "Do#":
			if (teclas[i].classList.contains("dos")) {
				sonar(DoSharp + 261.62);
			}else{
				sonar(DoSharp);
			}
			break;
			case "Re#":
			if (teclas[i].classList.contains("dos")) {
				sonar(ReSharp + 261.62);
			}else{
				sonar(ReSharp);
			}
			break;
			case "Fa#":
			if (teclas[i].classList.contains("dos")) {
				sonar(FaSharp + 261.62);
			}else{
				sonar(FaSharp);
			}
			break;
			case "Sol#":
			if (teclas[i].classList.contains("dos")) {
				sonar(SolSharp + 261.62);
			}else{
				sonar(SolSharp);
			}
			break;
			case "La#":
			if (teclas[i].classList.contains("dos")) {
				sonar(LaSharp + 261.62);
			}else{
				sonar(LaSharp);
			}
			break;
			default:
			console.log("error");
		}
	})

	teclas[i].addEventListener("mouseup", e=>{
		sonar(0);
	})
}


