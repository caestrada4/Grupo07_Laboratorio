function ObjetoAjax () {
    var nuevoajax=creaObjetoAjax()
    this.objeto=nuevoajax;
    this.pedirTexto=pedirTextoAjax;
    this.cargaXML=cargarXML
    }	

    function cargarXML(url,funcion) {
        var nuevoajax=this.objeto; 
        var funcionXML=funcion 
        nuevoajax.open("GET",url,true); 
        nuevoajax.onreadystatechange=function() { 
           if (nuevoajax.readyState==4) {
              propiedad=nuevoajax.responseXML; 
              funcionXML(propiedad); 
              }
           }	
        nuevoajax.send();envio
    }   