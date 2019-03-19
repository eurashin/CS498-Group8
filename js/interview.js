//globals
const max_num = 5;
var recognition;
var id;
var answer = "";

function initialize_recognition() {
    recognition = new webkitSpeechRecognition();
    recognition.onspeechend = function() {
        recognition.stop();
    }
    recognition.onresult = function(event) {
        alert("HI");
        var saidText = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                saidText = event.results[i][0].transcript;
            } else {
                saidText += event.results[i][0].transcript;
            }
        }

        answer = saidText;

        //update bubble
        $("#answer_panel").text(answer);
        //recognition.stop();
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

    for(var i=0; i<question_array.length; i++) {
        var question = question_array[i];
        current_question_array = add_element(current_question_array, question, i);
        update_bubble_view(current_question_array, i);

        alert("asking the question....");

        recognition.start();
        /*current_answer_array[i] = answer;
        $("#answer_panel").text(answer);*/

        /*
        $.ajax({
            type:"POST",
            url:"/php/speechToText.php",
            dataType: "json",

            success: function(obj, textstatus) {
                alert(obj)
            }
        });
        */
    }
}


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

//SPEECH TO TEXT METHOD GOES HERE
/*function speech_to_text() {
    recognition.start();
}*/
