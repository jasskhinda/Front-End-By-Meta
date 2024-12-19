for (var vendinmachine = 1; vendinmachine <= 10; vendinmachine++) {
    switch(vendinmachine) {
        case 1:
            console.log("Press 1 To Get CocaCola: Pressed 1")
            break
        case 2:
            console.log("You Have Selected french vanilla coffee: Pressed 2")
            break
        case 3:
            console.log("You have selelcted simple water, congratcs its free: Pressed 3")
            break

            case 4:
            console.log("You got chocolate: Pressed 4")
            break

            case 4:
            console.log("You Got pepsi: Pressed 5")
            break

        default:
            //this block will run if no condition matches
            console.log("NO CHOICE WERE MADE SO '" +i+ "IS SELELCTED BY DEFAULT AND YOU GOT A SUBRISED ITEM")
    }
}
