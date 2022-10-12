// Array is an object and collection of variables


// Regular variable declaration

var name1, name2, name3, name4, name5;

    name1 = "Jahid";
    name2 = "Alamin";
    name3 = "Osman";
    name4 = "Shariful";
    name5 = "Ibrahim";

    console.log(name1);
    console.log(name2);
    console.log(name3);
    console.log(name4);
    console.log(name5);

// Array 1st method

var names = new Array(5);

    names[0]= "Jahid";
    names[1]= "Alamin";
    names[2]= "Osman";
    names[3]= "Shariful";
    names[4]= "Ibrahim"; // index 0 to 4 only not 5 because array length declared 5 only

    console.log(names[1]);
    console.log(names[4]);
    console.log(names);
    console.log(names.length);


// Array 2nd method
var names = new Array();

    names[0]= "Jahid";
    names[1]= "Alamin";
    names[2]= "Osman";
    names[3]= "Shariful";
    names[4]= "Ibrahim";

    console.log(names[1]);
    console.log(names[4]);
    console.log(names[5]); // Can't be printed because index 5 was not declared
    console.log(names);
    console.log(names.length);

// Array 3rd method

var names = ["Jahid","Alamin","Osman","Shariful","Ibrahim",1001,1002,1003,1004,1005]
    
    console.log(names[1]);
    console.log(names[9]);
    console.log(names);
    console.log(names.length);
    
// Array Push


var names = ["Jahid","Alamin","Osman","Shariful","Ibrahim",1001,1002,1003,1004,1005]

    console.log(names.length);
    names.push("Sohag");

    console.log(names);
    console.log(names.length);
    console.log(names[10]);

    names.push("Ikbal");
    names.push("Rana");

    console.log(names.length);
    console.log(names[11]);
    console.log(names[12]);


// Array Pop


var names = ["Jahid","Alamin","Osman","Shariful","Ibrahim",1001,1002,1003,1004,1005]

    console.log(names.length);
    names.push("Sohag");

    console.log(names);
    console.log(names.length);
    console.log(names[10]);

    names.push("Ikbal");
    names.push("Rana");

    console.log(names.length);
    console.log(names[11]);
    console.log(names[12]);

    names.pop();
    console.log(names.length);
    console.log(names);
    names.pop();
    names.pop();
    console.log(names);
    console.log(names.length);



// Array Concat

var namesLetters = ["Jahid","Alamin","Osman","Shariful","Ibrahim"]

var namesNumerics = [1001,1002,1003,1004,1005]

var names = namesLetters.concat(namesNumerics);
    
    
    console.log(names);
    console.log(names.length);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[9]);
