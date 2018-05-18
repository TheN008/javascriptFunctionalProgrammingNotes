(function(){

        let XMLHttpRequest = (...arg) => {
            this.readyState = 4;
            this.status = 200;
        }

        XMLHttpRequest.prototype = {
            open: (...a)=>1,
            send: (...a)=>1
        }
        let send_http_request = (url, method, args) => {
            return new Promise((resolve, reject)=>{
                /*
                    Promises are objects that take two functions as argument, they can be anything.
                    Usually, if a callback fails, reject function is called
                    and if callback is successfull then resolve is called.
                    If this is confusing for you please check out on some online
                    sources.
                */
                let xhttp = new XMLHttpRequest();

                xhttp.onreadystatechange = () => {
                    try{
                        if(this.readyState == 4 && this.status >= 200){

                            resolve(xhttp);
                        }
                    }catch(error){
                        reject(error);
                    }
                }

                if(args.length&&method.toLowerCase()==="get"){
                    xhttp.open(method, `${url}/${args}`, true);
                    xhttp.send();
                }else{
                    xhttp.open(method, `${url}`, true);
                    xhttp.send(`${args}`);
                }

            });
        }

        let req = send_http_request("GET", "http://0.0.0.0");
        /*
        Promise object has many methods. Among them many objects
        `then` and `catch` are one.
        the `then` defines the function for first argument.
        What I mean is that it replaces the resolve function with the
        function passed as the argument.
        In t
        */
        req.then((obj)=>console.log("Successfull!")).catch((err)=>console.log(`${err.message}`));
    })();
