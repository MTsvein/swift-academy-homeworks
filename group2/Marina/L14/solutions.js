"use strict"
//task 1
var personGreeting;

function greeting(name) {
    return "Hello, " + name + "!";
}
greeting("Jeni");
//task 2
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.isPolite = true;
    this.fullName = fname + " " + lname;
    this.introduce = function () {
        return "Здравейте, kазвам се " + this.fullName;
    }
    this.bePolite = function (isPolite) {
        if (isPolite == false) {
            return "Аз съм " + this.firstName;
        }
    }

    this.greet = function (otherPerson) {
        var boiko = new Person("Бойко", "Борисов");
        var lili = new Person("Лили", "Иванова");
        boiko.introduce();
        lili.bePolite(false);
        //lili ne greet-va boiko !
        lili.greet(boiko);
        lili.introduce();

    }
}
// task 3
function personGreeting(person, beFormal) {
    var name = person.firstName + " " + person.lastName;
    if (beFormal == true) {
        return "Hello, " + name;
    } else {
        return "hi, " + person.firstName;
    }
}


personGreeting(new Person("Boiko", "Borisov"));