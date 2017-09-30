# Giftastic

Create a webpage that allows user to select tags with words and render to screen.

Webpage contains:
Buttons with key work
textbox allowing users to enter in their own keyword

On page load:
Create HTML with blank divs.

Div Id's
1. keyword holder- this is were keywords will be appended to.
2. gif holder- this is were appended gifs will be shown
3. div for input and textbox.

Choose theme- Countries

Create an array of starting countries

["south korea", "Canada", "Japan",].

Create a FOR loop that pulls the country at each index and interoplates with the giphy URL

Create on input listener for textbox
set variable to take textbox input
set variable to that interpolates textbox input with giphy URL 

Logic:

ID the form INPUT and when button is clicked the informaion is pushed to an array. Add event.preventDefault.

Function created that renders the array as Buttons.

Create a jquery on click function, which calls a renderImages function

*RenderImages* function will need to containThe AJAX's call will be embedded in the button click function and after the AJAX's call create the For loop to append the data-state, data-still, data-animate URLs

Function created for rendering gifs

function create for turning videos to still or animate

When sumbit is clicked