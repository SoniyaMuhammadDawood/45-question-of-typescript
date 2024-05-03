/*45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

function create_cars(manufacturer,model, ...options){
     //Initialize a car object with manufacturer and model
     let car={
        manufacturer:manufacturer,
        model:model,
     };
//Add additional options to the car object
options.forEach((option)=> {
    let [key,value]= option.split(":");
    car[key.trim()]= value.trim();
}) 

return car;
}

//call the function to creat a car object
let my_car = create_cars ("toyota", "corola", "color:red", "sunroof:true");


//Print the variable to ensure to all the information in stored correctly in car object

console.log(my_car);
