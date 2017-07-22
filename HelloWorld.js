"use strict";
var Student = (function () {
    function Student() {
    }
    Student.display = function () {
        var stname = 'arnav';
        var age = 2;
        console.log("hi..." + stname + "\n age=" + age);
        this.count++;
        console.log(this.count);
    };
    Student.count = 0;
    return Student;
}());
//let s1:Student=new Student();
Student.display();
