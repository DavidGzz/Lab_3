let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);





function TodoPost(e){
    e.preventDefault();
    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type = "checkbox" name = "todo" />' + todo + '<br>';
}

function TodoClear(e){
    e.preventDefault();

}

function TodoMark(e){
    e.preventDefault();

}

function TodoDel(e){
    e.preventDefault();

}