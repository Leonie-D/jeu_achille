function allowDrop(ev) {
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};

const dinosaures = Array.from(document.querySelectorAll('.dino img'));

for (let dino of dinosaures) {
    dino.addEventListener('dragstart', drag);
};

const ombres = Array.from(document.querySelectorAll('.ombre'));

for (let ombre of ombres) {
    ombre.addEventListener('drop', drop);
    ombre.addEventListener('dragover', allowDrop);
};