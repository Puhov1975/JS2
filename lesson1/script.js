function first() {
    var current=document.getElementsByClassName("red")[0] ==undefined
        ? false 
        : document.getElementsByClassName("red")[0].classList.remove('red');
    var demo = document.getElementById("myUL");
    demo.firstChild.classList.add('red');
}
function last() {
    var current=document.getElementsByClassName("red")[0] ==undefined 
        ? false 
        : document.getElementsByClassName("red")[0].classList.remove('red');
    var demo = document.getElementById("myUL");
    demo.lastChild.classList.add('red');
}

function next() {
    var demo = document.getElementsByClassName("red")[0];
    if (demo.nextElementSibling!==null){
        demo.classList.remove('red');
        demo.nextElementSibling.classList.add('red');
    }
};
function prev() {
    var demo = document.getElementsByClassName("red")[0];
    if (demo.previousElementSibling!==null){
        demo.classList.remove('red');
        demo.previousElementSibling.classList.add('red');
    }
};

function append(form) {
    if (form.input.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = form.input.value;
        document.getElementById("myUL").appendChild(newItem);
        last();
    }
};

function addFirst (form) {
    var formValue = form.input.value;
    if (formValue) {
        var demo = document.getElementsByClassName("red")[0];
        var newli = document.createElement("li");
        demo.parentElement.insertBefore(newli, demo).innerHTML = formValue;
        first();
    }
}
function remove (form) {
    if (document.getElementById("myUL").childNodes.length ==1) return;
    var demo = document.getElementsByClassName("red")[0].remove();
    first();
}
