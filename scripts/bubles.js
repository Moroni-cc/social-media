/* for (let i = 0; i < 100; i++) {
    console.log("bbucle for " + (i + 1));
}

let j = 0;
while (j < 100) {
    console.log("bbucle while " + (j + 1));
    j++;
} */
let user = "admin";
let userName;

for (let i = 0; userName !== user; i++) {
    alert("Intento " + (i + 1));
    userName = prompt("Enter your name");
}

while (userName !== user) {
    // alert("Intento " + (i + 1));
    userName = prompt("Enter your name");
    // i++;
}

do {
    userName = prompt("Enter your name");
} while (userName !== user);
