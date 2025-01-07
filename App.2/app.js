// 06.01.2025

// FOR DÖNGÜSÜ
// 1 den 10 a kadar yazdıralım

// for (let i=1; i<=10; i++){
//     console.log(i);
// }
// 1 den 10 a kadar çiftleri yazdıralım

// for(let i=0; i<=10; i+=2){
//     console.log(i);
// }

// 1 den 10 a kadar tekleri yazdıralım

// for (let i=1; i<10; i+=2){
//     console.log(i);
// }

// for(let i=1; i<=10; i++){
//     if(i%2==1){
//         console.log("enes");
//     }
//     else{
//         console.log("naber");
//     }
// }

// 50 den 1 e kadar gidelim ve toplamlarını bulalım

// let toplam=0;
// for(let i=50; i>=1; i--){
//     toplam += i;
//     console.log(i);
// }

// console.log("toplam:" , toplam);


//WHILE DÖNGÜSÜ

// 1 den 10 a kadar yazdıralım

// let sayac = 1;

// while(sayac<=10){
//     console.log(sayac);
//     sayac ++;
// }

// 1 den 10 a kadae çiftleri ve tekleri yazdıralım

// let sayac = 0;

// while(sayac <=10){
//     if(sayac%2==0){
//         console.log(sayac);
//     }
//     sayac ++;
// }

// let sayac = 1;
// while(true){
//     console.log(sayac);
//     if(sayac==7){
//         break;
//     }
//     sayac ++;
// }


// DO-WHILE DÖNGÜSÜ

// 1 den 10 a kadar yazdıralım

//let sayac = 1;
// do{
//     console.log(sayac);
//     sayac ++;
// }while(sayac<=10);

// let yas = 25;

// do{
//     console.log()

// }while(yas>=25)

// 1 den 20 ye kadar olan tek sayıların toplqamını bulalım

// let sayac = 1;
// let toplam = 0;
// do{
//     if(sayac%2==1){
//         toplam += sayac;
//     }
//     sayac ++;
// }while(sayac<=20)

// console.log(toplam);

// break 
// 1 den 10 a kadar sayıları yazdıralım 8 e geldiğimizde döngüden çıkalım

// let sayac = 1;
// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac ++;
// }

// continue

// let sayac = 0;
// while(sayac<=10){
//     sayac ++;
//     if(sayac>10){
//         break;
//     }
//     if(sayac==8){
//         continue;
//     }
//     console.log(sayac);
// }


//METOTLAR

// Parametresiz ve geriye değer döndürmeyen metot tanımlamak

// function yazdir(){
//     console.log("enes");
// }
// yazdir();
// yazdir();

// function topla(){
//     console.log(5+7);
// }
// topla();

// Parametreli metot tanımlamak

// function yazdir(isim,soyisim){
//     console.log(isim +" " + soyisim)
// }
// yazdir("ilayda","genç");
// yazdir("enes","bayram");

// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }
// cube(5);
// cube(3);

// let yas = Number(prompt("yaşınızı giriniz"));
// kontrolEt(yas);
// function kontrolEt(yas){
//     if(yas>18){
//         console.log("ehliyet alabilirsiniz");
//     }else{
//         console.log("ehliyet alamazsınız");
//     }
// }


// Geri değer döndüren metot tanımlamak

// let donenDeğer = cube(3);
// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;
// }

// console.log(donenDeğer);


//ARRAYS - DİZİLER

// let sayilar = [0,1,2,3,4,5,"Enes",7,8,9,"Ali"];
// sayilar[sayilar.length-1] = "Mehmet";
// console.log(sayilar[10]);

//let isimler = ["Enes","Kübra","Bilal","Yusuf"];
//isimler[2] = "Yakup";
//console.log(isimler);

//let karisikDizi = [1,"Enes",5.7,true,null,undefined];
//console.log(karisikDizi[3]);


// FOREACH DÖNGÜSÜ

// let isimler = ["Enes","Yakup","Bilal","Kübra","Ayşenur","Adem"];

// isimler.forEach(function(isim){
//     console.log(isim);
// });


// Dizi metotları

let arabalar = ["bmw","toyota","renault","mercedes","porsche"];
let arabalar2 = ["hyundai","tofaş"];

// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);

// arabalar.unshift("hyundai");
// console.log(arabalar);

// arabalar.pop();
// console.log(arabalar);

// arabalar.shift();
// console.log(arabalar);

// console.log(arabalar);
// arabalar.splice(3,0,"hyundai");
// console.log(arabalar);

// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);

// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);

// let birlesmis = arabalar.concat(arabalar2);
// console.log(birlesmis);

// console.log(arabalar);
// let ayrı = arabalar.slice(2);
// console.log(ayrı);

// console.log(arabalar.length);

// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

// let isimler = "Enes,Ali,Veli";
// let isimDizi = isimler.split(",");
// console.log(isimDizi);

// let index = arabalar.indexOf("bmw");
// console.log(index);

// let sonuc = arabalar.includes("bmw");
// console.log(sonuc);