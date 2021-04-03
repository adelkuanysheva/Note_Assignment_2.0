
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


var x = 1;
var noteArray = Array();

function saveNote () {
    noteArray[x] = {Title: "Note " + x,  Body: document.getElementById("story").value};
    x++;
    document.getElementById("noteArea").innerHTML =
    "<button id = 'addNewNote' type= 'button' onclick='openNote()'>+ create a new note</button>"
}
  
function cancelNote() {
    document.getElementById("noteArea").innerHTML =
    "<button id = 'addNewNote' type= 'button' onclick='openNote()'>+ create a new note</button>"
}

function openMenu() {
    document.getElementById("sideMenu").innerHTML = 
    " <div class='note_nav'>"
    + "<button class='menu_button' type = 'button'>&lt&lt</button>"
    + "<ul>"
        + "<li class='mynotes'><a href=''>my notes</a></li>  </ul></div>"

}

/* Plans to create functions in Note-ly app. */ 

// Function 1 - Dark Mode

/*  - Create a body.darkmode class selector in CSS that changes the color  
    - Create a constant for the button by using querySelector 
    - Create a function that toggles between classes
        - does not take any parameters
        - uses .classlist to toggle dark mode class 
    - Add the function to the button, use onclick method
    - Use IF ELSE STATE to change innerHTML of button, **google proper syntax 
*/


// Function 2 - Create New Note Button

/*  Create a function that adds the html from note.html into index.html:
        - function will not take any parameters
        - It will use .getElementbyId feature to add html literals
        - Add element of class "note", inside will be:
            - label tag, button
            - textarea tag
            - div tag, class "savedelete" - 2 buttons 
    Save button:
        - use onclick to save the object inputed into a noteArray, **google this
            - possibly use indexing, noteArray[x] = ... 
        - object will have a body and title
            - {Title: Note + x, Body: .. }
        - replace noteArea with the addNewNote button (original state)
    Delete button:
        - will simply remove the "note" class
        - replace the noteArea with the addNewNote button 
*/      


// Function 3 - Note Title (Side Menu)

/*  - Make link <a> tags display the title of each note in the noteArray
    - Each link with call a function to replace the main area with the body of that note
    - Close button is added with the createElement function 
        - This button will use the toggle method to return back to original state
    
*/