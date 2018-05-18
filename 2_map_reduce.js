(function(){


    let people = [
        {"name": "Suyogya", "age": 18},
        {"name": "Suyash", "age": 8},
        {"name": "Sulav", "age": 18},
        {"name": "Nabin", "age": 19}
    ];

    /*  Map is very different from filter or reject,
        filter creates a new array based on the boolean returned by user-supplied function
        while map creates an array of whatever returned from the user-supplied function.
        For example:
    */



    var names = people.map(
        function(obj) {
            return obj.name;
        }
    );


    /*
        Reduce is very different, it is an array method that can return anything.
        It takes two parameters:
        1) User-supplied function
            User-supplied function also accepts two parameter,
            i) accumulater
            ii) currentValue
        2) Starting value of the accumulater
                Whatever the function returns will be the next value of accumulater
                    and currentValue is elements of an array
        Example:
    */



    var average = people.reduce(
        function(total_age, iteration){

        return total_age + iteration.age; // hope you understand this
        /*
            The value this function returns is the next first-argument of this function
            and the iteration's value is the element in the array people.
            Reduce first passes total_age as 0 and the iteration is the first element
            of people array and next time the value of the function total_age is
            value returned by the function and the value of iteration is next element in the array.
            Do you feel confused? Search a video in youtube about it. That's how I understood it.
        */
    } /* <- First argument of reduce: function*/,
    0 /* <- Second argument and this states what value should be of the first argument of user-supplied function*/);
    console.log(average);

})();
