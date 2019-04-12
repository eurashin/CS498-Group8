var answer_array; 

function setAnswers() {
    answer_array =  JSON.parse(window.localStorage.getItem("answer_array"));
    console.log(answer_array);
    for(var i=0; i<answer_array.length; i++) {
        if(!answer_array[i]) { //is empty
            $('#' + String(i)).css('font-style', 'italic'); //should have prompt
            $('#' + String(i)).css('color', 'grey'); //should have prompt
            $('#' + String(i)).css('border', '1px solid black'); //should have border
            $('#' + String(i)).css('min-width', '20px');
        }
        else {
            $("#" + String(i)).text(answer_array[i]); //grab the element
        }
    }

    $('.form-element').click(function() {
        $(this).css('color', 'black');
        $(this).css('font-style', 'normal');
        $(this).text('');
        answer_array[this.id] = 'filled';
    }) 
            
}


// References:
// https://www.youtube.com/watch?v=WJOfCnoqShw
// https://github.com/MrRio/jsPDF/issues/1610
// https://github.com/MrRio/jsPDF/issues/476
function exportPDF()
{
    $('.form-element').css('border-style', 'none');
    
    for(var i=0; i<answer_array.length; i++) {
        if(!answer_array[i]) { //is empty
            $('#' + String(i)).text(''); 
        }
    }


    html2canvas(document.querySelector("#resume")).then(canvas => {
        doc = new jsPDF('p', 'px', [1593, 1233]);
        var img = canvas.toDataURL("image/png");
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save('resume.pdf');
    });
}
