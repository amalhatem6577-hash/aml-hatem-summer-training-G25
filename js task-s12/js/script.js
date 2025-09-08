// var degree =prompt("Enter your Degree")
// if(degree == null || degree == "") console.log("Please enter your grade")
//     else{
//    if(100 >degree||degree>=90) console.log("A")
//    else if (89>degree || degree >= 80) console.log("B")
//    else if (79>degree || degree>=70) console.log("C")
//    else if (70 >degree) console.log("failed")
//    else console.log("Invalid degree")
   
  
//     }

// var fname = prompt (" Enter name")
// for ( var i=1 ;1 < 10 ; i++){
//     fname= prompt (" Enter name")
//     if(fname == "aml")
//     break
//          console.log(fname)
// }


// function nums(sNum, eNum, breakNum, continuNum){
//     if(sNum==undefined || eNum==undefined || breakNum==undefined|| continuNum==undefined)console.log("Please enter all numbers")
//      else{   
//     for(var i= sNum ;i<= eNum ; i++){
//         if(i==continuNum)
//             continue
//         else if (i==breakNum)

//             break
//             console.log(i)
//         }
//      }
// }

// nums(10 , 20 , 17 ,15)
// console.log("-------------------------------------")

// nums(20,30)


var courses=[ "css", "java script","boot strap","html"]
var nameCourse= prompt("Enter the name of course")
if(courses.includes(nameCourse))
    console.log("found")
else{
    courses.push(nameCourse)
    console.log(courses)
}
