// временно ----------
user_id = 0;
user_name = (users[0].name === '-') ? users[0].login : users[0].name;
//----------------------

clearInterval(slider);
user(user_id);
setName();
changeDiv();
window.addEventListener('resize', changeDiv);

function changeDiv(){
    var img = doc.querySelectorAll('#img_mini');
    if (doc.body.offsetWidth <= 610) {
        for (let k = 0; k < img.length; k++) {
            img[k].style = 'margin: 2px; float: center;';
            let div = img[k].previousElementSibling;
            div.style = 'display: block; margin-top: 0;';
        }
    }
    else {
        for (let k = 0; k < img.length; k++) {
            img[k].style = 'margin: 5px; float: right;';
            let div = img[k].previousElementSibling;
            div.style = 'display: inline-block; margin-top: 30px;';
        }
    }
}

function setName(){
    doc.getElementById('btn_person').innerHTML = (users[user_id].name === '-') ? users[user_id].login : users[user_id].name;
}

function fill_user_data(type, value, name, pattern, title) {
    var input = doc.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('value', value);
    input.setAttribute('name', name);
    if (arguments.length > 3) {
        input.setAttribute('pattern', pattern);
        input.setAttribute('title', title);
    }
    return input;
}

function fill_user_table(tr, td1, value1, td2, value2) {
    td1.innerText = value1;
    tr.appendChild(td1);
    td2.appendChild(value2);
    tr.appendChild(td2);
}

function fill_orders() {
    var td = doc.createElement('td');
    if (arguments.length > 1) {
        td.innerHTML = '<div style="display: inline-block; margin-top: 30px;">' + arguments[0] + '</div>';
        td.className = "orders_td";
        var img = doc.createElement('img');
        img.setAttribute('src', arguments[1]);
        img.setAttribute('id', 'img_mini');
        img.style = 'margin: 5px; float: right;';
        td.appendChild(img);
    }
    else {
        td.innerText = arguments[0];
        td.className = "orders_td";
    }
    return td;
}

function user(i) {
    var person = users[i];
    var main = doc.getElementsByTagName('main')[0];
    var form = doc.createElement("form");
    form.setAttribute('method', 'post');
    form.setAttribute('action', '#');
    form.style =
        "border-radius: 5px; border: 2px dashed #366F7F;" +
        "margin: 20px; width: 420px";
    var btn_edit = doc.createElement('button');
    btn_edit.setAttribute('type', 'button');
    btn_edit.className = 'btn_edit';
    form.appendChild(btn_edit);
    var table = doc.createElement('table');
    table.style = 'margin: 5px;';
    table.setAttribute('id', 'user_inf');
    for (let k = 0; k < 9; k++) {
        let tr = doc.createElement('tr');
        table.appendChild(tr);
    }
    form.appendChild(table);
    main.appendChild(form);
    var lines = doc.getElementsByTagName('table')[0].children;
    var td = [];
    for (let k = 0; k < 18; k++)
        td.push(doc.createElement('td'));
    for (let k = 0; k < 18; k += 2)
        td[k].style = 'text-align: right; padding-right: 20px;';

    fill_user_table(lines[0], td[0], 'Логин', td[1], fill_user_data('text', person.login,
        'login', '[A-zА-я0-9еЁ]{2,20}', 'логин должен состоять из 2-20 символов (буквы, цифры)'));
    fill_user_table(lines[1], td[2], 'Пароль', td[3],fill_user_data('password', person.password,
        'password', '[A-z0-9!$-_.?]{8,20}', 'пароль должен состоять из 8-20 символов (буквы, цифры, специальные символы !$-_.?)'));
    fill_user_table(lines[2], td[4], 'E-mail', td[5], fill_user_data('email', person.email, 'email'));
    fill_user_table(lines[3], td[6], 'Имя', td[7], fill_user_data('text', person.name, 'name'));
    fill_user_table(lines[4], td[8], 'Дата рождения', td[9], fill_user_data('date', person.birthday, 'birthday'));

    td[10].innerText = 'Предпочитаемый способ связи';
    lines[5].appendChild(td[10]);
    var rb_phone = fill_user_data('radio', '1', 'connect');
    var rb_email = fill_user_data('radio', '2', 'connect');
    if (person.connect === 1)
        rb_phone.setAttribute('checked', '');
    else
        rb_email.setAttribute('checked', '');
    var phone_span = doc.createElement('span');
    phone_span.innerText = 'Телефон';
    var email_span = doc.createElement('span');
    email_span.innerText = 'E-mail';
    td[11].appendChild(rb_phone);
    td[11].appendChild(phone_span);
    td[11].appendChild(rb_email);
    td[11].appendChild(email_span);
    td[11].style = 'font-size: 12pt;';
    lines[5].appendChild(td[11]);

    fill_user_table(lines[6], td[12], 'Телефон', td[13], fill_user_data('tel', person.phone, 'phone'));
    fill_user_table(lines[7], td[14], 'Адресс', td[15], fill_user_data('text', person.address, 'address'));
    fill_user_table(lines[8], td[16], 'Индекс', td[17], fill_user_data('text', person.index, 'index'));

    var inputs = main.querySelectorAll("input");
    for (let k = 0; k < inputs.length; k++) {
        inputs[k].style = "font-size: 14pt; border: 0px;";
        inputs[k].setAttribute('readonly', '');
    }

    var btn_save = doc.createElement('input');
    btn_save.setAttribute('type', 'submit');
    btn_save.setAttribute('value', '');
    btn_save.style = 'display: none;';
    btn_save.className = 'btn_save';
    form.appendChild(btn_save);

    var div2 = doc.createElement('div');
    div2.style = 'margin: 20px;';
    main.appendChild(div2);
    var p = doc.createElement('p');
    p.innerText = 'Заказы';
    div2.appendChild(p);
    var table2 = doc.createElement("table");
    table2.className = "orders";
    var tr = doc.createElement("tr");
    table2.appendChild(tr);
    tr.appendChild(fill_orders('Наименование товара'));
    tr.appendChild(fill_orders('Количество'));
    tr.appendChild(fill_orders('Сумма'));
    table2.appendChild(tr);
    for (let k = 0; k < list_of_orders.length; k++)
    {
        let order = list_of_orders[k];
        let tr = doc.createElement('tr');
        tr.appendChild(fill_orders(order.name, order.img));
        tr.appendChild(fill_orders(order.count));
        tr.appendChild(fill_orders(order.sum));
        table2.appendChild(tr);
    }
    div2.appendChild(table2);
}

doc.querySelector('.btn_edit').onclick = function (event) {
    var table = doc.querySelector("#user_inf");
    var input = table.getElementsByTagName('input');
    for (let k = 0; k < input.length; k++) {
        input[k].removeAttribute('readonly');
        input[k].style = 'border: 1px #808080 solid; font-size: 14pt;'
    }
    var btn_edit = event.target;
    btn_edit.style = 'display: none;';
    var btn_save = doc.getElementsByClassName('btn_save')[0];
    btn_save.style = 'display: block;';
};

doc.querySelector('.btn_save').onclick = function(event) {
    var table = doc.querySelector("#user_inf");
    var btn_edit = doc.getElementsByClassName('btn_edit')[0];
    btn_edit.style = 'display: block;';

    var inputs = table.querySelectorAll("input");
    for (let k = 0; k < inputs.length; k++) {
        inputs[k].style = "font-size: 14pt; border: 0px;";
        inputs[k].setAttribute('readonly', '');
    }

    var btn_save = event.target;
    btn_save.style = 'display: none;';
};