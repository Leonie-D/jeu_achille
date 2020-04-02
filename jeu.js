function allowDrop(ev) {
    var data = ev.dataTransfer.getData("text");
    if (this.id === "ombre3" && data === "dino1"){
        ev.preventDefault();
    } else if (this.id === "ombre1" && data === "dino2"){
        ev.preventDefault();
    } else if (this.id === "ombre2" && data === "dino3"){
        ev.preventDefault();
    };
    // idéalement un else avec élément draggable qui "frissone"
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    this.appendChild(document.getElementById(data));
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

// il faudra ajouter un controle pour vérifier la bonne association !!

// écrire la fonction associée au bouton pour recommencer la partie