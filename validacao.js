

function validacaoNome(){
	if (document.formulario.nome.value=="") {
	
	alert ("Por favor, digite o nome e sobrenome");
	document.formulario.focus();
	return false;
	
	}
	var c = document.formulario.nome.value;
		
	var separado = c.split(" ");
	var palavras= separado.length;
	 if (palavras=='1'){
		 alert ("Por favor, digite o nome e sobrenome");
		 document.formulario.focus();
		 return false;
	
		 
	 }
	 
	 

}