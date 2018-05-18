(function(){
    let people = [
        {"name": "Suyogya", "age": 18},
        {"name": "Suyash", "age": 8},
        {"name": "Sulav", "age": 18},
        {"name": "Nabin", "age": 19}
    ];

    let isAdult = function(n) {
        return n.age>=18?true:false;
    }

    people.map(isAdult);

    console.log(people.length);

})();
