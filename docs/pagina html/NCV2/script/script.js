let p= document.querySelector('p#res')

function insert(nn){
   let num= p.innerHTML
   p.innerHTML= num + nn
}

function limpar(){
    p.innerHTML=''
}

function resultado(){
    let resultado= p.innerHTML
    if(resultado){
        p.innerHTML = eval(resultado).toFixed(3)
    } else {
        alert('insira os números!')
    }
}
function apagar(){
    let ap=p.innerHTML
    p.innerText=ap.substring(0,ap.length-1)
}