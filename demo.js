//alert("This is an alert box!");
var x = 56;
document.write("the value is number :", x+"<br />")

var x1 = 55.55;
document.write("the value is floating-point :", x1+"<br />")

var x2 = "Tony";
document.write("the value is string :", x2+"<br />")

var x3 = x + x1
document.write("sum of x and x1 = ", x3+"<br />")

var x4 = (x < x1 )? "x is smaller": "x is larger"
document.write(x4+"<br />")

//for loop
for(var i=0;i<6;i++)
{
    document.write(i+"<br />")
}

//while loop
var j=0
while(j<=12)
{
    document.write(j+"<br />")
    j++;
}

//Do...While Loop
do{
    document.write(j+"<br />")
    j++;
}
while (j<25);


//questions
var k=0;
while(k<6)
{
    k++
}
document.write(k)

//case statements

switch

    (day_of_week) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.write("Working Days");


        break

            ;
    case 6:
        document.write("Saturday");


        break

            ;
    default:
        document.write("Today is Sunday");
        break;
}
