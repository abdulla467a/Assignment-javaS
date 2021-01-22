//kilometer to meter

function kilometerTOMeter(kilometer){
var meter =kilometer*1000;
if (kilometer<0){
return "Distance ditance can not be Negative";
}
return meter;
}



//budget_calculator

function budgetCalculator(watch,mobile,laptop) 
{
if (watch<0 || mobile<0 || laptop<0) {
    return " can't be negative";
}
    var watch_price =50*watch;
    var mobile_price =100*mobile;
    var laptop_price =500*laptop;

    var total =watch_price+mobile_price+laptop_price;
    return total;

}




//hotel_cost
function hotelCost(stay){
var first_shift=0;
var second_shift=0;
var third_shift=0;
var total =0;

 if (stay<=0){
    return "staying day's can't be zero or negative"
}

for( var i=1; i<=stay; i++)
{
if(i>=1 && i<=10 ){
    first_shift =i*100;
}
else if (i>=11 && i<=20){
    second_shift =i*80;
}
else if (i>=21){
    third_shift=i*50;
}
}
total= first_shift+second_shift+third_shift;
return total;
}