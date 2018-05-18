(
    function () {
        /*
        Some questions you should be asking yourself:
            What the heck even a functor is?
            Doesn't that sound like function?
            Well, is it a function?

        Answers:
            NO! Don't mistake functor as a function. Functor is very
            different from a function. To understand functor you should
            understand the concept of map.

        What is a functor?
            Functor is a object that has map method in it.
            Arrays in javascript are functors because it has map method,
            remember from the old tutorials? Easy as that!

        I don't even need to write any code to explain you about a functor
        but here is one:
        */

        let a = [1,2,3];

        a = a.map((i)=>{
            return a+6; // adds 6 to all elements of the array!
        });
    }
)();
