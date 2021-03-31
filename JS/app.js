/* Plans to create functions in Note-ly app. */  



// Function 1 - Dark Mode

/*  - Change initial color scheme to be "light mode"
    - Create a .darkmode class selector in CSS that change the color  
        - this class should also change the button 
    - Create a function that toggles between classes
        - does not take any parameters
        - uses .classlist to toggle dark mode class 
    - Add the function to the button, use onclick method
*/


// Function 2 - Create New Note Button

/*  Create a function that adds the html from note.html into index.html:
        - function will not take any parameters
        - It will use .createElement features to add literals
        - Use template literals to add element of class "note", inside will be:
            - label tag, button
            - textarea tag
            - div tag, class "savedelete" - 2 buttons 
    Save button:
        - use onclick to save the object inputed into a noteArray
        - object will have a body and title 
        - push() method 
        - will undo the function above (remove the "note" class)
    Delete button:
        - will simply remove the "note" class
*/      


// Function 3 - Note Title (Side Menu)

/*  - Make link <a> tags display the title of each note in the noteArray
    - Each link with call a function to replace the main area with the body of that note
    - Close button is added with the createElement function 
        - This button will use the toggle method to return back to original state
    
*/