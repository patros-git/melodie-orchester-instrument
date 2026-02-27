/**
 * ----- Melodien (Noten als Frequenzen in Hz, Dauer in ms) -----
 * 
 * Jede Note: [frequenz, dauer]
 * 
 * Pause = Frequenz 0
 */
/**
 * Melodie: Ode an die Freude (4 Stimmen)
 */
/**
 * Funkgruppe: 42
 */
/**
 * ============================================================
 */
/**
 * BEDIENUNG:
 */
/**
 * Beim Start: Calliope wählt automatisch eine Stimme (1–4)
 */
/**
 * LED zeigt die Stimmnummer an
 */
/**
 * ============================================================
 */
/**
 * Wenn der Dirigent "START" sendet → Melodie wird gespielt
 */
/**
 * Taste A: Stimme manuell wechseln
 */
/**
 * Taste B: Stimmnummer erneut anzeigen
 */
// ----- Taste A: Stimme manuell wechseln -----
input.onButtonPressed(Button.A, function () {
    stimme = stimme % 4 + 1
    zeigeStimnummer()
})
// ----- Stimmnummer auf LED anzeigen -----
function zeigeStimnummer () {
    basic.showNumber(stimme)
    basic.pause(1000)
    basic.clearScreen()
}
// ----- Melodie spielen je nach Stimme -----
function spieleMelodie () {
    let noten: number[]
let dauern: number[]
if (stimme == 1) {
        noten = stimme1_noten
        dauern = stimme1_dauer
    } else if (stimme == 2) {
        noten = stimme2_noten
        dauern = stimme2_dauer
    } else if (stimme == 3) {
        noten = stimme3_noten
        dauern = stimme3_dauer
    } else {
        noten = stimme4_noten
        dauern = stimme4_dauer
    }
    // Herz anzeigen während gespielt wird
    basic.showIcon(IconNames.Heart)
    for (let i = 0; i <= noten.length - 1; i++) {
        if (noten[i] == 0) {
            music.rest(dauern[i])
        } else {
            music.playTone(noten[i], dauern[i])
        }
        basic.pause(50)
    }
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
    zeigeStimnummer()
}
// ----- Funk: Startsignal empfangen -----
radio.onReceivedString(function (receivedString) {
    if (receivedString == "START" && bereit) {
        bereit = false
        spieleMelodie()
        bereit = true
    }
})
// ----- Taste B: Stimme erneut anzeigen -----
input.onButtonPressed(Button.B, function () {
    zeigeStimnummer()
})
/**
 * ============================================================
 */
/**
 * 🎵 INSTRUMENT – Calliope Mini Orchester
 */
let bereit = false
let stimme = 0
let stimme4_dauer: number[] = []
let stimme4_noten: number[] = []
let stimme3_dauer: number[] = []
let stimme3_noten: number[] = []
let stimme2_dauer: number[] = []
let stimme2_noten: number[] = []
let stimme1_dauer: number[] = []
let stimme1_noten: number[] = []
// Stimme 1: Sopran – Hauptmelodie (Ode an die Freude)
stimme1_noten = [
329,
329,
349,
392,
392,
349,
329,
294,
261,
261,
294,
329,
329,
294,
294
]
stimme1_dauer = [
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
600,
200,
800
]
// Stimme 2: Alt – Gegenmelodie eine Terz tiefer
stimme2_noten = [
261,
261,
294,
329,
329,
294,
261,
247,
220,
220,
247,
261,
261,
247,
247
]
stimme2_dauer = [
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
600,
200,
800
]
// Stimme 3: Tenor – Harmoniebegleitung
stimme3_noten = [
196,
196,
220,
247,
247,
220,
196,
185,
165,
165,
185,
196,
196,
185,
185
]
stimme3_dauer = [
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
400,
600,
200,
800
]
// Stimme 4: Bass – Grundton-Begleitung (lange Töne)
stimme4_noten = [
131,
0,
131,
0,
147,
0,
165,
0,
131,
0,
131,
0,
147,
0,
131
]
stimme4_dauer = [
600,
200,
600,
200,
600,
200,
600,
200,
600,
200,
600,
200,
600,
200,
800
]
// ----- Beim Start -----
radio.setGroup(42)
radio.setTransmitPower(7)
// Zufällige Stimme 1–4 wählen
stimme = Math.randomRange(1, 4)
zeigeStimnummer()
bereit = true
basic.forever(function () {
	
})
