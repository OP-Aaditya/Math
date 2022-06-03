 
 player1_score=document.getElementById("player1_score").value;
 player2_score=document.getElementById("player2_score").value;

 

function send() {
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    question="<h4>" + number1 + "X" + number2  + "</h4>";
    input="<br>Answer:<input type='number' id='answer_input' >";
    button="<br><button id='answer_button' onclick='check()'>";

    row=question + input + button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

question_turn="player1";
answer_turn="player2";

function check(){
get_answer=document.getElementById("answer_input").value;
if(get_answer==actual_answer){
    if(answer_turn="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    if(answer_turn="player1" ){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn" + answer_turn; 
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn" + answer_turn;
    }
    if(question_turn="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn" + question_turn;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn" + question_turn;
    }

    
}

}

