var msg = "hello Jasmine";
function setupHtmlFixture(){
    setFixtures('<form id="frm" action="post"'+
    '<div><input type="text" id ="textmsg"/></div>'+
    '</br>'+
    '<div><input type="button" id ="btnset" onclick="setMessage()"/></div>'+
    '</br>'+
    '<div><input type="button" id ="btnClear" onclick="clearMessage()"/></div>'+
    '</br>'+
    '</form>');
}
function setMessage(){
    $("#textmsg").html(msg);
}
function clearMessage(){
    $("#textmsg").html("");
}