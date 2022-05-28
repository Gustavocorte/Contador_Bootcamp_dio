let count = 0

 let subtrair = document.addEventListener('click', increment, false)
 let adicionar = document.addEventListener('click', decrement, false)

 let bntAdd = document.getElementById("add")
 let bntRem = document.getElementById("rem")

 const CURRENT_NUMBER = document.getElementById('currentNumber');


 function increment(e) {
     count = count +1
 	CURRENT_NUMBER.innerHTML = count;
     if (count >= 11) {
        count = 11
        bntAdd.style.opacity = '0'
        } else {
        bntAdd.style.opacity = '1'
        }
 }

 function decrement(e) {
 	count = count -1
 	CURRENT_NUMBER.innerHTML = count;
     if(count <= 0) {
         count = 0
         bntRem.style.opacity = '0'
        } else {
            bntRem.style.opacity = '1'
        }
 }
