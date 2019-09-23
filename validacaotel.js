
function validacaoTel(){
    evt = window.event;
    var tecla = evt.keyCode;

    if(tecla < 48 || tecla > 57){ 
      alert('Precione apenas teclas numéricas');
      evt.preventDefault();
		return false
    }
	

			
			
			if (document.formulario.telefone.value.length == 2){
				document.formulario.telefone.value = document.formulario.telefone.value + "-"; }
		
		
  }

