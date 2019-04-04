document.getElementsByClassName('row')
var numero = document.getElementsByClassName('row').length
console.log(numero);

document.getElementById('count').textContent = numero;

for(var i=0; i<document.getElementsByClassName('poubelle').length; i++)

document.getElementsByClassName('poubelle')[i].addEventListener("click",
function() {
  this.parentNode.remove();
  numero -=1;
  document.getElementById('count').textContent = numero;
}
);
