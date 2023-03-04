//Variáveis
let p = document.querySelector('p#res');
let clean = document.querySelector('#cl');
let dimi = document.querySelector('#tirar');
let res = document.querySelector('#rr')

//Eventos
clean.addEventListener('click', () => {
    p.innerHTML = ''
});

document.addEventListener('keydown',inserir)

dimi.addEventListener('click', () => {
    let ap = p.innerHTML
    p.innerText = ap.substring(0, ap.length - 1)
})
res.addEventListener('click', resultado)

//Funções
function resultado(resu) {
    if (resu = p.innerHTML) {
        return p.innerHTML = eval(resu).toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        });
    }
}
function insert(nn) {
    let num = p.innerHTML
    p.innerHTML = num + nn  
}

function inserir(event) {
    let key = event.key; 
    let num = p.innerHTML;
    if (key !== 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0) {
       p.innerHTML=num
    } else {
        `${num + key}`
    } if (key == 'Enter') {
        alert('oi')
    }
}

