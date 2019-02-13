describe('htmldomtest', function(){
    
    var spyEvent ;
    beforeEach(function(){
        setupHtmlFixture();
    });
    it('should trigger dom event', function(){
        spyEvent=spyOnEvent('#btnset','click');
        $("#btnset").trigger("click");
        expect(spyEvent).toHaveBeenTriggered();
    });
    
});
var msg="hello jasmine"
describe(" display hello jasmine", function(){
beforeEach(function(){
    setupHtmlFixture();
    $("#textmsg").val(msg);
    $("#btnset").trigger("click");
})
it('should display hello jasmine', function(){
expect($("#textmsg")).toHaveText(msg);
})
})