document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.getElementById("peso");
    const input2 = document.getElementById("altura");

    input1.addEventListener("input", function () {
        let valor = this.value.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos

        this.value = valor;
        
    });

    
    input2.addEventListener("input", function () {
        let valor = this.value.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos
      
            valor = valor.replace(/(\d+)(\d{2})$/, "$1.$2"); // Insere ponto flutuante antes dos últimos dois dígitos
        
        this.value = valor;
    });

});

function calculoImc() {
  let peso = document.getElementById("peso").value
  let altura = document.getElementById("altura").value

  let imc = (peso / (altura * altura)).toFixed(2)

  return imc
}

function atualizaImc() {
  const div = document.querySelector(".mostraImc");
    div.innerHTML = `<h2>IMC: ${calculoImc()}</h2>`;
}

document.getElementById("meu-submit").onclick = function(e) {
    atualizaImc()
    e.preventDefault();
}
