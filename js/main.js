const bienvenida = () => {
    
    let nombre = prompt(`Ingrese su nombre`);
    
    
    if (nombre != "salir") {
        alert(`Bienvenido ${nombre}!`) 
    
    let productosServicios = () => {
        
        let servicios = prompt(`Ingresa alguno de nuestros productos o servicios`);
        
        while(servicios != "salir"){
            switch (servicios) {
                case "beats":
                    alert("Bienvenido a nuestro catalogo de beats. Aca podras adquirir tu instrumental y elegir que tipo de licencia quieres");
                    
                    let buscadorDeBeats = () => {
                    
                        class beat {
                            constructor(nombre, bpm, key, precio){
                                this.nombre = nombre;
                                this.bpm = bpm;
                                this.key = key;
                                this.precio = precio;
                                this.licenciaIlimitadaVendida = false;
                            }
                            
                            venderLicenciaIlimitada(){
                                this.licenciaIlimitadaVendida = true;
                            }
                        
                        }
                        
                        const beats = [];
                        
                        beats.push(new beat("bordeaux", 137, "G", 29.99))
                        beats.push(new beat("2010", 119, "Cm", 29.99))
                        beats.push(new beat("outside the club", 131, "Db", 29.99))
                        
                        let nombre = prompt(`Ingresa el nombre del beat`);
                        
                            let resultado = beats.find((item) => item.nombre === nombre);
                            
                            if(resultado){
                                let mensaje = `
                                nombre:${resultado.nombre}
                                bpm:${resultado.bpm}
                                key:${resultado.key}
                                precio:$${resultado.precio}
                                `;
                                alert(mensaje);
                            }else{
                                alert(`No hemos encontrado ningun beat que coincida :( `)
                            };
                            
                            
                        
                    };
                    buscadorDeBeats();
                    
                    
                    let licencias = prompt(`Ingresa el tipo de licencia que te interesa`);
                    
                    if(licencias === "basica"){
                        alert("Ideal para artistas principiantes que desean publicar la cancion en mixtapes, soundcloud, etc. El costo de esta licencia es de $29.99")
                    }
                    else if(licencias === "standard"){
                        alert("Ideal para artistas principiantes que desean publicar la cancion en Mixtapes, Spotify, etc. El costo de esta licencia es de $59.99")
                    }
                    else if(licencias === "premium"){
                        alert("Ideal para artistas que quieren editar track-outs y quieran un sonido profesional en la mezcla. El costo de esta licencia es de $79.99")
                    }
                    else if(licencias === "ilimitada"){
                        alert("Ideal para artistas semi-profesionales que necesitan flexibilidad. Monetiza sin limites. El costo de esta licencia es de $149.99")
                    }
                    break;
                    
                    
                    case "drumkit":
                        alert("`MoonLight` - Drum Kit. Sound Kit by BlackRose. Coleccion de Drums que personalmente utilizo en todas mis producciones. PROXIMAMENTE A LA VENTA!");
                        break;
                        
                case "mezcla y mastering":
                    alert("Eleva tu música con profesionalismo: Servicio de Mezcla y Mastering ¿Quieres que tu música suene como las estrellas? ¡Estás en el lugar correcto! Ofrezco un servicio de mezcla y mastering de alta calidad que elevará tus canciones a niveles profesionales. ¡No comprometas la calidad de tu música! Déjame llevar tus canciones al siguiente nivel con mi servicio de mezcla y mastering. Contáctame hoy mismo y juntos haremos que tu música brille como nunca antes.");
                    break;
                    
                    default:
                    alert(`Elige entre los servicios`)
                    break;
                }
        
                servicios = prompt(`Ingresa otro producto o servicio que te interese`);
            }
    }
    
productosServicios();

    }

}


bienvenida();
