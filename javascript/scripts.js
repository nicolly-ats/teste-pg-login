/*---------------pagina de login-------------------*/
function mostrarSenha(){
	var tipo = document.getElementById("senha");
	if(tipo.type == "password"){
    	tipo.type = "text";
		}else{
		tipo.type = "password";
		}
}
/*-------------------------------------------------*/
function ocultarSenha(){
	var tipo = document.getElementById("senhaConf");
	if(tipo.type == "password"){
    	tipo.type = "text";
		}else{
		tipo.type = "password";
		}
}