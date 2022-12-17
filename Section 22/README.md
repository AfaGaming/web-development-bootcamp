
# Section 22 - EJS

**About:** In this section, I learned about Partials and what I can do with them, and the project that I built while learning it is a To Do List app. This To Do List App shows you the current date and month at the top and you get to check off your to do list items and you also get to add new items on the list.
## Lesson Learned
- Templates and why do we need them
- EJS (Embedded Javascript Templating)
    - app.set('view engine', 'ejs');
    - res.render('index', {foo: 'FOO'});
    - <%= EJS %> - EJS Marker
    - <%= Outputs the value into the template (HTML escaped)
- Running Code inside the EJS Template
    - <% - 'Scriptlet' tag, for control flow, no output
- Passing Data from Your Webpage to Your Server
- Concept of Scope in the Context of Javascript
    - Global Variables
    - Local Variables
    - For conditional statements and loops, var keyword acts like global variable while let and const act as local variables
- Adding CSS files to your Website
- Understanding Templates vs Layouts
- Partials
    - <%- include('header') -%>
    - <%- include('footer') -%>
- Understanding Node Module Exports: How to Pass Functions and Data between Files

## Demo





## Screenshots




## Authors

- [@bhoamikhona](https://github.com/bhoamikhona)

