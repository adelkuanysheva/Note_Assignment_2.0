
const btn = document.querySelector('.theme-toggle');

btn.addEventListener('click', function() {
  document.body.classList.toggle('darkmode');  

    if (btn.value == "DARK MODE") {
        btn.style.color = '#e0def4';
        btn.value = "LIGHT MODE";
        btn.innerHTML = "LIGHT MODE";
    }
    else {
        btn.style.color = '#232136';
        btn.value = "DARK MODE";
        btn.innerHTML = "DARK MODE";
    }
})

function openNote() {
    document.getElementById("noteArea").innerHTML =
        "<div class = 'note'>"
            +  "<label for='story'><button type = 'button'>+</button></label>"
            + "<textarea id='story' name='story' rows='10' cols='33'>your note here</textarea>"
        + "<div class='savedelete'>"
        + "<button type = 'button' id='b1' onclick = 'saveNote()'>save</button>"
        + "<button type = 'button' id='b2' onclick = 'cancelNote()'>cancel</button></div></div>"
} 

var noteIndex = 0;
var noteArray = Array();

function saveNote () {
    noteArray[noteIndex] = {Title: "Note " + noteIndex,  Body: document.getElementById("story").value};
    noteIndex++;
    document.getElementById("noteArea").innerHTML =
    "<button id = 'addNewNote' type= 'button' onclick='openNote()'>+ create a new note</button>"

    updateMenu(noteIndex)
}
  
function cancelNote() {
    document.getElementById("noteArea").innerHTML =
    "<button id = 'addNewNote' type= 'button' onclick='openNote()'>+ create a new note</button>"
}

function openMenu() {
    document.getElementById("note_nav").style.display = "block";
}

function closeMenu() {
    document.getElementById("note_nav").style.display = "none";
}

function updateMenu(noteIndex) {
    document.getElementById("note_nav").innerHTML += 
    "<li>"
    + "<a href = '#' onclick = openNoteClicked("+ noteIndex + ")> - Note " + noteIndex + "</a>" 
    + "</li>"
}

function openNoteClicked(noteIndex) {

    document.getElementById("noteArea").innerHTML = 
    "<div class = 'openedNoteArea'>"
        + "<div class = 'openedNote'>"
        + noteArray[noteIndex - 1]["Body"] + "</div>"
        + "<div class = 'closeButton'>"
        + "<button type= 'button' onclick='cancelNote()'>close</button></div></div>"
}
