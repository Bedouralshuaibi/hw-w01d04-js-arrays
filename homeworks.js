/* Create a function that will get the sum of the numbers between 1 and n and return the answer
summation(5) // should return 15 because 1+2+3+4+5=15 */

const sum = function(n)
{
    let arry = [];
    let sumTotal = 0 ;
    for (let i=1; i <= n ; i ++){
      arry.push(i) 
    }
    for (let i=0; i < arry.length; i++){
         sumTotal = sumTotal +  arry[i] 
    }
 return sumTotal;
}

/////////////////////////////
/* Create a program to get the sum of all the even numbers in a group
summationEven(5) // should return 6 because 2+4=6 */

const summationEven = function(n){
    let arry = [];
    let sumTotal = 0 ;
    for (let i=1; i <= n ; i ++){
        if (i % 2 === 0){
            arry.push(i);
        } 
    }
    for (let i=0; i < arry.length; i++){
        sumTotal = sumTotal +  arry[i]  
   }
 return sumTotal;
}

///////////////////////////////

/* Create a function to get the average of a group of numbers
avg([8, 2, 2, 4]) // should return 4 */

const  avg = function(arry){
     let sumTotal = 0 ;
    for (let i=0; i < arry.length; i++){
        sumTotal = sumTotal +  arry[i] 
    }
   return sumTotal/ arry.length;
}

///////////////////////////////

/* Create a function to reverse the letters in a word
reverse("caterpillar") // should return "rallipretac"  */

const rev = function(word) {
    let newArr = [];
    for (let i=0; i < word.length; i++){
        newArr.push(word[i])
    }
 return newArr.reverse().join("");;
}
 //////////////////////////////

 /* Create a function that takes an array of words and combines 
 them with a dash addDashes(['test1', 'test2', 'test3']) //
  should return "test1-test2-test3" */

  const comp = function(words){
      let arr =[];
    for (i=0; i < words.length; i ++){
        arr.push(words[i]);
    }
    return arr.join('-');
  }

  ///////////////////////////////

  /* Function that will count up to a number and back down 
  and return a string of the climbcountUpAndDown(3) 
  // should return "1 2 3 2 1" */

const climbcountUpAndDown = function(n){
    let arr =[];
    let arr2 = [];
    for (i=1 ; i <= n ; i++){
       arr.push(i)
       arr2.push(i)
    }
   arr2.reverse().shift();
   return arr.concat(arr2).join(' ');
}

////////////////////////////////

/* Write a function that will tell you all of the words in an array 
that contain the letter `a` 
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // 
should return ['cat', 'rabbit']  */
 const findA = function(words){
    let arr =[];
    let arr2 = [];
   
    for(i=0; i <= words.length ; i++){
     arr.push(words[i]);
     for (i=0 ; i <= arr.length; i++){
//      console.log('this is '+ arr2[i])
        if (arr[i] === "a")
          { arr2.push(words[i])
          }
        } 
    }
    return arr2;
 }

 //////////////////////////////////////

 /* Write a function that will tell you all of the words in an array 
 that contain a specified letter wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // 
 should return ['dog', 'frog'] */

 const wordG = function(words){
    let arr =[];
    let arr2 = [];
   
    for(i=0; i <= words.length ; i++){
      arr = words[i].split(' ');
      for (J=0 ; J <= arr.length; J++){
      if (arr[i] === "a")
          { arr.push(words[i])
          }
    } 
    }
    return arr;
}

/////////////////////////////

/* Function that returns the longest word in sentence
longestWord("The cat in the house") // should return "house" */

const longestWord = function(w){
   let str = [];
   let longWord = 0;
   str = w.split(' ');
   for (let i=0; i < str.length; i++){
       if (str[i].length > longWord){
        longWord = str[i]
       }
   }
   return longWord ;
}

/////////////////////////////

/* Function that returns the largest even number
largestEvenNumber([1,2,3,10,4,7,0]) // should return "10" */

const largestEvenNumber = function(numbers){
     let largEv = 0;
     for (let i=0; i < numbers.length; i++){
         
         if (numbers[i] % 2 === 0 )
            if (numbers[i] > largEv )
               { largEv = numbers[i]
               }
        }
return largEv
}
