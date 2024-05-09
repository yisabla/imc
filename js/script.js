document.getElementById("butwoman").addEventListener("click", function () {
    document.getElementById("myheader").style.backgroundColor = "rgb(151, 61, 124)";
    document.getElementById("myfooter").style.backgroundColor = "rgb(151, 61, 124)";
    document.getElementById("form").style.backgroundColor = "rgb(255, 176, 248)";
    document.getElementById("image").style.backgroundColor = "rgb(155, 75, 155)";
    document.getElementById("calcule").style.backgroundColor = "rgb(151, 61, 124)"
    document.getElementById("image").setAttribute("src", "img/iconemulher.png");
}, false);

document.getElementById("butman").addEventListener("click", function () {
    document.getElementById("myheader").style.backgroundColor = "rgb(75, 80, 167)";
    document.getElementById("myfooter").style.backgroundColor = "rgb(75, 80, 167)";
    document.getElementById("form").style.backgroundColor = "rgb(167, 197, 255)";
    document.getElementById("image").style.backgroundColor = "rgb(78, 122, 204)";
    document.getElementById("calcule").style.backgroundColor = "rgb(75, 80, 167)"
    document.getElementById("image").setAttribute("src", "img/iconehomem.png");
}, false);

function calcular() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (!peso || !altura) {
        document.getElementById("resultado").innerHTML = "Insira seu peso e sua altura, por favor!";
        return;
    }

    peso = Number(peso);
    altura = Number(altura);

    let resultado = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = resultado;




    if (resultado < 18.6) {
        document.getElementById("resultado").innerHTML = "seu imc é: " + resultado.toFixed(2) + " abaixo do peso"
    }

    else if (resultado >= 18.6 && resultado <= 24.9) {
        document.getElementById("resultado").innerHTML = "seu imc é: " + resultado.toFixed(2) + " peso ideal (parabéns :)"

    }

    else if (resultado >= 25 && resultado <= 29.9) {
        document.getElementById("resultado").innerHTML = "seu imc é: " + resultado.toFixed(2) + " levemente acima do peso"

    }

    else if (resultado >= 30 && resultado <= 34.9) {
        document.getElementById("resultado").innerHTML = "seu imc é: " + resultado.toFixed(2) + " obesidade grau 1"

    }

    else if (resultado >= 35 && resultado <= 39.9) {
        document.getElementById("resultado").innerHTML = "seu imc é: " + resultado.toFixed(2) + " obesidade grau 2 (severa)"

    }

    else if (resultado > 40) {
        document.getElementById("resultado").innerHTML = "seu imc é: " + resultado.toFixed(2) + " obesidade grau 3 (mórbida)"

    }
}