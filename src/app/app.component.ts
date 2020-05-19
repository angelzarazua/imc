import { Component, OnInit } from '@angular/core';
import { Persona } from './Clases/Persona';
import { Main } from './Clases/Main'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'imc';
  form: FormGroup;
  arrayPersonas = []
  tiposInsersion = [
    { id: 1, tipo: 'Todas las variables' },
    { id: 2, tipo: 'Todos menos peso y altura' },
    { id: 3, tipo: 'Set para todos' }
  ]

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    console.log('Hola');
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  CrearPersona() {
    const nombre = this.form.get('nombre').value
    const edad = this.form.get('edad').value
    const sexo = this.form.get('sexo').value
    const peso = this.form.get('peso').value
    const altura = this.form.get('altura').value
    const tipo = Number( this.form.get('tipo').value)
    let persona: Persona

    console.clear()
    console.log('Tipo: ', tipo);

    if (tipo == 1) {
      persona = new Persona(nombre, edad, sexo, peso, altura)
    } else if (tipo == 2) {
      persona = new Persona(nombre, edad, sexo)
    } else {
      persona = new Persona()
      persona.setAltura(altura)
      persona.setEdad(edad)
      persona.setNombre(nombre)
      persona.setPeso(peso)
      persona.setSexo(sexo)
    }
    
    persona.setIMC()
    persona.setMayorEdad()
    this.arrayPersonas.push(persona)
    console.log(this.arrayPersonas);
  }
}
