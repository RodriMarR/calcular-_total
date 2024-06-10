precio = 450000
precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio


const btn1 = document.querySelector('#btn1')
const cantidad = document.querySelector('#cantidad')
let contador = 0

const actualizarValorTotal = () => {
    const valortotalSpan = document.querySelector('#valortotal')  
    valortotalSpan.innerHTML = contador * precio }
    
btn1.addEventListener ("click", ()=> {
    contador = contador + 1;
    cantidad.innerHTML = contador;
   actualizarValorTotal()})

const btn2 = document.querySelector('#btn2')
btn2.addEventListener ("click", ()=> {
    if (contador > 0) {
    contador = contador - 1;
    cantidad.innerHTML = contador
    actualizarValorTotal();
}
});