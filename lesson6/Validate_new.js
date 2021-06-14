var obj={
    validate : function (elem, pattern) {
        elem.className= pattern.test(elem.value) ? "valid" : "invalid";
    },
    name : function(){
        var pattern = /\S/;
        obj.validate(this, pattern);
    },
    email : function (){
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        obj.validate(this, pattern);
    },
    zip : function () {
        var pattern = /\d{5}/;
        obj.validate(this, pattern);
    }
    
};
// регистрация события загрузки документа.

window.addEventListener("load", init, false);

// регистрация обработчиков событий элементов формы.
function init() {
    form1.userName.addEventListener('blur',obj.name);
    form1.email.addEventListener('blur',obj.email);
    form1.zip.addEventListener('blur',obj.zip);
    form1.submit.addEventListener('click',onsubmitHandler);
}

// событие при отправке формы на сервер.
function onsubmitHandler(event) {
    event.preventDefault();
    var invalid = false;
    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (elem.type == "text") {
            elem.className = "valid";
            let blur = new Event("blur");
            elem.dispatchEvent(blur);
            //elem.blur(); // запуск события
            if (elem.className == "invalid") invalid = true;
        }
    }
    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false; // отмена отправки формы.
    }
    event.target.onsubmit();
}