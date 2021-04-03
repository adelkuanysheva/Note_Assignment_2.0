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