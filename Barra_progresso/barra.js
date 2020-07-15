//pega o componente que contem o texto
const nomeComponente = document.querySelector('.nomeComponente')

//Criando a barrinha na DOM
let bar = document.createElement('div');

//Estilo da barrinha
bar.style.height = '4px'
bar.style.width = '0'
bar.style.backgroundColor = '#6633cc' 
bar.style.position = 'fixed'
bar.style.top = '0'
bar.style.left = '0'
bar.style.zIndex = '9999'
bar.style.transition = '0.2s'

//adiciona no corpo da página
document.body.append(bar)

function updateBar(){
   //tamanho da caixa que contem o texto
  const textHeigt = nomeComponente.offsetHeidht

  //verificar em que posição da página eu estou
  const pagePositionY = window.pageYOffset 
 
  //rega de 3 para atualizar a barra
  const updateBar = pagePositionY * 100 / textHeigt
 
  bar.style.width = updateBar + "%"
}

window.addEventListener('load',()=>{
//verifica o movimento do scroll
document.addEventListener('scroll',updateBar)
})
