/*
*   **Higher-Order Functions**
*       If functions accept function parameters and are able to return functions
*       values then the functions are higher order functions. In javascript,
*       functions are higher order function.
*/
(
    function()
        // Anonymous function inside a bracket which lets you treat functions as expression.
    {

        
        Array.prototype.reject = function(fff)
        /* Reject is not supported by my engine so i'm implementing it*/
        {
        let new_array = [];

        for (elements of this)
            // Loops through every element of an array
            {
                if (fff(elements) === false)
                {
                     new_array.push(elements);
                }
            }


        return new_array;
        }

        var animals = [
            {"type": "human", "character": "mammal"},
            {"type": "dog", "character": "mammal"},
            {"type": "fish", "character": "invertebrate"},
        ]; // This is an animal array which will have object inside it as values

        console.log(`Before filter: ${animals}`);
        /* Filter section */
        var mammals = animals.filter(function(obj){
            return obj.character === "mammal";
        });
        /*
            What the heck even is a filter?
                Filter is a method in array object,
                i) Filter expects you to give a function as a parameter which returns a boolean.
                ii) Before executing the function, It creates an empty object
                iii) Then it iterates or loops through the array,
                    calling individual array element to the function and...
                iv) Based on the returned boolean upon calling the function with array element
                    If the function returns true it adds the current element to the empty array.
                    If the function returns false it rejects to add the current element to the empty array.
                 v) When the array elements are all iterated over then it returns the newly made array.
        */

        console.log(`After filter: ${mammals}`);

        /* Reject Section */

        var not_mammals = animals.reject(function(obj){
            return obj.character === "mammal";
        })

        console.log(`Not mammals: ${not_mammals}`);

        /*
            Reject is same as filter, filter pushes the element if the function returns true
            but reject pushesh the lement if the function returns false.
        */


    }
) // The parenthesis tells JavaScript engine to treat something inside it as expression.
(); // We can call a function expression
