(

    /*
        Closures are functions inside another function that can access the scope
        of outer function.
    */

    function(){

        var a = 100;
        function inner_func(){
            // In this function there is no `a` declared or defined
            // but you can see it declared at the outer function
            return a;
        }
        console.log(inner_func()); // well the function returns 100 because inner_func is a closure! :)


    }

)();
