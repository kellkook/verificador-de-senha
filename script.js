const senha = document.getElementById("senha");
const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

verificar.addEventListener("click", function () {
    const valor = senha.value;

    let pontos = 0;

    if (valor.length >= 8) {
        pontos++;
    }

    if (/[A-Z]/.test(valor)) {
        pontos++;
    }

    if (/[a-z]/.test(valor)) {
        pontos++;
    }

    if (/[0-9]/.test(valor)) {
        pontos++;
    }

    if (/[^A-Za-z0-9]/.test(valor)) {
        pontos++;
    }

    if (valor.length === 0) {
        resultado.textContent = "Digite uma senha.";
    } else if (pontos <= 2) {
        resultado.textContent = "Senha fraca.";
    } else if (pontos <= 4) {
        resultado.textContent = "Senha média.";
    } else {
        resultado.textContent = "Senha forte.";
    }
});
