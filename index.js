//Задание 1

//при нажатии на кнопку "Начать с ||" выполняется данная функция
//которая проверяет вхождения числа в интервал [80..130] с использованием ||
//в первом задании я использовал для ввода/вывода информации promt и alert,
//конечно же это не очень красиво, но я делаю для разнообразия
//во втором задании я уже сделаю другим способом
function task11() {
    let number = prompt('Введите число:');
    if (number && !isNaN(number)) {
        if (number < 80 || number > 130) {
            alert('Число ' + number + ' не находится между 80 и 130 включительно ');
        } else {
            alert('Число ' + number + ' находится между 80 и 130 включительно ');
        }
    } else alert('Введите корректное число');
}

//при нажатии на кнопку "Начать с &&"" выполняется данная функция
//которая проверяет вхождения числа в интервал [80..130] с использованием &&
function task12() {
    let number = prompt('Введите число:');
    if (number && !isNaN(number)) {
        if (number >= 80 && number <= 130) {
            alert('Число ' + number + ' находится между 80 и 130 включительно ');
        } else {
            alert('Число ' + number + ' не находится между 80 и 130 включительно ');
        }
    } else alert('Введите корректное число');
}

/////////////////////////////////////////////////////////////////

//Задание 2
function task2() {
    let number = document.getElementById('number2').value;
    let answerTask = document.getElementById('answerTask2');
    if (number) {
        answerTask.innerHTML = checkNumber(number);
    } else {
        answerTask.innerHTML = 'введите число';
    }

}

function checkNumber(number) {
    return number <= 100 ? true : 'Число больше 100';
}

/////////////////////////////////////////////////////////////////

//Задание 3
//Дано: 
//  for (var i = 0; i < 10; i++) {
//    if (i % 2) {
//       alert(i);
//    }
//  }

//a) Переписал цикл, используя оператор continue.
function task31() {
    for (var i = 0; i < 10; i++) {
        // если остатока от деления нет, то пропустить оставшуюся часть тела цикла
        if (i % 2 == 0) continue;
        alert(i);
    }
}

//b) Заменил цикл for на конструкцию while (true) { ... }, используя внутри оператор break.
function task32() {
    var i = 0;
    //бесконечый цикл
    while (true) {
        //если i равно 10, то выходит из цикла вообще
        if (i == 10) break;
        //если есть остаток от деления, то вывести его
        if (i % 2) {
            alert(i);
        }
        i++;
    }
}

/////////////////////////////////////////////////////////////////

//Задание 4

function task4() {
    //считываем с инпута введеные значения, разделенные пробелом и вставляем значения в массив numbers
    //здесь же заменяем запятые на точки для корректного числа с плавающей точкой
    //но пользователь может ввести дробное число как с точкой так и с запятой
    let numbers = document.getElementById('number4').value.replace(/,/, '.').split(' ');
    //делаем новый массив, превращая строку в число
    numbers.map(string => parseInt(string));
    var summa = checkNumbers(numbers);
    let answerTask = document.getElementById('answerTask4');
    answerTask.innerHTML = summa;
}

function checkNumbers(numbers) {
    let summa = 0;
    //цикл который прогоняет все элементы массива и проверяет модуль не превышает ли 2,5
    for (var i = 0; i <= numbers.length; i++) {
        if (Math.abs(numbers[i]) < 2.5) {
            //вычисляем сумму квадратов всем чисел которые прошли проверку
            summa += Math.pow(numbers[i], 2);
        }
    }
    return summa;
}

/////////////////////////////////////////////////////////////////

//Задание 5

//функция обрабатывает введенные данные и выводит результат на страницу
function task5() {
    //считываем значения инпутов
    let numberZp = document.getElementById('numberZp').value;
    let numberTime = document.getElementById('numberTime').value.replace(/,/, '.');
    let numberSkill = document.getElementById('numberSkill').value;
    //преобразовываем строки в числа и проверяем на корректность
    //зп за час в рублях
    numberZp = parseInt(numberZp, 10);
    if (isNaN(numberZp)) {
        alert('Введите корректную заработную плату');
    }
    //количество часов
    numberTime = parseFloat(numberTime, 10);
    if (isNaN(numberTime)) {
        alert('Введите корректное количество отработанных часов');
    }
    //количество месяцев стажа
    numberSkill = parseInt(numberSkill, 10);
    if (isNaN(numberSkill)) {
        alert('Введите корректное число месяцев стажа');
    }
    if (numberZp && numberTime && numberSkill) {
        var zp = countZp(numberZp, numberTime, numberSkill);
        let answerTask = document.getElementById('answerTask5');
        answerTask.innerHTML = zp + ' &#8381;';
    }
}

//функция, рассчитывающая заработную плату работника, исходя из параметров
//можно было покороче код написать, но я продемонстрировал поподробнее что к чему
function countZp(numberZp, numberTime, numberSkill) {
    //зарплата
    let zp = 0;
    //процент премии
    let proc = 0;
    //премия
    let premia = 0;
    //определяем процент премии с помощью использования конструкции switch
    switch (true) {
        case numberSkill < 12:
            proc = 0;
            break;
        case numberSkill < 36:
            proc = 5;
            break;
        case numberSkill < 60:
            proc = 8;
            break;
        case numberSkill >= 60:
            proc = 15;
            break;
        default:
            alert('Укажите верное количество месяцев стажа');
    }
    //вычисляем зарплату
    zp = numberZp * numberTime;
    //вычисляем премию
    premia = (zp / 100 * proc);
    //результат: зп + премия
    result = zp + premia;

    return result;
}