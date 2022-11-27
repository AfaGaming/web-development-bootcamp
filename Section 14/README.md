
# Section 14 - jQuery

**About:** In this section, I learned all the basics of jQuery.
## Lessons Learned

- What is jQuery
- How to incorporate it into website
- Content Delivery Network (CDN)
- Minification to reduce file size

- Selecting Elements with jQuery
    - $("Tag") or jQuery("Tag")

- Manipulating styles with jQuery
    - $("Tag").css("property") - get the property value
    - $("Tag").css("property", "value") - set the property to value passed
    - $("Tag").addClass("className1 className2") - add the passed class to the tag selected; Note: You can add multiple classes at once by seperating their names using a space character.
    - $("Tag").remove("className") - remove the passed class from the tag selected
    - $("Tag").hasClass("className") - returns a boolean value stating whether the class passed is applied to the tag selected or not

- Manipulating text with jQuery
    - $("Tag").text("new text") - This changes the current text between the tags to the text passed; Note: the tag selected will apply to all elements with said tag. Also, text here passes as a string so, if you try to add html code into it, it will be rendered as text and not as code
    - $("Tag").html("< tag >text< /tag >") - When you use html() method, if you pass html elements with it, it will be rendered as html tags and the text in between the tags will remain text.

- Manipulating attributes with jQuery
    - $("Tag").attr("attributeName") - returns the value of the passed attribute
    - $("Tag").attr("attributeName", "attributeValue") - sets the value of the passed attribute to the passed attribute value
    
- Adding Event Listeners with jQuery
    - $("Tag").click(fuction() { do something });
    - $("Tag").keypress(function(event) { do something }); - for key stroke event listener; if you want to apply the event listener to entire web page, in place of "tag", put "document" or "body"
    - $("Tag").on("eventName", function() {do something}); - the first parameter of "on" function asks you to passes the kind of event you are looking for e.g. mouseover, click, keypress etc.

- Adding and Removing Elements with jQuery
    - $("Tag").before("html-code") - before funtion allows you to add html code passed in parameters before the tag selected.
    - $("Tag").after("html-code") - after function allows you to add html code passed in parameters after the tag selected.
    - $("Tag").prepend("html-code") - prepend function will put the html code passed in the parameter into the tag selected, just after the opening tag of the selected tag.
    - $("Tag").append("html-code") - append function will put the html code passed in the parameter into the tag selected, just before the closing tag of the selected tag
    - $("Tag").remove() - removes all of the elements of that is of the tag selected.

- Website Animations with jQuery
    - $("Tag").hide() - hides the element selected
    - $("Tag").toggle() - toggles the element by hiding and making it appear
    - $("Tag").fadeOut()
    - $("Tag").fadeIn()
    - $("Tag").fadeToggle()
    - $("Tag").slideUp()
    - $("Tag").slideDown()
    - $("Tag").slideToggle()
    - $("Tag").animate({ change css properties that have numeric values like margin or opacity })
    - Chaining Animations
        - e.g. $("h1").slideUp().slideDown().animate({ opacite: 0.5 })
        - it will perform all the animations in the above example one after the other












## Demo





## Screenshots




## Authors

- [@bhoamikhona](https://github.com/bhoamikhona)

