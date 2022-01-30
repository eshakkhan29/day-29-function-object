// function

function eshak() {
    console.log("my name is eshak kkhan");
}
eshak();

// function perameter 

function add(man1, man2, man3) {
    var total = man1 + man2 + man3;
    return total;
}
var total = add(5, 2, 6);
console.log(total);

// namta 
var namta = 13;
for (var i = 1; i <= 10; i++) {
    var namtaho = namta * i;
    console.log(namtaho);
}

// chito htaer banate hobe 

function changefunction(value) {
    return value.toLowerCase();
}
var result = changefunction("ESHAK KHAN");
console.log(result);

// nam jog kora 

function amarNamerJog(e, k) {
    var myName = e + k;
    return myName;
}
var result = amarNamerJog( "Eshak ", "Khan");
console.log(result);

// mulification kora 

function multi(man) {
    var setMan = man;
    var gunKoro = man * setMan;
    return gunKoro;
}
var result2 = multi(8);
console.log(result2);

// object 

// gari company 

var object1 = {brand: "toyota", model: "allion a 15", color: "coffy",};
// console.log(object1["color"]);
// 2nd output 
// console.log(object1.brand);

// change poparety value 
// 1

object1.model = "corolla";
// 2
object1["color"] = "white";
// 3
var nam = "brand"
object1[nam] = "mersetiz";
console.log(object1);


// switch 
var dilam =  "mahmud";
switch (dilam) {
    case "eshak":
        console.log("Hi' i am eshak khan")
        break;
    case "zubayer":
        console.log("Hi' i am zubayer")
        break;
    case "masud":
        console.log("Hi' i ammasud")
        break;
    case "mahmud":
        console.log("Hi' i am mahmud")
        break;

    default:
        console.log("Hi' ami khalli balli")
        break;
}

// break in loop

var i = 0;
while (i <= 10) {
    console.log(i);
    if (i == 6) {
        break
    }
    i++;
}
for (var i = 0; i <= 20; i++) {
    console.log(i)
    if (i == 15) {
        break
    }
}

// break in Array 

var onekKisu = [34, 54, 54, 45, 55, 85, 554, 55, 65];
// for (var i = 0; i < onekKisu.length; i++) {
//     var sob = onekKisu[i];
//     console.log(sob);
//     if (i > 50) {
//         break
//     }
// }

for (var i = 0; i < onekKisu.length; i++) {
    var sobgula = onekKisu[i];
    if (sobgula > 55) {
        continue
    }
    console.log(sobgula);
}

