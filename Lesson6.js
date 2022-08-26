//1)
let exercise1= 30;
function outputValue(){
    console.log(exercise1)
}
outputValue()


//2)
let exercise2= 40;
function outputValue2(){
    let exercise2= 20;
    console.log(exercise2)
    // Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю
}
outputValue2()
console.log(exercise2)


//3)Каким будет значение переменной a в консоле. Написать почему.
var a = 10
function foo(){
console.log(a)// 
}

function bar() {
var a = 20
foo()
console.log(a)
//Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.
}
bar();
console.log(a)
// Значение глобальной переменной (а) не изменилось, так как функция (bar) не трогала внешнюю переменную


//4)Каким будет значение переменной a в консоле. Написать почему
var a = 10

function foo(){
var a = 20
console.log(a)
// 20  так как приоритет отдается объявленной одноименной переменной внутри функции
}
a = 30
foo()
console.log(a)
//Переменные, объявленные внутри функции, видны только внутри этой функции, по этому здесь покажет последнее значение глобальной переменной (а)

//5)Починить код ниже чтоб он логировал 0,1,2,3,4,5
for (let i = 0; i <= 5; i++)  {
    setTimeout(function () {
    console.log(i);
    }, 0)
}


//6)
function makeCounter() {
    let count = 0;
    function counter()  {
        return ++count;
    }
    counter.reset = function (value = 0) {
        count = value;
        return count;
    }
    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter.reset(7));
console.log(counter());
console.log(counter());





