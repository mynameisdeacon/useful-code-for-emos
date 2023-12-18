//do you want to kill yourself, if you do say 'yes', if not say 'no'.
const answer = "yes".toLowerCase();
//answer here  ^
if(answer === "yes"){
    console.log("lets get this straight, we need to figure out how you want to die, so lets do that");
    console.log("");
    //if you want to die violently type 'V', for peacefully type 'P' and for both put 'b'
    const thing = "b".toLowerCase();
    if(thing === "p"){
        console.log("you chose peacefully, wussy");
        console.log("here is some peacefull ways to KYS");
        console.log("drowning");
        console.log("hanging");
        console.log("poison(like rat poison or bleach)");
        console.log("drowning");
        console.log("drug overdose");
        console.log("starvation/de-hydration");
        console.log("hypothermia");
    } else if(thing === "v"){
        console.log("you chose violently, good you will go out with a bang");
        console.log("shooting yourself");
        console.log("slice your wrists, however remember to do it vertically");
        console.log("cop suicide");
        console.log("Jacking off");
        console.log("jumping of a building");
        console.log("electrocution");
        console.log("fire");
    } else if(thing === "b"){
        console.log("shooting yourself");
        console.log("slice your wrists, however rembeber to do it vertically");
        console.log("cop suicide");
        console.log("Jacking off");
        console.log("jumping of a building");
        console.log("electrocution");
        console.log("fire");
        console.log("you chose peacfully, wussy");
        console.log("here is some peacefull ways to KYS");
        console.log("drowning");
        console.log("hanging");
        console.log("poison(like rat poison or bleach)");
        console.log("drowning");
        console.log("drug overdose");
        console.log("starvation/de-hydration");
        console.log("hypothermia");
    } else {
        console.log("pls put a valid answer");
    }
} else if(answer === "no"){
    console.log("good your not emo");
} else {
    console.log("pls type a  valid answer");
}