describe("Spy on the voter",function(){
    it("should use voter to execute for person", function(){
            var criteria = new voterCriteria();
            var per = new person();
            spyOn(criteria,"checkAge");
            per.canVote(criteria);
            expect(criteria.checkAge).toHaveBeenCalledWith(19);
            //checking only the dummy (spied) object method is called or not
    });
});