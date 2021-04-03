/* Plans to create functions in Note-ly app. */ 


// Function 1 - Dark Mode

/*  - Create a .darkmode class selectors in CSS that changes the color  
    - Create a constant for the button by using querySelector 
    - Create a function that toggles the .darkmode class
        - does not take any parameters
        - uses .classlist.toggle('darkmode') function
    - Add the function to the button - use onclick method
    - Use IF ELSE STATE to change innerHTML of button, **google proper syntax
        - "light mode" when in darkmode, "dark mode" when in light mode
*/


// Function(s) 2 - Create New Note Button

/*  Create a function that adds the html elements from note.html (A1) into index.html:
        - function will not take any parameters
        - It will use .getElementbyId feature to change the .innerHTML
        - Add element of class "note", inside will be:
            - label tag - non-functioning button from A1 
            - textarea
            - div tag, class "savedelete" - with 2 buttons: save & delete
    Save button function:
        - use onclick to save the object inputed into a noteArray, **google this
            - possibly use indexing, noteArray[x] = ... 
            - probably will have to initialize the first iteration, like i = 0 (outside)
            - create empty array (outside)
        - after adding into the specific index, increment by 1.. syntax? 
        - objects will each have a body and title
            - {Title: Note + x, Body: .. }
        - replace noteArea with the addNewNote button
        - original addNewNote button: 
            - <button id = 'addNewNote' type= 'button' onclick='openNote()'>+ create a new note</button>
    Cancel button function:
        - will simply remove the "note" class
        - replace the noteArea with the addNewNote button, using .innerHTML (same as save note function)
*/      


// Function(s) 3 - Note Titles, Update the Side Menu

/*  Update Menu Function:
        - probably call this function at the end of the Save Note Function
        - takes the note index variable as a parameter
        - uses the .innerHTML += function to add an li tag, inside it - a link tag "<a></a>"
            - the a tag will have the value "Note" + index of saved note
    Open the Notes Saved:
        - a tag created in update function will call an onclick function to open the note from the side menu
        - use getElementbyId to change the .innerHTML of the main section to:
            - the Body of the note click
                - array[index]["body"]
            - close button, this will have an onclick call to the cancel note function since it does what we need
*/