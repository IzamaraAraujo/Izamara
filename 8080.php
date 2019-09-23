
<?php
if(isset($_POST['enviar1'])){
if(isset($_POST['redesocial'])){
    $listaRede = $_POST['redesocial'];
	      
    }else 
	{
		$listaRede = '';
		}
$dados = array(
	
	$nome1 = $_POST["nome"],
	$telefone1=$_POST["telefone"],
	$conheceu1=$_POST["conheceu"],
	$redess=$_POST["redes"],
	$quaisredes = $listaRede
	
	
);

$archivo = fopen($_POST['nome']."dat","a");

fwrite($archivo, json_encode($dados));

fclose($archivo);
}
?>

