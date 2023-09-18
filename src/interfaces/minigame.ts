// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1

// Número máximo de intentos
const intentosMaximos = 10

// Contador de intentos
const intentos = 0

// Función para pedir al usuario que adivine el número
function adivinaElNumero() {
  while (intentos < intentosMaximos) {
    const intento = prompt(
      `Intento ${
        intentos + 1
      }/${intentosMaximos}: Adivina el número (entre 1 y 100):`,
    )

    const numeroAdivinado = parseInt(intento)
    console.log(numeroAdivinado)

    if (
      isNaN(numeroAdivinado) ||
      numeroAdivinado < 1 ||
      numeroAdivinado > 100
    ) {
      alert('Por favor, ingresa un número válido entre 1 y 100.')
    } else if (numeroAdivinado === numeroAleatorio) {
      alert(`¡Felicidades! Adivinaste el número en ${intentos + 1} intentos.`)
      return
    } else if (numeroAdivinado < numeroAleatorio) {
      alert('El número es mayor. Intenta de nuevo.')
      intentos++
    } else {
      alert('El número es menor. Intenta de nuevo.')
      intentos++
    }
  }

  alert(
    `¡Agotaste tus ${intentosMaximos} intentos! El número era ${numeroAleatorio}.`,
  )
}

// Iniciar el juego
adivinaElNumero()
