function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one();
two();
three();


// note: please watch '05:55:33 -  How does javascript works behind the scene' https://youtu.be/sscX432bMZo?si=CM_9FkrNmC22t2vi&t=21334