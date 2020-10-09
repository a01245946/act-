let Temperatura = input.temperature()
let Color = input.lightLevel()
if (Temperatura <= 14 && Color >= -22) {
    basic.showString("Rojo")
}
if (Temperatura <= 15 && Color >= 23) {
    basic.showString("Verde")
}
if (Temperatura <= 24 && Color >= 32) {
    basic.showString("Amarillo")
}
if (Temperatura <= 33 && Temperatura == 50) {
    basic.showString("Sin Luz")
}
