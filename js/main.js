// loads a new webpage
// input: the directory of the webpage to be loaded 
function redirect(webpage) {
    window.location.href = webpage;
}

function callPython() {
    $.ajax({
        type:"GET",
        url:"http://10.47.105.211:5000/speechToText",
        crossDomain: true,
        dataType:"jsonp",
        success: function(o) {
            alert(o.success);
        }, 
        failure: function(o) {
            alert("failed");
            alert(o);
        }
    });
}

