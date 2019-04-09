function setAnswers() {
    var answer_array =  JSON.parse(window.localStorage.getItem("answer_array"));
    console.log(answer_array);
    for(var i=0; i<answer_array.length; i++) {
        if(answer_array[i] == '') { //is empty
            $('#' + String(i)).css('visibility', 'hidden'); //should not be visible 
        }
        else {
            $("#" + String(i)).text(answer_array[i]); //grab the element 
        }
    }
}


function addHeader() {

}

