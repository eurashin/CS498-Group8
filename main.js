function callPython() {
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:5000/speechToText",
        crossDomain: true,
        dataType:"json",
        success: function(o) {
            alert(o);
        }, 
        failure: function(o) {
            alert("failed");
            alert(o);
        }
    });
}
