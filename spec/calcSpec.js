describe ("calculator", function(){

    describe("Addition Test" ,function(){

        it("should return 42", function(){

            expect(addition(20,22)).toBe(42);
        });
        it ("should return 4", function(){
              expect(addition(2,2)).toBe(4);
         });  
         it("Should return error for string values", function(){
             spyOn(window, "alert");
             addition("hitchhikers", "Guide");
             expect(window.alert).toHaveBeenCalledWith("Error!");
         });
    });

});
