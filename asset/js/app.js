// console.log('Hello Sohel');


// consle.log('Wrong!')

// console.log(test());
// var Sohel = 10;
// console.log(Sohel);
// console.log(Sohel);
// function test(){
//     return 'sahid'
// }

// var number = '10'

// console.log(number)


// var a = 10;
// a++;
// console.log(a)

// var sohel = (20 >10) && (10>20);

// console.log(sohel);

// var a = 20;
// var b = 30;

// var c = a > b ? 100: 200

// console.log(c)


// var x = 10;

// var y = 15;

// var z = y == x;

// console.log(z)

// var a =10
// var b =30
// if(b<a){
//     console.log('i am sohel rana')
// }else{
//     console.log('no i am rafiqul')
// }


// var age = 21

// if(9>10){
//     console.log('not')
// }

// if(age>=20){
//     console.log('not in')
// }
// if(age<20){
//     console.log('not in2')
// }

// if(age>20 && age<60){
//     console.log('young man')
// }else{
//     console.log('no')
// }
// var me =20
// if(me>1){
//     if(me>20){
//         console.log('Biag Then 10')
//     }else{
//         console.log('some where between Biag Then 2-10')
//     }
    
// }

// var a = 10;
// var b = 20;
// var c = 30;
// if(a>b && a>c){
// console.log(a)
// }
// else if(b>a && bb>c){
// console.log(b)
// }
// else{
// console.log(c)
// }


// for(var i = 0; i<10; i++){
//     console.log(i + '*' + i+ ' = ' + i)
// }


// for(var i = 0; i<10; i++){
//     if(i===5){
//         console.log(i + 'sohel');
//         continue

//     }
//     console.log(i)
// }


// function Namota( nam ) {  
//     for( var i = 0; i <= 10; i++ ) {
//         if ( i > 0 ) {
//            console.log(nam + '*' + i + ' = ' + nam *  i);
//         }
//     }
// }

// Namota(4);



// var me =['Sohel', 'Rana', 'Rafiq', 'Jabbar', 'Rahim']

// me.push('rita', 'sharna')

// console.log(me)

// for(var i =0; i<me.length; i++){
//     console.log('name'+ ' = '+ me[i])
// }

// var newarry = [1 ,2 ,3 ,4 ,5 ,6, 7, 8 ,9 ,10]

// var splicearry = newarry.splice(3)
// console.log(splicearry)

// function printMyName(name, age) {
//     console.log('My name is: ' + name + ' and I am ' + age + ' years old!');
// }

// printMyName('Zonayed Ahmed', 21);

function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    // console.log(callback)7
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);