(function(global, factory){
    'use strict';
   
    global.Horoscope = factory;
   })(this, function () {
       var zod_signs = ["Capricorn" , "Aquarius", "Pisces", "Aries",
   "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
   "Sagittarius"];
       var predictions = {
           bad: ["You will get some retake", "You will have conflicts with git", "You will be very fat and ugly today", "You will cry today"],
           norm: ["It's okay to be a gay", "Not bad, but also not good", "Maybe senpai will notice you", "You will not die"],
           good: ["You will solve all conflicts", "You will get discount on banans in Small", "Wow, You will have sleep at night", "You will get new teethbrush! Cool!"],
       }
       var birthDay;
       var birthMonth;
       var birthYear;
     (function start(){
       var birthStr = prompt("Please, tell me your birth date in the format D/M/Y");
       sym = ['\n', '-', '_', ':','\\', '/', '.', ' '];
       var birthArr = [];
       while(birthArr.length!=3 & sym.length>0){
         birthArr = birthStr.split(sym.pop());
       }
       console.log(parseInt(birthArr[1]));
       birthDay = parseInt(birthArr[0]);
       birthMonth = parseInt(birthArr[1]);
       birthYear = parseInt(birthArr[2]);
    })();
   
     zodiacSign = (function defSign(month, day){
       switch(month)
           {
            case 1: {//January
               if(day < 20)
                return zod_signs[0];
               else
                return zod_signs[1];
                 }break;
            case 2: {//February
               if(day < 19)
                return zod_signs[1];
               else
                return zod_signs[2];
              }break;
            case 3: {//March
               if(day < 21)
                return zod_signs[2];
               else
                return zod_signs[3];
              }break;
            case 4: {//April
               if(day < 20)
                return zod_signs[3];
               else
                return zod_signs[4];
              }break;
            case 5: {//May
               if(day < 21)
                return zod_signs[4];
               else
                return zod_signs[5];
              }break;
            case 6: {//June
               if(day < 21)
                return zod_signs[5];
               else
                return zod_signs[6];
              }break;
            case 7: {//July
               if(day < 23)
                return zod_signs[6];
               else
                return zod_signs[7];
              }break;
             case 8: {//August
               if(day < 23)
                return zod_signs[7];
               else
                return zod_signs[8];
              }break;
            case 9: {//September
               if(day < 23)
                return zod_signs[8];
               else
                return zod_signs[9];
              }break;
            case 10: {//October
               if(day < 23)
                return zod_signs[9];
               else
                return zod_signs[10];
              }break;
            case 11: {//November
               if(day < 22)
                return zod_signs[10];
               else
                return zod_signs[11];
              }break;
            case 12: {//December
               if(day < 22)
                return zod_signs[11];
               else
                return zod_signs[0];
              }break;
            }
     })(birthMonth, birthDay);
   
       function shuffle(a) {
           var b = Array.from(a);
           for (let i = b.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               [b[i], b[j]] = [b[j], b[i]];
           }
           return b;
       }
   
       function getDate() {
           var today = new Date();
           return today.getDate() + '.' + today.getMonth();
       }
   
       return new Horoscope(birthDay, birthMonth, birthYear, zodiacSign);
   
       function Horoscope(bday, bmonth, byear, sign) {
           this.bday = bday;
           this.bmonth = bmonth;
           this.byear = byear;
           this.sign = sign;
           horoscope = [];
   
           var signs = zod_signs;
   
           this.generateAll = function () {
               horoscope = [];
               signs = shuffle(signs);
               bad = shuffle(predictions.bad);
               good = shuffle(predictions.good);
               norm = shuffle(predictions.norm);
               for(var i = 0; i < (signs).length; i++) {
                   var luckyIndex = 11 - i;
                   var tempPred = 'Default prediction';
                   switch (true) {
                       case (luckyIndex >= 8):
                           tempPred = good.pop();
                           break;
   
                       case (luckyIndex >= 4):
                           tempPred = norm.pop();
                           break;
   
                       default:
                           tempPred = bad.pop();
                           break;
                   }
   
                   horoscope.push({
                       sign: signs[i],
                       prediction: tempPred,
                   })
               }
               return this;
           };
   
           this.generateAll();
   
           this.printAll = function() {
               for(var i = 0; i < horoscope.length; i++) {
                   console.log('\nplace: ' + (i+1) + ', sign: ' + horoscope[i].sign + '\nprediction: ' + horoscope[i].prediction + '_____');
               }
               return this;
           }
           this.changeSign = function() {
               this.sign = prompt("Enter your sign");
               return this;
           }
           this.showMyHoroscope = function() {
               for(var i = 0; i < horoscope.length; i++) {
                   if( horoscope[i].sign == this.sign){
                       console.log('\nplace: ' + (i+1) + ', sign: ' + horoscope[i].sign + '\nprediction: ' + horoscope[i].prediction + '_____');
                       break;
                   }
               }
               return this;
           }
           this.showFriendHoroscope = function(friendSign) {
               for(var i = 0; i < horoscope.length; i++) {
                   if( horoscope[i].sign.toLowerCase() == friendSign.toLowerCase()){
                       console.log('\nplace: ' + (i+1) + ', sign: ' + horoscope[i].sign + '\nprediction: ' + horoscope[i].prediction + '_____');
                       break;
                   }
               }
               return this;
           }
       }
   })
   
