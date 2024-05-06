  // _______________Pass Fail---------------------
  console.log("1.Write a program to Calculate the Exam Pass or Fail Result using nested loop.");
  
  let marks = [
    [24, 35, 65, 22, 55, 78, 21, 64, 74, 31,],
    [36, 39, 15, 52, 95, 88, 31, 94, 44, 61,],
    [64, 65, 45, 82, 85, 98, 51, 14, 64, 41,],
    [44, 75, 65, 72, 75, 38, 91, 54, 84, 51,],
    [84, 26, 25, 12, 15, 48, 11, 44, 34, 11,],
  ];

  for(i=0; i<=4; i++){
    if(i==0){
      console.log("Section: A")
    }
    else if(i==1){
      console.log("Section: B")
    }
    else if(i==2){
      console.log("Section: C")
    }
    else if(i==3){
      console.log("Section: D")
    }
    else if(i==4){
      console.log("Section: E")
    }
    for(j=0; j<=9; j++){
      if(marks[i][j]>32){
        console.log(marks[i][j]+":Pass");
      }
      else{
        console.log(marks[i][j]+":Fail");
      }
    }
  }




// ----------------------Grade Poid------------------
console.log("2.Write a program to Calculate grading points using nested loops.");

  let number = [
    [24, 35, 65, 22, 55, 78, 21, 64, 74, 31,],
    [36, 39, 15, 52, 95, 88, 31, 94, 44, 61,],
    [64, 65, 45, 82, 85, 98, 51, 14, 64, 41,],
    [44, 75, 65, 72, 75, 38, 91, 54, 84, 51,],
    [84, 26, 25, 12, 15, 48, 11, 44, 34, 11,],
  ];

  for(i=0; i<=4; i++){
    if(i==0){
      console.log("Section: A");
    }
    else if(i==1){
      console.log("Section: B");
    }
    else if(i==2){
      console.log("Section: C");
    }
    else if(i==3){
      console.log("Section: D");
    }
    else if(i==4){
      console.log("Section: E");
    }
    for(j=0; j<=9; j++){
      if(number[i][j]>100){
        console.log(number[i][j]+":Invalid Number");
      }
      else if(number[i][j]>=80){
        console.log(number[i][j]+":A+");
      }
      else if(number[i][j]>=70){
        console.log(number[i][j]+":A");
      }
      else if(number[i][j]>=60){
        console.log(number[i][j]+":A-");
      }
      else if(number[i][j]>=50){
        console.log(number[i][j]+":B");
      }
      else if(number[i][j]>=40){
        console.log(number[i][j]+":C");
      }
      else if(number[i][j]>=33){
        console.log(number[i][j]+":D");
      }
      else{
        console.log(number[i][j]+":F");
      }
    }
  }


  // ----------------------Grade Poid------------------
console.log("3.Write a program to Calculate even or odd number using nested loops.");

let evenOdd = [
  [24, 35, 65, 22, 55, 78, 21, 64, 74, 31,],
  [36, 39, 15, 52, 95, 88, 31, 94, 44, 61,],
  [64, 65, 45, 82, 85, 98, 51, 14, 64, 41,],
  [44, 75, 65, 72, 75, 38, 91, 54, 84, 51,],
  [84, 26, 25, 12, 15, 48, 11, 44, 34, 11,],
];

for(i=0; i<=4; i++){
  if(i==0){
    console.log("Section: A");
  }
  else if(i==1){
    console.log("Section: B");
  }
  else if(i==2){
    console.log("Section: C");
  }
  else if(i==3){
    console.log("Section: D");
  }
  else if(i==4){
    console.log("Section: E");
  }
  for(j=0; j<=9; j++){
    if(evenOdd[i][j]%2==0){
      console.log(evenOdd[i][j]+":This Number is Even");
    }
    else{
      console.log(evenOdd[i][j]+":This Number is Odd")
    }
    
  }
}