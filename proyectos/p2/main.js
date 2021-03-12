
const p = document.getElementById("texto");
p.innerHTML = "Programa para sumar 2 numeros";

const btn = document.getElementById("btn-enviar");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");

    const ophtml = document.getElementById("operacion");

    var resultado;    
    
    switch(ophtml.value)
    {
        case "1":
            resultado = parseInt(numero1.value) + parseInt(numero2.value);
            break;
        case "2":
            resultado = parseInt(numero1.value) - parseInt(numero2.value);
            break;
        case "3":
            resultado = parseInt(numero1.value) * parseInt(numero2.value);
            break;
        case "4":
            resultado = parseInt(numero1.value) / parseInt(numero2.value);
            break;
    }

    const res = document.getElementById("resultado");
    res.innerHTML = resultado;
});
    