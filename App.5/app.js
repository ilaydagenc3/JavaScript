//Local storage kullanımı

//Değer ekleme
// localStorage.setItem("motion1","Push Up");
// localStorage.setItem("motion2","Barfix");
// localStorage.setItem("motion3","Burpee");
// localStorage.setItem("motion4","Squat");

//Değer alma
// let value = localStorage.getItem("motion1");
// console.log(value);

//Değer silme
//localStorage.removeItem("motion4");

//Tümünü sil
//localStorage.clear();


// let motions = ["Push up","Barfix","Burpee","Squat","Chin up"];
// localStorage.setItem("motions",JSON.stringify(motions));

// let value = JSON.parse(localStorage.getItem("motions"));

// value.forEach(function(motion){
//     console.log(motion);
// });


// ARROW FUNCTION

// const yazdir = ()=> {
//     console.log("Merhaba");
// }

// yazdir();

// const yazdir = (firstName)=> {
//     console.log("Merhaba",firstName);
// }

// yazdir("Enes");


// Destructing Kullanımı 

// let langs = ["C#","C++","JavaScript","Python"];
// let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

// [lang1, lang2, lang3, lang4] = langs;

// console.log(lang1, lang2, lang3, lang4);


// const hesapla = (a,b)=> {
//     const toplam = a+b;
//     const cikar = a-b;
//     const carp = a*b;
//     const bol = a/b;

//     const dizi = [toplam,cikar,carp,bol];
//     return dizi;
// }

// [a,b,c,d] = hesapla(10,2);

// console.log(a,b,c,d);


// const person = {
//     firstName : "Enes",
//     lastName : "Bayram",
//     salary : 5000,
//     age : 23
// }

// let {firstName:isim,lastName:soyisim,salary:maas,age:yas} = person;
// console.log(isim,soyisim,maas,yas);


//SPREAD OPERATÖRÜ

// let numbers = [10,20,30,40];
// function add(a,b,c,d){
//     console.log(a+b+c+d);
// }

// add(...numbers);


// const diller1 = ["Java","C#"];
// const diller2 = ["Php","Python",...diller1];

// console.log(diller2);


// const numbers = [1,2,3,4,5,6,7,8,9];
// let [a,b, ...kalanSayilar] = numbers;

// console.log(a,b,kalanSayilar);


// const array1 = ["Enes","Ali","Veli","Mehmet"];
// const array2 = [...array1];

// console.log(array2);


// For-in For-off Döngüleri

// let names = ["Enes","Ali","Yusuf","Betül","Ceyda"];

// for(let name in names){
//     console.log(name, names[name]);
// }

// for(let isim of names){
//     console.log(isim, names.indexOf(isim));
// }


// MAP KULLANIMI

// const map1 = new Map();

//SET
// map1.set(1,"Enes");
// map1.set(true,5);
// map1.set([1,2,3],{firstName : "Enes", lastName : "Bayram"});
// map1.set(true,"5");

// let value;
// map1.set(34,"istanbul");
// map1.set(35,"İzmir");
// map1.set(6,"Ankara");
// map1.set(1,"Adana");

//GET
//console.log(map1.get(6));
//console.log(map1.get(34));
// const donenDeğer = map1.get(35);
// console.log(donenDeğer);

//SIZE
//value = map1.size;

//DELETE
// value = map1.delete(34);
// console.log(map1.size);
// console.log(value);

//HAS
// console.log(map1.has(55));

//For of map üzerinde döönme
// for(let [key,value] of map1){
//     console.log(key,value);
// }

// let array = [34, `İstanbul`];
// let [a,b] = array;
// console.log(a,b);

// const keys = Array.from(map1.keys());
// keys.forEach((key)=>{
//     console.log(key, map1.get(key));
// });

// for(let key of map1.keys()){
//     console.log(key);
// }

// for(let value of map1.values()){
//     console.log(value);
// }


//let array = [1,2,3,4,5,6];


//Mapten Arraya çevirme

// const array = Array.from(map1);
// console.log(array);

// const array2 = [
//     [34,"Ankara"],
//     [35,"İzmir"],
//     [6,"Ankara"],
//     [1,"Adana"]
// ]

// const array = Array.from(map1);

// array.forEach((value)=> {
//     console.log(value[0], value[1]);
// });


//Arrayi Mape çevirme

// const array2 = [
//     [34,"Ankara"],
//     [35,"İzmir"],
//     [6,"Ankara"],
//     [1,"Adana"]
// ]

// const myMap = new Map(array2);

// const myArray = Array.from(myMap);
// console.log(myArray);


// SET 

// const set = new Set();

// add metodu

// set.add(true);
// set.add(3.14);
// set.add("Enes");
// set.add("Enes");
// set.add(7);
// set.add({username:"enes" , password:"1"});
// set.add([1,2,3,4]);

//Size
// console.log(set.size);

//delete
// set.delete("Enes");
// console.log(set.size);

//has
// console.log(set.has("Enes"));
// console.log(set.has("Ali"));


// for of döngüsü
// for(let value of set){
//     console.log(value);
// }

// values.forEach((value)=> {
//     console.log(value);
// });


// Set den Array oluşturma

// const values = Array.from(set);
// console.log(values);


// Array den Set oluşturma

// let array = [1,"Enes",true,"Mustafa",15,[1,2,3]];
// const newSet = new Set(array);
// console.log(newSet);


// TEPLATE LITERALS

// function write(firstName , lastName){
//     // console.log("İsim : "+ firstName +" "+ "Soyisim :"+ lastName);
//     // template literal ile kullanım
//     console.log(`İsim : ${firstName} Soyisim: ${lastName}`);
// }

// write("Enes","Bayram");

