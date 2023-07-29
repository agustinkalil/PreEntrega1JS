const inicioDeSesion = () => {
    
    let usuario = prompt(`Ingrese usuario`);
    let contraseña = prompt (`Ingrese contraseña`);

    if(usuario === "agustin" && contraseña === "Blackrose"){
        const tiposDeLicencias = () => {
            let licencias = prompt(`Ingresa un tipo de licencia`);
        
        while(licencias != `cerrar`){
            switch (licencias) {
                case "Basica":
                    alert("Adquiriste una licencia basica de tu beat")
                    break;
                case "Standard":
                    alert("Adquiriste una licencia standard de tu beat")
                    break;
                case "Premium":
                    alert("Adquiriste una licencia premium de tu beat")
                    break;
                case "Ilimitada":
                    alert("Adquiriste una licencia ilimitada de tu beat")
                    break;
                
                default:
                alert(`Deber seleccionar algun tipo de licencia`)
                    break;
            };
            
            licencias = prompt(`Ingresa un tipo de licencia`);
            
        }; 
         
        }
        
        tiposDeLicencias();
    } else if (
        alert(`usuario incorrecto`)
    );

};

inicioDeSesion();