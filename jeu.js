function allowDrop(ev) {
    var data = ev.dataTransfer.getData("text");
    if (this.id === "ombre3" && data === "dino1"){
        ev.preventDefault();
    } else if (this.id === "ombre1" && data === "dino2"){
        ev.preventDefault();
    } else if (this.id === "ombre2" && data === "dino3"){
        ev.preventDefault();
    } else {
        document.getElementById(data).animate([
            // keyframes
            { transform: 'rotate(5deg)' },
            { transform: 'rotate(-5deg)' }
          ], { 
            // timing options
            duration: 2,
            iterations: 5
          });
    };
};

// function allowTouchDrop(ev) {

// };

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

// function touchDrag(ev) {

// };

// function moveDrag(ev) {

// };

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    this.appendChild(document.getElementById(data));
};

// function touchDrop(ev) {

// };

// function getDino(ev) {
//     const dino = this;
//     let shiftX = event.clientX - dino.getBoundingClientRect().left;
//     let shiftY = event.clientY - dino.getBoundingClientRect().top;
    
//     dino.style.position = 'absolute';
//     dino.style.zIndex = 1000;
//     document.body.append(dino);
  
//     moveAt(event.pageX, event.pageY);

//     // moves the dino at (pageX, pageY) coordinates
//     // taking initial shifts into account
//     function moveAt(pageX, pageY) {
//         dino.style.left = pageX - shiftX + 'px';
//         dino.style.top = pageY - shiftY + 'px';
//     };
    
//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     };

//     // move the dino on mousemove
//     document.addEventListener('mousemove', onMouseMove);

//     // drop the dino, remove unneeded handlers
//     //a modifier ici
//     dino.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         dino.onmouseup = null;
//       };

//       // a modifier ici
//       dino.ondragstart = function() {
//         return false;
//       };
// };

const dinosaures = Array.from(document.querySelectorAll('.dino img'));

for (let dino of dinosaures) {
    dino.addEventListener('dragstart', drag);
    // dino.addEventListener('touchedown', touchDrag);
    // dino.addEventListener('touchemove', moveDrag);
    // dino.addEventListener('mousedown', getDino);
};

const ombres = Array.from(document.querySelectorAll('.ombre'));

for (let ombre of ombres) {
    ombre.addEventListener('drop', drop);
    ombre.addEventListener('dragover', allowDrop);
    // ombre.addEventListener('toucheend', touchDrop);
    // ombre.addEventListener('toucheend', allowTouchDrop);
};

const origine = Array.from(document.querySelectorAll('.dino'));
const again = document.getElementById('again');
again.addEventListener('click', recommencer);

function recommencer() {
    for (let dino of dinosaures) {
        if (dino.parentNode.id.slice(0,5) === 'ombre') {
            dino.parentNode.removeChild(dino);
            for (let place of origine) {
                if (place.childElementCount === 0) {
                    place.appendChild(dino);
                };
            };
        };  
    };
};