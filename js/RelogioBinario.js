$(document).ready(function() {
  relogioBinario();
});

function relogioBinario() {
  var d = new Date();
  let horaBinaria = completaComZero(parseInt(d.getHours(), 10).toString(2),5);
  let minutoBinario = completaComZero(parseInt(d.getMinutes(), 10).toString(2),6);
  let segundoBinario = completaComZero(parseInt(d.getSeconds(), 10).toString(2),6);
  let horaDecimal = completaComZero(d.getHours().toString(),2)+':'+completaComZero(d.getMinutes().toString(),2)+':'+completaComZero(d.getSeconds().toString(),2);
  escreveRelogio(horaBinaria+':'+minutoBinario+':'+segundoBinario,$('#horaBinaria'));
  escreveRelogio(horaDecimal,$('#horaDecimal'));
  desenhaRelogio(horaBinaria,$('.hora img').toArray());
  desenhaRelogio(minutoBinario,$('.minuto img').toArray());
  desenhaRelogio(segundoBinario,$('.segundo img').toArray());
  setTimeout(function(){relogioBinario()},1000);
}

function completaComZero(tempo, valor) {
  while(tempo.length<valor) {
    tempo='0'+tempo;
  }
  return tempo;
}

function escreveRelogio(valor, elemento) {
  $(elemento).text(valor);
}

function desenhaRelogio(tempo,elementos) {
  for(let i=tempo.length;i>=0;i--) {
    if(tempo[i]=='1') {
      $(elementos[i]).attr('src', '/img/on.png');
    } else {
      $(elementos[i]).attr('src', '/img/off.png');
    }
  }
}
