describe("Check True/False", function() {
    it("Check for availability item in object", function() {
      var c = [{name:"boopathi",age:28},{name:"boopathi1",age:21},{name:"boopathi3",age:24}];
      var myRecord= {name:"boopathi3",age:24}
      expect(c).toContain(myRecord);
    });

  });