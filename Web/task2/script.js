var doc = document;
var user_name = '';
var user_id = -1;
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var currentProductId = 0;
var New_Products = [
	{ 
        'id_item': 1,
        'name': 'Открытка "Загадай желание"', 
        'img1': 'images/products/1_1.jpg', 
        'img2': 'images/products/1_2.jpg',
        'img-mini': 'images/products/1_mini.jpg',
        'price': 300, 
        'size': '10*15см',
        'tags': 'Открытка, Подарок, Рождество, Дед Мороз',
        'category': 'Новый год'
    },
    { 
        'id_item': 2,
        'name': 'Светильник "Северный олень"', 
        'img1': 'images/products/2_1.jpg', 
        'img2': 'images/products/2_2.jpg',
        'img-mini': 'images/products/2_mini.jpg',
        'price': 900, 
        'size': '25*20см',
        'tags': 'Светильник, Интерьер, Олень, Ночник', 
        'category': 'Новый год'
    },
    { 
        'id_item': 3,
        'name': 'Дневник "Воспоминания"', 
        'img1': 'images/products/3_1.jpg', 
        'img2': 'images/products/3_2.jpg',
        'img-mini': 'images/products/3_mini.jpg',
        'price': 600, 
        'size': '15*20см',
        'tags': 'Дневник, Подарок, Рождество, Блокнот',
        'category': 'Новый год'
    },
    { 
        'id_item': 4,
        'name': 'Арт-бук "Мечты"', 
        'img1': 'images/products/4_1.jpg', 
        'img2': 'images/products/4_2.jpg',
        'img-mini': 'images/products/4_mini.jpg',
        'price': 450, 
        'size': '20*20см',
        'tags': 'Арт-бук, Блокнот, Дневник, Art-book',
        'category': 'День рождения' 
    }
];

var Products = [
    {
        'id_item': 1,
        'name': 'Открытка "Загадай желание"',
        'img1': 'images/products/1_1.jpg',
        'img2': 'images/products/1_2.jpg',
        'img-mini': 'images/products/1_mini.jpg',
        'price': 300,
        'size': '10*15см',
        'tags': 'Открытка, Подарок, Рождество, Дед Мороз',
        'category': 'Новый год'
    },
    {
        'id_item': 2,
        'name': 'Светильник "Северный олень"',
        'img1': 'images/products/2_1.jpg',
        'img2': 'images/products/2_2.jpg',
        'img-mini': 'images/products/2_mini.jpg',
        'price': 900,
        'size': '25*20см',
        'tags': 'Светильник, Интерьер, Олень, Ночник',
        'category': 'Новый год'
    },
    {
        'id_item': 3,
        'name': 'Дневник "Воспоминания"',
        'img1': 'images/products/3_1.jpg',
        'img2': 'images/products/3_2.jpg',
        'img-mini': 'images/products/3_mini.jpg',
        'price': 600,
        'size': '15*20см',
        'tags': 'Дневник, Подарок, Рождество, Блокнот',
        'category': 'Новый год'
    },
    {
        'id_item': 4,
        'name': 'Арт-бук "Мечты"',
        'img1': 'images/products/4_1.jpg',
        'img2': 'images/products/4_2.jpg',
        'img-mini': 'images/products/4_mini.jpg',
        'price': 450,
        'size': '20*20см',
        'tags': 'Арт-бук, Блокнот, Дневник, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 5,
        'name': 'Обложка "Пегас"',
        'img1': 'images/products/5_1.jpg',
        'img2': 'images/products/5_2.jpg',
        'img-mini': 'images/products/5_mini.jpg',
        'price': 380,
        'size': '10*15см',
        'tags': 'Обложка, Документы, Лошадка, Паспорт',
        'category': 'День рождения'
    },
    {
        'id_item': 6,
        'name': 'Обложка "Ананасик"',
        'img1': 'images/products/6_1.jpg',
        'img2': 'images/products/6_2.jpg',
        'img-mini': 'images/products/6_mini.jpg',
        'price': 400,
        'size': '10*15см',
        'tags': 'Обложка, Документы, Паспорт, Ананас, Блестки',
        'category': 'День рождения'
    },
    {
        'id_item': 7,
        'name': 'Винтажный календарь',
        'img1': 'images/products/7_1.jpg',
        'img2': 'images/products/7_2.jpg',
        'img-mini': 'images/products/7_mini.jpg',
        'price': 450,
        'size': '15*25см',
        'tags': 'Календарь, Женщина, Винтаж',
        'category': 'День рождения'
    },
    {
        'id_item': 8,
        'name': 'Тег "Олень"',
        'img1': 'images/products/8_1.jpg',
        'img2': 'images/products/8_2.jpg',
        'img-mini': 'images/products/8_mini.jpg',
        'price': 300,
        'size': '10*15см',
        'tags': 'Олень, Перья, Гламур, Тег',
        'category': 'День рождения'
    },
    {
        'id_item': 9,
        'name': 'Тег "Судьба"',
        'img1': 'images/products/9_1.jpg',
        'img2': 'images/products/9_2.jpg',
        'img-mini': 'images/products/9_mini.jpg',
        'price': 300,
        'size': '10*15см',
        'tags': 'Судьба, Ладонь, Время, Тег',
        'category': 'День рождения'
    },
    {
        'id_item': 10,
        'name': 'Эко-блокнот',
        'img1': 'images/products/10_1.jpg',
        'img2': 'images/products/10_2.jpg',
        'img-mini': 'images/products/10_mini.jpg',
        'price': 560,
        'size': '20*20см',
        'tags': 'Арт-бук, Блокнот, Дневник, Винтаж, Бабочки, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 11,
        'name': 'Блокнот "Нежный бархат"',
        'img1': 'images/products/11_1.jpg',
        'img2': 'images/products/11_2.jpg',
        'img-mini': 'images/products/11_mini.jpg',
        'price': 600,
        'size': '20*30см',
        'tags': 'Арт-бук, Блокнот, Дневник, Бархат, Ключ, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 12,
        'name': 'Блокнот "Путешественник"',
        'img1': 'images/products/12_1.jpg',
        'img2': 'images/products/12_2.jpg',
        'img-mini': 'images/products/12_mini.jpg',
        'price': 450,
        'size': '20*20см',
        'tags': 'Арт-бук, Блокнот, Дневник, Путешествие, Путешественник, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 13,
        'name': 'Тревелбук',
        'img1': 'images/products/13_1.jpg',
        'img2': 'images/products/13_2.jpg',
        'img-mini': 'images/products/13_mini.jpg',
        'price': 630,
        'size': '20*30см',
        'tags': 'Арт-бук, Блокнот, Дневник, Путешествия, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 14,
        'name': 'Блокнот "Нежность"',
        'img1': 'images/products/14_1.jpg',
        'img2': 'images/products/14_2.jpg',
        'img-mini': 'images/products/14_mini.jpg',
        'price': 450,
        'size': '20*30см',
        'tags': 'Арт-бук, Блокнот, Дневник, Розы, Кружево, Винтаж, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 15,
        'name': 'Поздравительная открытка',
        'img1': 'images/products/15_1.jpg',
        'img2': 'images/products/15_2.jpg',
        'img-mini': 'images/products/15_mini.jpg',
        'price': 200,
        'size': '18*28см',
        'tags': 'Открытка, Цветы, Розы, Бабочка, Поздравление',
        'category': 'День рождения'
    },
    {
        'id_item': 16,
        'name': 'Чековая книжка желаний',
        'img1': 'images/products/16_1.jpg',
        'img2': 'images/products/16_2.jpg',
        'img-mini': 'images/products/16_mini.jpg',
        'price': 680,
        'size': '28*15см',
        'tags': 'Чек, Желания, Любовь',
        'category': 'День рождения'
    },
    {
        'id_item': 17,
        'name': 'Блокнот для рецептов',
        'img1': 'images/products/17_1.jpg',
        'img2': 'images/products/17_2.jpg',
        'img-mini': 'images/products/17_mini.jpg',
        'price': 500,
        'size': '20*30см',
        'tags': 'Блокнот, Дневник, Рецепты, Кухня',
        'category': 'День рождения'
    },
    {
        'id_item': 18,
        'name': 'Закладки для книг',
        'img1': 'images/products/18_1.jpg',
        'img2': 'images/products/18_2.jpg',
        'img-mini': 'images/products/18_mini.jpg',
        'price': 150,
        'size': '15см',
        'tags': 'Книги, Закладки',
        'category': 'День рождения'
    },
    {
        'id_item': 19,
        'name': 'Открытка "Чудо"',
        'img1': 'images/products/19_1.jpg',
        'img2': 'images/products/19_2.jpg',
        'img-mini': 'images/products/19_mini.jpg',
        'price': 450,
        'size': '10*15см',
        'tags': 'Часы, Роза, Цветы, Открытка, Рождество, Чудо',
        'category': 'Новый год'
    },
    {
        'id_item': 20,
        'name': 'Холдер для документов',
        'img1': 'images/products/20_1.jpg',
        'img2': 'images/products/20_2.jpg',
        'img-mini': 'images/products/20_mini.jpg',
        'price': 400,
        'size': '12*25см',
        'tags': 'Документы, Обложка, Паспорт, Винтаж',
        'category': 'День рождения'
    },
    {
        'id_item': 21,
        'name': 'Блокнот "Ловец снов"',
        'img1': 'images/products/21_1.jpg',
        'img2': 'images/products/21_2.jpg',
        'img-mini': 'images/products/21_mini.jpg',
        'price': 520,
        'size': '18*28см',
        'tags': 'Арт-бук, Блокнот, Дневник, Сны, Ловец снов, День рождения, Art-book',
        'category': 'День рождения'
    },
    {
        'id_item': 22,
        'name': 'Кулинарная книга',
        'img1': 'images/products/22_1.jpg',
        'img2': 'images/products/22_2.jpg',
        'img-mini': 'images/products/22_mini.jpg',
        'price': 600,
        'size': '22*35см',
        'tags': 'Арт-бук, Блокнот, Кухня, Рецепты, Винтаж, Art-book',
        'category': 'День рождения'
    }
];

var users = [
    {
        'id' : 0,
        'login': 'irinaS',
        'password': '1093971',
        'email': 'irra.selina@mail.ru',
        'name': '-',
        'birthday': '-',
        'connect': 1,
        'phone': '-',
        'address': '-',
        'index': '-',
        'id_list': 0
    }
];

var list_of_orders = [
    {
        'name': 'Открытка "Загадай желание"',
        'img': 'images/products/1_mini.jpg',
        'count': 1,
        'price': 300,
        'sum': 300
    },
    {
        'name': 'Дневник "Воспоминания"',
        'img': 'images/products/4_mini.jpg',
        'count': 1,
        'price': 600,
        'sum': 600
    }
];

setBtnText();
window.addEventListener('resize', setBtnText);
var slider = setInterval(nextSlide, 5000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function setBtnText(){
    var modalBox = doc.getElementsByClassName('btn_modal_box');
    var i = (user_id >= 0) ? 0 : 1;
    if (doc.body.offsetWidth <= 460)
        (!i) ? modalBox[i].innerText = '' : modalBox[i].value = '';
    else
        (!i) ? modalBox[i].innerText = user_name : modalBox[i].value = 'Вход';
}

function fillProducts(arr) {
    var main = doc.querySelector('.main_second');
    main.addEventListener('click', viewProduct);
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var newItem = doc.createElement('div');
        newItem.className = 'product';
        newItem.innerText = item['name'];
        newItem.setAttribute('product_id', item.id_item);
        var img = doc.createElement('div');
        img.className = 'product_img';
        img.setAttribute('product_id', item.id_item);
        img.style = 'background: url(' + item['img1'] + ') no-repeat; background-position: center center;'; 
        newItem.appendChild(img);
        main.appendChild(newItem);
    }
}

function openBoxForEnter(event) {
    var form = doc.querySelector('.box_for_enter');
    var div = doc.createElement('div');
    if (event.target.getAttribute('action') === 'enter')
    {
        div.className = 'dark_back';
        doc.body.appendChild(div);
        form.show();
    }
}

function close_box(){
    var box = doc.querySelector('#close').parentNode;
    for (var i = 0; i < box.getElementsByTagName('input').length; i++)
        box.getElementsByTagName('input')[i].value = "";
    box.close();
    doc.querySelector('.dark_back').remove();
}

function enter() {
    var log = doc.querySelector('#input_log').value;
    var pass = doc.querySelector('#input_pass').value;
    for (var i = 0; i < users.length; i++) {
        if ((users[i].login === log) && (users[i].password === pass))
        {
            doc.getElementById('icon_person').style = 'visibility: visible;';
            doc.getElementById('btn_person').style = 'visibility: visible;';
            doc.getElementById('btn_person').innerHTML = (users[i].name === '-') ? users[i].login : users[i].name;
            user_name = (users[i].name === '-') ? users[i].login : users[i].name;
            doc.getElementById('icon_enter').style = 'visibility: hidden;';
            doc.getElementById('btn_enter').style = 'visibility: hidden;';
            user_id = users[i].id;
            close_box();
        }
    }
}

function viewProduct(event) {
    var target = event.target;
    if (target.getAttribute('product_id').match(/^[0-9]+$/) !== null)
    {
        currentProductId = target.getAttribute('product_id').match(/^[0-9]+$/)[0];
        doc.location.href = 'item.html';
    }
}

function fillProductInf(currentId) {
    var product = Products[currentId];
    var main =  doc.getElementsByTagName('main')[0];
    var img = main.getElementsByTagName('img')[0];
    img.style = 'background: url(' + product.img1 + ') no-repeat; background-position: center center';
    var td = main.getElementsByTagName('table')[0].getElementsByTagName('td');
    td[1].innerText = product.category;
    td[3].innerText = product.size;
    td[5].innerText = product.price;
    var name = main.getElementsByTagName('h3')[0];
    name.innerText = product.name;
}