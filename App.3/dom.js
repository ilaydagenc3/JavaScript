//console.log(window);

// let value;

// console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;

// value = document.all;
// value = document.characterSet;
// value = document.title;

// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList[3];

// value = document.forms.item(1).children;

// value = document.domain;
// value = document.contentType;

// console.log(value);


// SELECTORS - STYLE ÖZELLİKLERİ

// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// });

// console.log(classListesi);


// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);

// button.innerHTML = "<b>Todo Ekleyin </b>";


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));

// todoList.forEach(function(todo){
//     console.log(todo);
// });

// console.log(todoList);


// const forms = Array.from(document.getElementsByTagName("form"));

// forms.forEach(function(form){
//     console.log(form);
// });

// console.log(forms[1]);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton"));

// const todoList = document.querySelector(".list-group");
// console.log(todoList);


// const todoList = document.querySelectorAll(".list-group-item");
// console.log(todoList);

const todoList = document.querySelectorAll("li:nth-child(odd");
console.log(todoList);