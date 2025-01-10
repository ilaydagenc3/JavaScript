// Style özelliğini almak

// const todo = document.querySelectorAll(".list-group-item")[0];
// const todoList = document.querySelector(".list-group");

// const clearButton = document.querySelector("#todoClearButton");

// console.log(todoList);

// todo.style.color = "#fff";
// todo.style.backgroundColor = "purple";
// todo.style.fontWeight = "bold";
// todo.style.paddingTop = "20px";
// todo.style.paddingLeft = "70px";

// todoList.style.marginTop = "60px";

// clearButton.style.backgroundColor = "red";
// clearButton.style.fontWeight = "bold";
// clearButton.style.padding = "10px";
// clearButton.style.borderRadius = "50px";


//Elementler üzerinde gezinme

// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group");
// const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const card = document.querySelector(".card");

// let value;

//Anneden çocuklara erişmek

// value = todoList;
// value = todoList.children[0];
// value = todoList.children[3];
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[3].textContent = "Değişti";

//Çocuktan anneye erişmek

// value = todo;
// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
// let container = row.parentElement;

//Kardeşler arasında gezinmek

// value = todo;
// value = todo.nextElementSibling.nextElementSibling.nextElementSibling;

// value = todoLastChild;
// value = todoLastChild.previousElementSibling.previousElementSibling.previousElementSibling;

// value = row.children[0].children[3].children[0].textContent="Todo Listesi Değişti";

// let todo3 = row.children[0].children[3].children[2].children[2];
// todo3.textContent = "Todo3 değişti";
// todo3.style.backgroundColor = "lightgray";
// todo3.style.color = "red";



// Dinamik olarak element oluşturma 

// const cardBody = document.querySelectorAll(".card-body")[1];
// const todoList = document.querySelector(".list-group");

// console.log(cardBody);

// const link = document.createElement("a");
// link.id = "goBLogWebSite";
// link.className = "btn btn-dark btn-sm my-3";
// link.href = "https://enesbayram.net";
// link.target = "_blank";
// link.innerHTML = "Kişisel websiteme git";

// cardBody.appendChild(link);

// const todo = document.createElement("li");
// const todoLink = document.createElement("a");
// const i = document.createElement("i");

// todo.className = "list-group-item d-flex justify-content-between";
// todo.innerHTML = "Todo5";

// todoLink.href = "#";
// todoLink.className = "delete-item";

// i.className = "fa fa-remove";

// todoLink.appendChild(i);
// todo.appendChild(todoLink);

// todoList.appendChild(todo);

// console.log(link);



// Element Silmek

// const todoList = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");

// console.log(todos);

// todos[0].remove();
// todos[1].remove();

// todos[todos.length-1].remove();

// //------------------------------------------
// todoList.removeChild(todos[todos.length-1]);


// Elementleri Değiştirme

// const cardBody = document.querySelectorAll(".card-body")[1];

// const newTitle = document.createElement("h2");
// newTitle.className = "card-title";
// newTitle.textContent = "Todo Listesi - Yeni";

// cardBody.replaceChild(newTitle,cardBody.childNodes[1]);


// MOUSE EVENTS

// window.addEventListener("load",run);

// function run(){
//     console.log("sayfa yüklendi");
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];
// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

// cardBody.addEventListener("mousecenter",run);
// cardBody.addEventListener("mouseleave",run);

// function run(e){
//     console.log(e.type);
// } 


// KLAVYE EVENTLARI

//keypress: harf vr sayılarda tetiklenir
//keydown: hepsinde çalışır
//keyup: tuştan elini kaldırdığında çalışır

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode == 116){
//         alert("sayfa yenileme engellendi");
//     }
//     e.preventDefault();
// }



// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector("#todoName");

// input.addEventListener("keyup",run);

// function run(e){
//     cardTitle.textContent = e.target.value;
// }


// INPUT EVENTLARI

// const todo = document.querySelector("#todoName");

// todo.addEventListener("focus",run);
// todo.addEventListener("blur",run);
// todo.addEventListener("copy",run);
// todo.addEventListener("paste",run);
// todo.addEventListener("cut",run);
// todo.addEventListener("select",run);

// function run(e){
//     console.log(e.type);
// }

