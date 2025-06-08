// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  console.log(saturdayFun()); 
console.log(saturdayFun("go hiking"));

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("%")("a legend in a million");
console.log(encouragingPromptFunction); 
const defaultFlairFunction = wrapAdjective();
console.log(defaultFlairFunction()); 