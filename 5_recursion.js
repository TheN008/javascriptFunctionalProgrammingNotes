(
function(){
    /*
    Recursion is when a function calls itself, it's quite like a loop
    */

    let countdown = (n) =>
    {
        console.log(n);
        if (n<=0){
            return 1;
        }
        n--;
        return countdown(n);

    }

    countdown(10);
    /*
        To understand recursion you should understand what happens
        when we call the upper-function `countdown`.
        Let me tell you how that function gets executed:
            First the function is called and the first line of code in the function
            logs the argument into the console and returns 1 if the argument is less than or
            equal to 0. then onto the next line the argument is decremented by 1.
            And the function call is returned again, and again the same thing happens
            until the n is less than or equal to 0.
            Diagram:
                call function(x):
                    log x
                    if x is less than or equal to 0 return 1
                    substract x by 1
                    if it isn't then decrement n and call function(x)

    */


}
)()
