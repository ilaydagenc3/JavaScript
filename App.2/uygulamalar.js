
// Çarpım tablosu yapımı

// for(let i = 1; i <= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(i+"x"+j+"="+(i*j));
//     }
//     console.log("-----------------------------------");
// }


// Asal sayı bulma uygulaması

// let a = Math.floor(7.9);
// console.log(a);

// let sayi = Number(prompt("Lütfen bir sayı giriniz :"));
// let sonuc = true;
// for(let i = 2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//         // Asal değil
//         sonuc = false;
//         break;
//     }
// }
// if(sonuc=true){
//     alert(sayi + " asaldır");
// }else{
//     alert(sayi + " asal değildir");
// }


// Faktöriyel hesaplama
// 5 = 5.4.3.2.1 = 120

// let sayi = Number(prompt("bir sayı giriiniz"));
// let carpim = 1;
// for (let i = 1; i <= sayi; i++){
//     carpim = carpim * i;
// }
// console.log(carpim);


// Armstrong sayısı 
// 153 - 370 - 407
// Sayının rakamlarının küpünün toplamı kendisini veriyorsa

// let sayi = prompt("sayı giriniz");
// let toplam = 0;
// for(let i = 0; i < sayi.length; i++){
//     let rakam = sayi.charAt(i);
//     toplam += rakam*rakam*rakam;
// }

// if(Number(sayi)==toplam){
//     alert("armstromg sayısıdır");
// }else{
//     alert("armstrong sayısı değildir");
// }


//Kelime sayısı bulma uygulamamsı

// let metin = "Şuanda Yalova 'da Javascript eğitimi çekmekteyim.";

// let harf = prompt("Harfi giriniz");

// let sonuc = bul(harf);
// alert("harf sayısı " + sonuc);

// function bul(harf){
//     let toplam = 0;
//     for(let i=0; i<metin.length; i++){
//         if(metin.charAt(i)===harf){
//             toplam += 1;
//         }
//     }
//     return toplam;
// }


// Mükemmel Sayı Uygulaması
// Bölenlerinin toplamı kendisinin iki katına eşitse

// isPerfectNumber(6);

// function isPerfectNumber(number){
//     let toplam = 0;
//     for(let i = 2; i<=number/2; i++){
//         if(number%i==0){
//             toplam += i;
//         }
//     }
//     toplam += 1+number;

//     if(toplam==number*2){
//         console.log("mükemmel sayı");
//     }else{
//         console.log("mükemmel değil");
//     }
// }


// 10 luk sayıyı 2 liğe çevirme

// convertDecimalToBinary(10);

// function convertDecimalToBinary(number){
//     let binary = "";
//     while(true){
//         binary += (number%2).toString();
//         number = Math.floor(number/2);
//         if(number==1){
//             binary += 1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log(result);
// }

// function reverse(binary){
//     let reverseBinary = "";
//     for(let i = binary.length-1; i>=0; i--){
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }


// 2 lik sayayı 10 luk sayıya çevirme

// let binary = "1101011";
// function convertBinaryToDecimal(binary){
//     let toplam = 0;
//     let ust = 0;
//     for(let i = binary.length-1; i>=0; i--){
//         if(Number(binary.charAt(i)!=0)){
//             toplam += Number(binary.charAt(i)) * Math.pow(2,ust);
//         }
//         ust ++;
//     }
//     console.log(toplam);
// }

// convertBinaryToDecimal(binary);


//Ürün arama  uygulaması 
