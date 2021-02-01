//CHAPTER 3 - PAGE 80 - WOOF WOOF CODE ANALYSIS
//BARK FUNCTIONS
function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);

bark("juno", 20);
bark("scottie", -1);  //Function will simply say woof woof as -1 is less than 20, even though a negative weight for a dog would be odd.
bark("dino", 0, 0); //Function will ignore second zero...Let's ignore the fact that a dog weighing zero would also be odd...
bark("fido", "20"); //Function would say woof woof, as it will compare string "20" to 20...
bark("lady", 10);
bark("bruno", 21);
