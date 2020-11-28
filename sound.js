var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var noteFreqDefinitions = {
    "C": 32.7,
    "Cs": 34.6,
    "D": 36.7,
    "Ds": 38.9,
    "E": 41.2,
    "F": 43.7,
    "Fs": 46.2,
    "G": 49,
    "Gs": 51.9,
    "A": 55,
    "As": 58.3,
    "B": 61.7
};
var duration = 500;
var octave = 4;
var waveMode = "sine";
var reverbTime = 2;
var currentNote = null;

document.getElementById("key-C").addEventListener("click", function () {
    playSound("C", octave);
    if (currentNote === "C") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-Cs").addEventListener("click", function () {
    playSound("Cs", octave);
    if (currentNote === "Cs") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-D").addEventListener("click", function () {
    playSound("D", octave);
    if (currentNote === "D") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-Ds").addEventListener("click", function () {
    playSound("Ds", octave);
    if (currentNote === "Ds") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-E").addEventListener("click", function () {
    playSound("E", octave);
    if (currentNote === "E") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-F").addEventListener("click", function () {
    playSound("F", octave);
    if (currentNote === "F") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-Fs").addEventListener("click", function () {
    playSound("Fs", octave);
    if (currentNote === "Fs") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-G").addEventListener("click", function () {
    playSound("G", octave);
    if (currentNote === "G") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-Gs").addEventListener("click", function () {
    playSound("Gs", octave);
    if (currentNote === "Gs") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-A").addEventListener("click", function () {
    playSound("A", octave);
    if (currentNote === "A") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-As").addEventListener("click", function () {
    playSound("As", octave);
    if (currentNote === "As") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("key-B").addEventListener("click", function () {
    playSound("B", octave);
    if (currentNote === "B") {
        currentNote = null;
        document.getElementById("random-note").innerText = "Random Note";

    }
});
document.getElementById("decrease-octave").addEventListener("click", function () {
    octave--;
    checkOctaveBounds();
    document.getElementById("octave-label").innerText = 'Octave: ' + octave

});
document.getElementById("increase-octave").addEventListener("click", function () {
    octave++;
    checkOctaveBounds();
    document.getElementById("octave-label").innerText = 'Octave: ' + octave

});

document.getElementById("wave-sine").addEventListener("click", function () {
    waveMode = "sine";
    document.getElementById("wave-dropdown").innerText = "Sine";
});

document.getElementById("wave-square").addEventListener("click", function () {
    waveMode = "square";
    document.getElementById("wave-dropdown").innerText = "Square";
});

document.getElementById("wave-sawtooth").addEventListener("click", function () {
    waveMode = "sawtooth";
    document.getElementById("wave-dropdown").innerText = "Sawtooth";
});

document.getElementById("wave-triangle").addEventListener("click", function () {
    waveMode = "triangle";
    document.getElementById("wave-dropdown").innerText = "Triangle";
});

document.getElementById("random-note").addEventListener("click", function () {
    var notes = Array("C", "Cs", "D", "Ds", "E", "F", "G", "Gs", "A", "As", "B");
    var randomNote = notes[Math.floor(Math.random() * notes.length)];
    if (currentNote == null) {
        currentNote = randomNote;
        document.getElementById("random-note").innerText = "Replay";
    }

    playSound(currentNote, octave);
});

function checkOctaveBounds() {
    if (octave < 1) {
        octave = 1;
    }
    if (octave > 6) {
        octave = 6
    }
}

function playSound(note, octave = 4) {
    var oscillator = audioCtx.createOscillator();
    oscillator.type = waveMode;
    oscillator.frequency.value = noteFreqDefinitions[note] * Math.pow(2, octave); // value in hertz
    var gain = audioCtx.createGain();
    gain.gain.value = 1;
    oscillator.connect(gain);
    gain.gain.exponentialRampToValueAtTime(
        0.00001, audioCtx.currentTime + reverbTime
    );
    gain.connect(audioCtx.destination);

    oscillator.start(0);

    setTimeout(
        function () {
            oscillator.stop();
        }, duration);


    console.log("Pressed: " + note);
}