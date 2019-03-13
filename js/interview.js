//globals
const max_num = 5; 

/*
 * Take an array of questions, for each question...
 *  create a comment bubble
 *  take in answer with python
 *  store answer string
 *  Clear display for next question...
 */
function conduct_interview() {
    var question_array=["hi", "hi2", "hi3"];
    var current_question_array = ["", "", "", "", ""]; //holds strings of last five questions asked 
    var current_answer_array = ["", "", "", "", ""]; //holds strings of last five answers given

    for(var i=0; i<question_array.length; i++) {
        var question = question_array[i];
        current_question_array = add_element(current_question_array, question, i);
        update_bubble_view(current_question_array, i);
        
        $.ajax({
            type:"POST", 
            url:"/php/speechToText.php", 
            dataType: "json", 
            
            success: function(obj, textstatus) {
                if( !('error' in obj) ) {
                    alert(obj.result);
                }
                else {
                    console.log(obj.error);
                }
            }
        });
        alert(current_question_array);
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
