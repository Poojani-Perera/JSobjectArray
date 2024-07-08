const obj1 = {
   name: 'Alice',
   age: 25 
  }

const obj2 = {
   job: 'Engineer',
   city: 'New York'
   }   

const mergedObj = { ...obj1 , ...obj2 }      //merge two object
 
console.log(mergedObj)