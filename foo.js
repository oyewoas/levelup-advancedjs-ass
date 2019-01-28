const foo = {
    color : "red",
    getColor : function(){
    //make this function return foo.color
        return this.color;
    //without using the word: "foo"
    },
};


console.log(foo.getColor());