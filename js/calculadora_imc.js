
var peso, altura, measure, imc, erro;



function calculate() {
	peso = document.getElementById("weight").value;
	altura = document.getElementById("height").value;
	error = "Insira Valores Válidos";
	altura /= 100;
	altura *= altura;
	imc = peso/altura;
	imc = imc.toFixed(1);
    document.getElementById("bmi-result").innerHTML = measure;

	if (imc <= 18.4) {
		measure = "Seu imc é de " + imc  + " você está abaixo do peso.";
	} else if (imc >= 18.5 && imc <= 24.9) {
		measure = "Seu imc é de " + imc + " PARABENS você está muito bem!";
	} else if (imc >= 25 && imc <= 29.9) {
		measure = "Seu imc é de " + imc  + " você está com Sobrepeso.";
	} else if (imc >= 30) {
		measure = "Seu imc é de " + imc + " você está Obeso.";
	}
	

	if (peso === 0 ) {
		document.getElementById("results").innerHTML = erro;
        alert(erro);
	} else if (altura === 0){
		document.getElementById("results").innerHTML = erro;
        alert(erro);
	}
	 else {
		document.getElementById("results").innerHTML = measure;
        alert(measure);
	}
	if (peso < 0) {
		document.getElementById("results").innerHTML = "Valores negativos não são permitidos";
        alert("Valores negativos não são permitidos");
	}
}