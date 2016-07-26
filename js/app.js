var salary = 0;
var numberOfEmployees = parseInt(prompt("Укажите число сотрудников вашей компании",""));
var array_with_persons = [];//обьявляем массив
var summ; // переменная для сумарной ЗП

function showName() {
    if (array_with_persons.length >= numberOfEmployees  ) {
        if(numberOfEmployees==-1){ //проверка на бюджет если больше 200
            alert("превышен бюджет предриятия!");
            return;
        }
        alert("Достигнуто максимальное колличество сотрудников!");
        return;
    }

    var persone = {}; // обьявляем обьект и заносим в него данные
    persone.name = prompt("Введите имя", "");
    persone.lastName = prompt("Введите фамилию", "");
    persone.salary = parseInt(prompt("Введите зарплату сотрудника", ""));
    persone.positionOfCompany = prompt("Введите должность сотрудника", "");
    if(isNaN(persone.salary)) { // проверка на введение цифры
        alert("Вы не указали зарплату!");
        return false;

    }else {
        addPersons(array_with_persons, persone);
    }


}

function isHasPersone(array_with_persons, persone) { // функция проверки существования имени и фамилии
    for (var i = 0; i < array_with_persons.length; i++) {
        var current_persone = array_with_persons[i];
        if (current_persone.name == persone.name && current_persone.lastName == persone.lastName) {
            return true;
        }
    }

    return false;
}

function addPersons(array_with_persons, persone) { // функция добавления персоны
    if (isHasPersone(array_with_persons, persone)){ // если нашли такого же в массиве, значит сообщение и завершаем работу
        alert("Такой человек уже есть в вашем списке!");
        return false;
    }


    array_with_persons.push(persone);//если все ок, пушаем
    document.getElementById("employeeList").innerHTML = array_with_persons.map(
        function write (person) { // подключаемся к employeeList и заносим туда данные через списов нумерованный

            return "<li id='first'><span class='employeeFirstName'> <b>Имя:</b> " + person.name+ "</span></li>" +

                "<li><span class='employeeLastName'><b> Фамилия:</b> " + person.lastName+ "</span></li>" +

                "<li><span class='employeeSalary'> <b> Зарплата:</b> " + "$ " + person.salary + "</span></li>"+

                "<li><span class='employeePosition'> <b> Должность:</b> " + person.positionOfCompany+ "</span></li>"+"_________";
        });

    salary += persone.salary; // прибавляем наше ЗП при каждой итерации
    var summ = salary/array_with_persons.length; // вычисляем среднее значение
    summ=Math.round(summ);// округляем до целых
    document.getElementById("coun").innerHTML = "<b>Число сотрудников:</b> " +  array_with_persons.length + "<b>,  средняя ЗП:</b> " + summ +"  <br>" ;
    if(summ >= 200){ // если средняя ЗП больше или равна 200 numberOfEmployees присваиваем -1 и возвращаемся в начало к showName
        numberOfEmployees=-1; // чтобы проверить условие колличества людей в списке

        return numberOfEmployees;
    }
}
function dellEmploee() { // функция удаления строки


    var elem = document.getElementById('employeeList'); // подключаемся к employeeList id списка
    var numBer = parseInt(prompt("Укажите цикфу","" )); //просим указать цифру - какой элемент будем удалять
    var mNumber = numBer -1; // так как список считается с 0 отнимаем -1
    var removed = elem.removeChild(elem.children[mNumber]); // удаляем строку

}