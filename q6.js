const laptop = {
   brand: 'Dell',
    model: 'XPS 13', 
    year: 2022 
  }

  for (let property in laptop) {                       //new 
    if (laptop.hasOwnProperty(property)) {
      console.log(`${property}: ${laptop[property]}`);
    }
  }
