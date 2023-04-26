let nums = document.querySelectorAll("#keyboard>div")
    
   let bag = document.querySelector("#display")

   for (let i=0;i<nums.length;i++){
    nums[i].addEventListener("click",myfunction)
   }

   function myfunction(){
    let targetNumber=event.target.innerText

    switch(targetNumber){
    case "C":
        bag.innerText=""
        break;
    case "=":
        bag.innerText=eval(bag.innerText)
        break;
     default:
        bag.innerText = bag.innerText +  targetNumber
    }



    // console.log(event.target.innerText)
   }