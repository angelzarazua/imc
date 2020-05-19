import { Persona } from './Persona'

export class Main {

    start(nombre, edad, peso, sexo, altura){
        let p1 = new Persona(nombre, edad, sexo, peso, altura)

        let p2 = new Persona(nombre, edad, sexo)

        let p3 = new Persona()
        p3.setAltura(nombre)
        p3.setEdad(edad)
        p3.setNombre(nombre)
        p3.setPeso(peso)
        p3.setSexo(sexo)

        p1.calcularIMC()
        p1.esMayorDeEdad
        p1.toString()
    }

    private prepararPersonaParaArray() {

    }
    
    
    
}