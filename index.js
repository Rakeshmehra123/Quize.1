var readlineSync=require("readline-sync")
var userName=readlineSync.question("What's your name? ");
comsole.log("Welcome "+userName+" to Do YOU KNOW Rakesh? ");
score=0;

//play Function

function play(question,answer)
{
    var userAnswer=readlineSync.question(question);
    if(userAnswer===answer)
    {
        console.log("Right");
        score++;
    }
    else
    {
        console.log("wrong");
    }

}
console.log("current score: "+score);
console.log("__________________");

//high score
var highScore={
    name:Rakesh,
    score:2,
}

//array of object
var questions=[
    {
        question:"where do i live? ",
        answer:"ratlam",
    },
    {
        question:"who is my favorite superhero? ",
        answer:"captain america",
    },
    {
        question:"where do i work? ",
        answer:"nowhere",
    }
]

//loop

for(var i=0; i<questions.length; i++)
{
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}
console.log("High scoorer is "+highScore.name+" with high score of "+highScore.score)
console.log("______________")
if(highScore.score<score)
{
    highScore.score = score;
    highScore.name= userName;
    console.log(userName+" beaten the high scoorer "+highScore.name);
    console.log(_______________________)
}
