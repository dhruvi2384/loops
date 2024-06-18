// 1 line patter
for (let i = 1; i < 10; i++) {
  console.log("*");
}

let halftr = " ";
for (let a = 0; a < 10; a++) {
  for (j = 1; j < a; j++) {
    halftr = "* " + halftr;
  }
  console.log(halftr);
  halftr = " ";
}

// multi line
let p = " ";
for (let a = 0; a < 10; a++) {
  for (j = 1; j < a; j++) {
    p = "* " + p;
  }
  console.log(p + " ");
  p = " ";
}
let secp = "";
for (let h = 0; h < 10; h++) {
  for (let k = 10; k > h; k--) {
    secp = secp + "* ";
  }
  console.log(secp);
  secp = " ";
}

for (let i = 1; i <= 10; i++) {
  let rtringle = "";
  for (let j = 0; j < 10 - i; j++) {
    rtringle += " ";
  }
  for (let k = 0; k < i; k++) {
    rtringle += "*";
  }
  console.log(rtringle);
}

for (let i = 1; i <= 10; i++) {
  let rtringle = "";
  for (let j = 0; j < 10 - i; j++) {
    rtringle += " ";
  }
  for (let k = 0; k < i; k++) {
    rtringle += "*";
  }

  console.log(rtringle);
}
for (let i = 10; i >= 1; i--) {
  let opptringle = "";
  for (let j = 0; j < 10 - i; j++) {
    opptringle += " ";
  }
  for (let k = 0; k < i; k++) {
    opptringle += "*";
  }
  console.log(opptringle);
}
