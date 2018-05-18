(
    function() {
        /*
            Stream is sequential method that loads huge file in small
            chunks so that processing of the file becomes easy and fast.
            Simple implementation of stream by FFF (so that you can understand):
        */
        const stupidNumberStream = {

            each: (callback) => {
                setTimeout(() => callback(1), 1000);
                setTimeout(() => callback(2), 2000);
                setTimeout(() => callback(3), 3000);
            }
        }



        /*
            Real example of streams
        */

        const fs = require('fs')
        const highland = require('highland')
        highland(fs.createReadStream('customers.csv', 'utf-8'))
        .split()
        .map(line => line.split(','))
        .map(parts => {
                return({
                        name: parts[0],
                        numPurchases: parts[1]
                })
        })
        .filter(
            obj => obj.name !== ""
        )
        .filter(
            customer => customer.numPurchases > 2
        )
        .map (
            customer => customer.name
        )
        .each(x => console.log('each: ', x))


    }
)();
