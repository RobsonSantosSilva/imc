function calculaIMC(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const descricao = document.getElementById('description');
    const imc = peso.value / (altura.value * altura.value);
    var maxpeso = 25 * (altura.value * altura.value);
    var minpeso = 18.5 * (altura.value * altura.value);



    document.getElementById('result').innerText = 'Resultado';
    document.getElementById('alt_pes').innerText = `${altura.value} m ${peso.value} Kg`;
    document.getElementById('imc_result').innerText = `IMC = ${imc.toFixed(2)}`;
    document.getElementById('ideal').innerText = `Peso Ideal ${minpeso.toFixed(2)} Kg - ${maxpeso.toFixed(2)} Kg`;

    if(imc < 18.5){
        descricao.innerText = 'Baixo peso';
    }else if (imc > 40){
        descricao.innerText = 'Obesidade de Classe 3';
    }else if (imc > 35){
        descricao.innerText = 'Obesidade de Classe 2';
    }else if (imc > 30){
        descricao.innerText = 'Obesidade de Classe 1';
    }else if (imc > 25){
        descricao.innerText = 'Excesso de peso';
    }else if (imc > 18.5){
        descricao.innerText = 'Peso normal';
}};