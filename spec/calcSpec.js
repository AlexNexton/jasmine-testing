describe ("Calculator", function(){

        beforeEach(function(){
             calc= new Calculator;
        });

    describe("Addition Test" ,function(){

        it("should return 42", function(){
                calc.add(20);
                calc.add(22);
            expect(calc.value).toBe(42);
        });
        it ("should return 4", function(){
              calc.add(2);
              calc.add(2);
             expect(calc.value).toBe(4);
         });  
         it("Should return error for string values", function(){
             spyOn(window, "alert");
             calc.add("hitchhikers");
             expect(window.alert).toHaveBeenCalledWith("Error!");
         });
    });

});
