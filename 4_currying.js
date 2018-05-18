(
    function () {

        /*
            What is Currying?
            ans. When a function doesn't take all required arguments at one call
                 but instead it returns function that takes argument
                 then it's called currying.
        */


        /* old syntax */
            function simple_interest1(principal){
                return function(time){
                    return function(rate){
                        return principal/100 * time * rate;
                    }
                }
            }

        /* new syntax */
            var simple_interest = principal => time => rate => principal/100 * time * rate;


            console.log(simple_interest(1000)(1)(20))


        /*
            Did you notice that currying is only possible because of closures in the upper case?
        */
    }
)();
