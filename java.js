function nombre123() {
    var resultado1 = document.getElementById("nombre").value;
    var resultado2 = document.getElementById("correo").value;
    var resultado3 = document.getElementById("telefono").value;
    var resultado4 = document.getElementById("institucion").value;

    if (resultado1 == "") {
        alert("debe digitar tu nombre");
        document.getElementById("nombre").focus();
    }else{
        if (resultado2 == "") {
            alert("debes digitar tu correo");
            document.getElementById("correo").focus();
        }else{
            if (resultado3 == "") {
            alert("debes digitar tu telefono");
            document.getElementById("telefono").focus();
            }else{
                if (resultado4 == "") {
                    alert("debes digitar tu Institución");
                    document.getElementById("institucion").focus();
                }else{
                    console.log(resultado1 + " " +resultado2 + " " + resultado3 + " " + resultado4);
                   
                }
            }
        }
    }

}
