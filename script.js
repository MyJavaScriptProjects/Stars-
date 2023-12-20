/*
1-developer name: Fateme Satouri
2-Project name: Ask me
3-Project description:
In this project, when you open the page in your browser, you will see a beautiful animation.
When you go to the console page through inspect
You will see the stars in the order of the line and in each line there is a star according to the number of that line.
And I tried to create a sunrise and sunset scene with a slight change in the shutter speed
4-email:navayearamm@gmail.com 
5-The languages ​​used in this project are: JavaScript, CSS, HTML

💫❤️Have a good time❤️💫
*/

// start

/* The first for loop:
In this for we print bright stars.
which reads the first line and in the second loop for the line number that you point to the i variable, a star is printed. */

for (let i = 1; i <= 6; i++) {
  /*  The first for loop  */
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "🌟";
  }
  console.log(stars);
}

/*  In the second for loop:
You print from the last to the first by moving the values ​​of i and placing i- stars. That's why I put a month here to show the scene of sunrise and sunset  */

for (let i = 6; i >= 1; i--) {
  /*  The second for loop  */
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "🌚";
  }
  console.log(star);
}

// two loop

/* The three for loop:
In this for we print bright stars.
which reads the first line and in the second loop for the line number that you point to the i variable, a star is printed. */
for (let i = 1; i <= 6; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "🌟";
  }
  console.log(stars);
}
/*  In the four for loop:
You print from the last to the first by moving the values ​​of i and placing i- stars. That's why I put a month here to show the scene of sunrise and sunset  */

for (let i = 6; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "🌚";
  }
  console.log(star);
}

// three loop

/* The four five loop:
In this for we print bright stars.
which reads the first line and in the second loop for the line number that you point to the i variable, a star is printed. */
for (let i = 1; i <= 6; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "🌟";
  }
  console.log(stars);
}
/*  In the six for loop:
You print from the last to the first by moving the values ​​of i and placing i- stars. That's why I put a month here to show the scene of sunrise and sunset  */

for (let i = 6; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "🌚";
  }
  console.log(star);
}

// four loop

/* The seven five loop:
In this for we print bright stars.
which reads the first line and in the second loop for the line number that you point to the i variable, a star is printed. */
for (let i = 1; i <= 6; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "🌟";
  }
  console.log(stars);
}

/*  In the eight for loop:
You print from the last to the first by moving the values ​​of i and placing i- stars. That's why I put a month here to show the scene of sunrise and sunset  */
for (let i = 6; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "🌚";
  }
  console.log(star);
}

// finish
