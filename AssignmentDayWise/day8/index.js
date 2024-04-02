    var o1 = {
        "name": "Sachin"
    }
    //    1st way:using Spread operator
    // var o2 = { ...o1 };
    //    2nd way:using Object.assign()
    // var o2 = Object.assign({}, o1);
    //    3rd way:using JSON.stringify and JSON.parse methods
    var o2 = JSON.parse(JSON.stringify(o1));
    o2.name = "Dhoni";
    console.log(o1.name);
    console.log(o2.name);