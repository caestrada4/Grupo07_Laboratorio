docObjeto= new ObjetoAjax(); //instanciar objeto
docObjeto.cargaXML("ventas.xml",recogeDatos); //método para XML-DOM
function recogeDatos(xmlDoc) { //El parámetro contiene el DOM del XML
       //elemento de la página donde insertar el archivo.
       respuesta=document.getElementById("contenido");
       //A partir del DOM obtenemos los distintos nodos del archivo:
       //extraemos el contenido de la primera etiqueta "nombre" del XML
       producto=xmlDoc.getElementsByTagName("PRODUCTO")[0].childNodes[0].nodeValue;
       //escribimos el resultado en la página
       respuesta.innerHTML="<p>PRODUCTO :"+producto+"</p>";
       //hacemos lo mismo para el resto de etiquetas.
        title=xmlDoc.getElementsByTagName("apellido")[0].childNodes[0].nodeValue;
       respuesta.innerHTML+="<p>Apellido :"+miapellido+"</p>";
       numero=xmlDoc.getElementsByTagName("telefono")[0].childNodes[0].nodeValue;
       respuesta.innerHTML+="<p>Teléfono :"+mitelefono+"</p>";
       descripcion=xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
       respuesta.innerHTML+="<p>E-mail :"+miemail+"</p>";
       preciou=xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
       respuesta.innerHTML+="<p>E-mail :"+miemail+"</p>";
       cantidad=xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
       respuesta.innerHTML+="<p>E-mail :"+miemail+"</p>";
       preciot=xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
       respuesta.innerHTML+="<p>E-mail :"+miemail+"</p>";
       
    }