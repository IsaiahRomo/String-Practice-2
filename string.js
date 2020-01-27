var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");

// finds the largest number out of the value entered
function largest(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var largest = first;

    if(first === largest){
        output.innerHTML = " The first number is the largest.";
    }
    if (largest < second){
        largest = second;
        output.innerHTML = " The second number is the largest.";
    }
    if (largest < third){
        largest = third;
        output.innerHTML = " The third number is the largest.";
    } 
    if (largest < fourth){
        largest = fourth;
        output.innerHTML = " The fourth number is the largest.";
    }
    if (largest < fifth){
        largest = fifth;
        output.innerHTML = " The fifth number is the largest.";
    }
    if (largest < sixth){
        largest = sixth;
        output.innerHTML = " The sixth number is the largest.";
    }
    return largest;
}
// finds the smallest value entered
function smallest(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var smallest = first;
    
    if(first === smallest){
        output.innerHTML = " The first number is the smallest.";
    }
    if (smallest > second){
        smallest = second;
        output.innerHTML = " The second number is the smallest.";
    }
    if (smallest > third){
        smallest = third;
        output.innerHTML = " The third number is the smallest.";
    } 
    if (smallest > fourth){
        smallest = fourth;
        output.innerHTML = " The fourth number is the smallest.";
    }
    if (smallest > fifth){
        smallest = fifth;
        output.innerHTML = " The fifth number is the smallest.";
    }
    if (smallest > sixth){
        smallest = sixth;
        output.innerHTML = " The sixth number is the smallest.";
    }
    return smallest;
}
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var mean = (first + second + third + fourth + fifth + sixth) / 6;
    output.innerHTML = " The Mean is " + mean;
}

function range(){
    var range =  largest() - smallest();
    output.innerHTML = " The Range is " + range;
}


function mid(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, sixth)
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fifth){
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth)
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fifth){
        fifth = sixth;
    }

    o3 = Math.min(first, second, third, fourth)
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fifth){
        fifth = sixth;
    }

    o4 = Math.min(first, second, third)
    if(o4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fifth){
        fifth = sixth;
    }

    output.innerHTML = o3 + " and " + o4 + " are the middle numbers " + (o3 + o4) / 2 + " is the median";
}

function mode(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var m1 = 1;
    var m2 = 1;
    var m3 = 1;
    var m4 = 1;
    var m5 = 1;
    var m6 = 1;

    if(first === second){
        m1 ++;
    }
    if(first === third){
        m1 ++;
    }
    if(first === fourth){
        m1 ++;
    }
    if(first === fifth){
        m1 ++;
    }
    if(first === sixth){
        m1 ++;
    }
    if(second === third){
        m2 ++;
    }
    if(second === fourth){
        m2 ++;
    }
    if(second === fifth){
        m2 ++;
    }
    if(second === sixth){
        m2 ++;
    }
    if(third === fourth){
        m3 ++;
    }
    if(third === fifth){
        m3 ++;
    }
    if(third === sixth){
        m3 ++;
    }
    if(fourth === fifth){
        m4 ++;
    }
    if(fourth === sixth){
        m4 ++;
    }
    if(fifth === sixth){
        m5 ++;
    }

    var max = Math.max(m1, m2, m3, m4, m5, m6)

    if(m1 === 1 && m2 === 1 && m3 === 1 && m4 === 1 && m5 === 1 && m6 === 1){
        output.innerHTML += "there is no mode"
    }
    if(max === m1){
        output.innerHTML += " " + first + " is the mode and it appears " + m1 + " times. ";
    }
    else if(max === m2){
        output.innerHTML += " " + second + " is the mode and it appears " + m2 + " times. ";
    }
    else if(max === m3){
        output.innerHTML += " " + third + " is the mode and it appears " + m3 + " times. ";
    }
    else if(max === m4){
        output.innerHTML += " " + fourth + " is the mode and it appears " + m4 + " times. ";
    }
    else if(max === m5){
        output.innerHTML += " " + fifth + " is the mode and it appears " + m5 + " times. ";
    }
}

function unique(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var m1 = 1;
    var m2 = 1;
    var m3 = 1;
    var m4 = 1;
    var m5 = 1;
    var m6 = 1;

    if(first === second){
        m1 ++;
    }
    if(first === third){
        m1 ++;
    }
    if(first === fourth){
        m1 ++;
    }
    if(first === fifth){
        m1 ++;
    }
    if(first === sixth){
        m1 ++;
    }
    if(second === third){
        m2 ++;
    }
    if(second === fourth){
        m2 ++;
    }
    if(second === fifth){
        m2 ++;
    }
    if(second === sixth){
        m2 ++;
    }
    if(third === fourth){
        m3 ++;
    }
    if(third === fifth){
        m3 ++;
    }
    if(third === sixth){
        m3 ++;
    }
    if(fourth === fifth){
        m4 ++;
    }
    if(fourth === sixth){
        m4 ++;
    }
    if(fifth === sixth){
        m5 ++;
    }

    if(m1 === 1 && m2 === 1 && m3 === 1 && m4 === 1 && m5 === 1 && m6 === 1){
        output.innerHTML += "there is no dups"
    }
    if(m1 !== 1){
        output.innerHTML += " " + first + " is a dup and it appears " + m1 + " times. ";
    }
    if(m2 !== 1 && second !== first){
        output.innerHTML += " " + second + " is a dup and it appears " + m2 + " times. ";
    }
    if(m3 !== 1 && third !== second && third !== first){
        output.innerHTML += " " + third + " is a dup and it appears " + m3 + " times. ";
    }
    if(m4 !== 1 && fourth !== third && fourth !== second && fourth !== first){
        output.innerHTML += " " + fourth + " is a dup and it appears " + m4 + " times. ";
    }
    if(m5 !== 1 && fifth !== fourth && fifth !== third && fifth !== second && fifth !== first){
        output.innerHTML += " " + fifth + " is a dup and it appears " + m5 + " times. ";
    }
    if(m6 !== 1 && sixth !== fifth && sixth !== fourth && sixth !== third && sixth !== second && sixth !== first){
        output.innerHTML += " " + sixth + " is a dup and it appears " + m6 + " times. ";
    }
}

function Dupe(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    
    var m1 = 1;
    var m2 = 1;
    var m3 = 1;
    var m4 = 1;
    var m5 = 1;
    var m6 = 1;

    if(first === second){
        m1 ++;
    }
    if(first === third){
        m1 ++;
    }
    if(first === fourth){
        m1 ++;
    }
    if(first === fifth){
        m1 ++;
    }
    if(first === sixth){
        m1 ++;
    }
    if(second === third){
        m2 ++;
    }
    if(second === fourth){
        m2 ++;
    }
    if(second === fifth){
        m2 ++;
    }
    if(second === sixth){
        m2 ++;
    }
    if(third === fourth){
        m3 ++;
    }
    if(third === fifth){
        m3 ++;
    }
    if(third === sixth){
        m3 ++;
    }
    if(fourth === fifth){
        m4 ++;
    }
    if(fourth === sixth){
        m4 ++;
    }
    if(fifth === sixth){
        m5 ++;
    }

    if(m1 === 1 && m2 === 1 && m3 === 1 && m4 === 1 && m5 === 1 && m6 === 1){
        output.innerHTML += "there is no dups"
    }
    if(m1 !== 1){
        output.innerHTML += " " + first + " is a dup and it appears " + m1 + " times. ";
    }
    if(m2 !== 1 && second !== first){
        output.innerHTML += " " + second + " is a dup and it appears " + m2 + " times. ";
    }
    if(m3 !== 1 && third !== second && third !== first){
        output.innerHTML += " " + third + " is a dup and it appears " + m3 + " times. ";
    }
    if(m4 !== 1 && fourth !== third && fourth !== second && fourth !== first){
        output.innerHTML += " " + fourth + " is a dup and it appears " + m4 + " times. ";
    }
    if(m5 !== 1 && fifth !== fourth && fifth !== third && fifth !== second && fifth !== first){
        output.innerHTML += " " + fifth + " is a dup and it appears " + m5 + " times. ";
    }
    if(m6 !== 1 && sixth !== fifth && sixth !== fourth && sixth !== third && sixth !== second && sixth !== first){
        output.innerHTML += " " + sixth + " is a dup and it appears " + m6 + " times. ";
    }
}
function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, sixth)
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fifth){
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth)
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fifth){
        fifth = sixth;
    }

    o3 = Math.min(first, second, third, fourth)
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fifth){
        fifth = sixth;
    }

    o4 = Math.min(first, second, third)
    if(o4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fifth){
        fifth = sixth;
    }

    o5 = Math.min(first, second)
    if(o5 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === fifth){
        fifth = sixth;
    }

    o6 = Math.min(first)
    if(o6 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === fifth){
        fifth = sixth;
    }

    var order = output.innerHTML = o1 +" "+ o2 +" "+ o3 +" "+ o4 +" "+ o5 +" "+ o6;
    return order;
}