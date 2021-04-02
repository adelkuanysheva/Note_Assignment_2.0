
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