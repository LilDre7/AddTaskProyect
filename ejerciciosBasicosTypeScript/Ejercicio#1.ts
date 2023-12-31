// 🧨 Ejercicio 1: Declaración de Variables🧨  // ⚗️
/* Declara una variable nombre de tipo string y asígnale tu nombre.
Declara una variable edad de tipo number y asígnale tu edad.
Declara una variable esEstudiante de tipo boolean y asígnale true si eres estudiante o false si no lo eres. */

const nombre: string = "LilDree";
const age: number = 20;
let isStudent: boolean = true;


// 🧨 Ejercicio 2: Funciones🧨  //
/* Crea una función llamada saludar que tome un parámetro nombre de tipo string y devuelva un saludo en formato "¡Hola, [nombre]!".
Llama a la función saludar pasando tu nombre como argumento e imprime el resultado. */

function saludar(nombre: string) {
  return `¡Hola, ${nombre}!`;
}
console.log(saludar(nombre));

// 🧨 Ejercicio 3: Tipos de Arrays🧨  //
/* Declara un array de números llamado numeros y asigna algunos números.
Declara un array de strings llamado colores y asigna algunos colores.
Declara un array de booleanos llamado verdaderoFalso y asigna algunos valores true y false. */

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const colors: string[] = ["red", "blue", "green", "yellow", "orange"];
const trueFalse: boolean[] = [true, false]

// 🧨 Ejercicio 4: Clases🧨  //
/* Crea una clase llamada Persona con propiedades nombre y edad.
Agrega un constructor a la clase Persona que tome los valores de nombre y edad como parámetros y los asigna a las propiedades correspondientes.
Crea una instancia de la clase Persona con tu nombre y edad.
Imprime los valores de la instancia creada. */

class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola mi nombres es ${this.nombre} y tengo ${this.edad} años`)
  }
}

const persona1 = new Persona("Alvaro" , 20)
console.log(persona1.saludar());


// 🧨 Ejercicio 5: Interfaces🧨  //
/* Define una interfaz llamada Mascota con propiedades nombre de tipo string y edad de tipo number.
Crea una función llamada mostrarMascota que tome un parámetro de tipo Mascota e imprima sus propiedades en una frase.
Crea un objeto que cumpla con la interfaz Mascota y pasa ese objeto como argumento a la función mostrarMascota. */
