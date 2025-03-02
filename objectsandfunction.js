var car = {};

car.owners = 2;
car.mileage = 98765;
car.color = "red";
car.turnTheKey = function() {
    if (car.owners <3 && car.year > 2018 && car.year < 2024)

    {
        console.log ("the car is worth for 5000-6000 Cad as it was purchased in" + car.year + "And Owned by" + car.owners);

    }
    else  
    {
       console.log ("Car is too old too buy and may not be worth for the money, you may still wanna pay less than 2000 cad");
}
}
car.turnTheKey ();