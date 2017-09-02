var main = require("../../lib/main")
describe("Player", function() {

    it("should be able to play a Song", function() {
        var array = [0,1,0,3,12];
        var target = 0;
        var result = main(array,target)
        expect(result).toEqual("1,3,12,0,0");
    });


});
