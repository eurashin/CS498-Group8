//globals
const max_num = 5;
var recognition;
var id;
var answer = "";


function startSpeech(){
    try{ // calling it twice will throw...
      recognition.start();
      alert("I've started listening...");
  }
  catch(e){}
}

function initialize_recognition() {
    recognition = new webkitSpeechRecognition();
    /*
    recognition.onspeechend = function() {
        recognition.stop();
        alert("I've stopped listening...");
    }
    */
    recognition.onresult = function(event) {
        var saidText = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                saidText = event.results[i][0].transcript;
            } else {
                saidText += event.results[i][0].transcript;
            }
        }


        var node = document.createElement("comment bubbleRight");
        node.innerHTML = saidText;
        var aPanel = document.getElementById("answer_panel");
        aPanel.appendChild(node);

        //update bubble
        // $("#answer_panel").text(answer);
        recognition.stop();
        alert("I've stopped listening...");

    }
}


/*
 * Take an array of questions, for each question...
 *  create a comment bubble
 *  take in answer with python
 *  store answer string
 *  Clear display for next question...
 */
function conduct_interview() {
    initialize_recognition();
    var question_array=["What is your name?", "What is your major?", "What is your GPA?"];
    var current_question_array = ["", "", "", "", ""]; //holds strings of last five questions asked
    var current_answer_array = ["", "", "", "", ""]; //holds strings of last five answers given

    /*
    var i=0;
    question_array.forEach(function(question, i) {
        setTimeout(function() {
            var question = question_array[i];
            current_question_array = add_element(current_question_array, question, i);
            update_bubble_view(current_question_array, i);
            startSpeech();
        }, 5000);
    });
    */
    iterator(question_array.length, question_array, current_question_array, current_answer_array, question_array.length);
}


var iterator = function(iteration, question_array, current_question_array, current_answer_array, total_length){
    if(iteration > 0){
        var i = total_length - iteration;
        var question = question_array[i];
        current_question_array = add_element(current_question_array, question, i);
        update_bubble_view(current_question_array, i);
        startSpeech();
        setTimeout(function() {
            iterator(iteration - 1, question_array, current_question_array, current_answer_array, question_array.length);
        }, 10000);
    }
}


var demo = function(name, index, onCompleteFunc){
     /**do staff**/
     onCompleteFunc();// exec this func when you are done.
};


/* Adds question to the question array.
 * replaces first, shifts remaining down
 * and shifts remaining down
 */
function add_element(current_question_array, question, question_index) {
    var start_index = 0;
    if(question_index >= max_num) { //past last element
        start_index = max_num - 1;
    }
    else {
        start_index = question_index;
    }

    for(var i=(max_num - 1); i>0; i--) { //shift remaining down
        current_question_array[i] = current_question_array[i - 1];
    }

    current_question_array[0] = question; //first element is new question

    return(current_question_array);
}

/*updates the string and visibility of bubbles
 * based on the current question and answer array
 */
function update_bubble_view(current_question_array, question_index) {
    for(var i=0; i<max_num; i++) {
        var question = current_question_array[i];
        var element = "#q".concat(i + 1); //selector for correct question bubble

        if(i <= question_index) { //question has been asked
            $(element).css('visibility', 'visible'); //make the element visible
        }

        $(element).text(question); //update question
    }
}
