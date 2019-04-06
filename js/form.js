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

// References:
// https://www.youtube.com/watch?v=WJOfCnoqShw
// https://github.com/MrRio/jsPDF/issues/1610
// https://github.com/MrRio/jsPDF/issues/476
function exportPDF()
{
    html2canvas(document.querySelector("#resume")).then(canvas => {
        doc = new jsPDF('p', 'px', [1593, 1233]);
        var img = canvas.toDataURL("image/png");
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save('resume.pdf');
    });
}
