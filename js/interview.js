//globals
const max_num = 5;
var recognition;
var id;
var answer = "";
var answer_array;
var type; 

// loads a new webpage
// input: the directory of the webpage to be loaded 
function start_interview(type) {  
    window.location.href = './pages/interview.html';
    type = type;
}

function startSpeech() {
    try { // calling it twice will throw...
      answer = "";
      recognition.start();
  }
  catch(e){}
}

function initialize_recognition() {
    recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
        var saidText = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                saidText = event.results[i][0].transcript;
            } else {
                saidText += event.results[i][0].transcript;
            }
        }

        answer = saidText;

        /*var node = document.createElement("comment bubbleRight");
        node.innerHTML = saidText;
        var aPanel = document.getElementById("answer_panel");
        aPanel.appendChild(node);*/

        //update bubble
        // $("#answer_panel").text(answer);
        recognition.stop();

    }
}


function choose_question_array() {
    var array = base_question_array;

    if(type == 'cs') {
        array = array.concat(cs_resume_questions); 
    }
    else if(type == 'medical') {
        array = array.concat(med_resume_questions); 
    }
    else {
        array = array.concat(business_resume_questions); 
    }

    return(array);
}

/*
 * Take an array of questions, for each question...
 *  create a comment bubble
 *  take in answer with python
 *  store answer string
 *  Clear display for next question...
 */
function conduct_interview(interview_type) {
    /*choose question array based on type*/
    var question_array = choose_question_array();
    console.log(question_array);

    initialize_recognition();
    var current_question_array = ["", "", "", "", ""]; //holds strings of last five questions asked
    var current_answer_array = ["", "", "", "", ""]; //holds strings of last five answers given
    answer_array = new Array(question_array.length);
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


var iterator = function(iteration, question_array, current_question_array, current_answer_array, total_length) {
    if(iteration > 0) {
        var i = total_length - iteration;
        var question = question_array[i];
        current_question_array = add_element(current_question_array, question, i);
        update_bubble_view(current_question_array, i);
        startSpeech();
        setTimeout(function() {
            iterator(iteration - 1, question_array, current_question_array, current_answer_array, question_array.length);
        }, 10000);


        setTimeout(function() {
            current_answer_array = add_answerElement(current_answer_array, answer, i);
            update_bubble_question(current_answer_array, i);
        }, 6000);
    }
    else {
        set_answers();
    }
}

var fill_form = function() {
    set_answers();
    if(type == 'cs') {
        window.location.href='./form.html';
    }
    else if(type == 'medical') {
        window.location.href='./med.html';
    }
    else {
        window.location.href='./Business.html';
    }
}

var set_answers = function() {
    window.localStorage.setItem("answer_array", JSON.stringify(answer_array));
}

var demo = function(name, index, onCompleteFunc) {
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


function add_answerElement(current_answer_array, answer, answer_index) {
    answer_array[answer_index] = answer;
    var start_index = 0;
    if(answer_index >= max_num) { //past last element
        start_index = max_num - 1;
    }
    else {
        start_index = answer_index;
    }

    for(var i=(max_num - 1); i>0; i--) { //shift remaining down
        current_answer_array[i] = current_answer_array[i - 1];
    }

    current_answer_array[0] = answer; //first element is new question

    return(current_answer_array);
}

/*updates the string and visibility of bubbles
 * based on the current question and answer array
 */
function update_bubble_view(current_question_array, question_index) {
    for(var i=0; i<max_num; i++) {
        var question = current_question_array[i];
        var qElement = "#q".concat(i + 1); //selector for correct question bubble

        if(i <= question_index) { //question has been asked
            $(qElement).css('visibility', 'visible'); //make the question element visible
        }

        $(qElement).text(question); //update question
    }
}

function update_bubble_question(current_answer_array, answer_index){
    for(var i=0; i<max_num; i++) {
        var answer = current_answer_array[i];
        var aElement = "#a".concat(i + 1); //selector for correct answer bubble

        if(i <= answer_index) {
            $(aElement).css('visibility', 'visible'); //make the answer element visible
        }

        $(aElement).text(answer); //update question
    }
}
