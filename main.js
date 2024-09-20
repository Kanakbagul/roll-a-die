console.log("Hi");

function getRandom6(){

    const rn =Math.floor(Math.random()*6)+1;
    return rn;

}
function getRandomURL(){
    const words =["one","two","theree","four","five","six"];
    console.log(words[getRandom6()-1]);
}
getRandomURL()

