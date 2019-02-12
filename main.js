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
