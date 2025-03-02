const car = { /* we have created an object with 3 properties and used const so the original
    value of this object will not change*/
    engine: true,
    steering: true,
    speed: 'slow'
}

const sportsCar = Object.create(car); /* we created a new object that inheritats from the
car object that we created above that means this object have access to everything that
car object holds */
sportsCar.speed =  'fast'; /* we took property speed from the car object
and changed the value to fast and assigned it to the sportsCar object */

console.log('The sportsCar object: ', sportsCar); /* when this runs by default 
it will only prnt what the sportsCarobject holds or the properies it owns, to get 
properties from its parent object we need to specify it as it has access but it
cant access them by default or without letting it know that we need to access those */


console.log('----- for-in is unreliable -----');
for (prop in sportsCar) { /* we have a FOR IN loop here what it does is, it loops through
    the sportsCar object so it created a new object called prop and it takes values
    form the sportsCar object one by one and save them to the prop  varible as it IN FOR
    LOOP it also takes the properites of the parent object car */
    console.log(prop); /* then we just prints what prop variable holds which is the properties
    of the sportsCar opbect and its parent object car */
}

console.log('🤔', 'Iterating over object AND its prototype!');

console.log('----- for-of is reliable -----');
for (prop of Object.keys(sportsCar)) { /* now this is for of loop it works similar to the 
    for in loop but it stays inside the child object or the object that we have assigned to it
    it does not have access to the car or the prototype of sportsCar object
    
    so whats happaning here is that object,keys is the keyword or method that takes 
    propertiese from the object in this case it is taking properties from sportsCar and 
    converting them to array and assigning them to prop variable one by one*/
    console.log("final output" + prop + ": " + sportsCar[prop]); /* this just print
    what sportsCar[property as array item] holds */
}

console.log('🎯', 'Iterating over object\'s OWN PROPERTIES only!');