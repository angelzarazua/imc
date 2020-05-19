

export class Persona {

    private nombre: string;
    private edad: number;
    private NSS: string
    private sexo: string;
    private peso: number;
    private altura: number;
    private IMC: number;
    private mayorEdad: boolean;

    constructor()
    constructor(nombre: string, edad: number, sexo: string)
    constructor(nombre: string, edad: number, sexo: string, peso: number, altura: number)
    constructor(nombre?: string, edad?: number, sexo?: string, peso?: number, altura?: number) {
        this.nombre = nombre || ''
        this.edad = edad || 0
        this.NSS = this.generarNSS()
        this.sexo = sexo
        this.peso = peso || 0
        this.altura = altura || 0
    }


    toString() {
        return console.log('Nombre: ', this.nombre, ' Edad: ', this.edad, 'NSS', this.NSS, 'Sexo: ',
            this.sexo, 'Peso: ', this.peso, 'Altura: ', this.altura);
    }

    calcularIMC() {
        const PESO_BAJO = -1
        const PESO_NORMAL = 0
        const PESO_ALTO = 1

        const IMC = (this.peso) / Math.pow(this.altura, 2)
        console.log('IMC: ', IMC);

        if (this.sexo == 'H' || this.sexo == 'h') {
            console.log('Hombre');
            
            if (IMC < 20) {
                return PESO_BAJO
            } else if (IMC >= 20 && IMC <= 25) {
                return PESO_NORMAL
            } else {
                return PESO_ALTO
            }
        } else {
            console.log('Mujer');
            
            if (IMC < 19) {
                return PESO_BAJO
            } else if (IMC >= 19 && IMC <= 24) {
                return PESO_NORMAL
            } else {
                return PESO_ALTO
            }
        }
    }

    esMayorDeEdad() {
        return (this.edad >= 18) ? true : false
    }

    private generarNSS() {
        const caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ012346789";
        let NSS = "";
        for (let i = 0; i < 8; i++) {
            NSS += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        console.log("NSS: ", NSS)
        return NSS
    }

    private comprobarSexo(sexo:string) {
        if (this.sexo == sexo){
            return true
        } else {
            return false
        }
    }


    setNombre(nombre: string) {
        this.nombre = nombre
    }
    setEdad(edad: number) {
        this.edad = edad
    }
    setSexo(sexo: string) {
        this.sexo = sexo
    }
    setPeso(peso: number) {
        this.peso = peso
    }
    setAltura(altura: number) {
        this.altura = altura
    }
    setIMC() {
        const IMC = this.calcularIMC()
        if (IMC === -1) {
            this.IMC = -1
        } else if(IMC === 0) {
            this.IMC = 0
        } else {
            this.IMC = 1
        }
    }
    setMayorEdad() {
        if (this.esMayorDeEdad()) {
            this.mayorEdad = true
        } else {
            this.mayorEdad = false
        }
    }

}