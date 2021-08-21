// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) 
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
function answer(MessArray) {
  //sort array
  MessArray.sort((a, b) => a - b);
  // create extra space  
  // set the index = 0 when num !== item index + 1
  let newArray = [];
  let i = 0;
  MessArray.forEach(function (item) {
    if (newArray.length === 0) {
        newArray.push(item);
      } else {
        if (newArray[i] === item){
          newArray[i] = [newArray[i]].concat([item]);
        } else if (newArray[i][0] === item){
          newArray[i] = newArray[i].concat([item]);
        } else if (newArray[i][0] !== item) {
          newArray.push(item);
          i++;
        } 
      }
  })
  return newArray;
}
answer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20])
// answer([1, 2, 1, 2])
// thinking
// [1]
// [[1, 1]]
// [[1, 1], [2]]
// [[1, 1], [2, 2]];


//bonusBonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
function bonusAnswer(MessArray) {
    //sort array
    MessArray.sort((a, b) => a - b); // [1 ,"2", 2, "3"]
    let stringArray = [];
    let numberArray = [];
    MessArray.forEach(function(item) {
        (typeof item === "string") ? stringArray.push(item) : numberArray.push(item);
    }) 
    const mergeArray = [numberArray, stringArray]
    return mergeArray
}
// bonusAnswer([1, "2", "3", 2])
bonusAnswer([1,2,"4",591,"392",391,"2",5,"10",2,"1",1,1,"20",20])