(function(){
    let people = [
        {"name": "Suyogya", "age": 18},
        {"name": "Suyash", "age": 8},
        {"name": "Sulav", "age": 18},
        {"name": "Nabin", "age": 19}
    ];

    /*
        From the people array of object extract all the people's name
        You pass the function to map method that returns array name
        But how does that work?
    */
    let isAdult = function(n) {
        if(n.age >= 18) { 
            return n.name;
        }
    }


    people = people.map(isAdult);

    /*
        Do you see that isAdult is a function that takes a parameter named n and returns name attribute of it?

        When map is called on people it passes every element individually to isAdult function and makes an
        array of element of whatever that is returned by the isAdult function.


        Basically this is what map is doing:

            function map(func){
                new_arr = [];
                for(let i = 0; i<people.length; i++){
                    let element = func(people[i]);
                    new_arr.push(element);
                }
                return new_arr;
            }
    */
    console.log(people);

})();
