var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var noteFreqDefinitions = {
    "C": 261.6,
    "Cs": 277.2,
    "D": 293.7,
    "Ds": 311.1,
    "E": 329.6,
    "F": 349.2,
    "Fs": 370,
    "G": 392,
    "Gs": 415.3,
    "A": 440,
    "As": 466.2,
    "B": 493.9
};
var duration = 500;

document.getElementById("key-C").addEventListener("click", function () {
    playSound("C")
});
document.getElementById("key-Cs").addEventListener("click", function () {
    playSound("Cs")
});
document.getElementById("key-D").addEventListener("click", function () {
    playSound("D")
});
document.getElementById("key-Ds").addEventListener("click", function () {
    playSound("Ds")
});
document.getElementById("key-E").addEventListener("click", function () {
    playSound("E")
});
document.getElementById("key-F").addEventListener("click", function () {
    playSound("F")
});
document.getElementById("key-Fs").addEventListener("click", function () {
    playSound("Fs")
});
document.getElementById("key-G").addEventListener("click", function () {
    playSound("G")
});
document.getElementById("key-Gs").addEventListener("click", function () {
    playSound("Gs")
});
document.getElementById("key-A").addEventListener("click", function () {
    playSound("A")
});
document.getElementById("key-As").addEventListener("click", function () {
    playSound("As")
});
document.getElementById("key-B").addEventListener("click", function () {
    playSound("B")
});


function playSound(note) {

    // create Oscillator node
    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = noteFreqDefinitions[note]; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(
        function () {
            oscillator.stop();
            playMelody();
        }, duration);


    console.log("Pressed: " + note);
}