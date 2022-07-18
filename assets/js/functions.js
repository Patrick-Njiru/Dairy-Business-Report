/* A function to take inputs from form and provide a report on
 amount of milk from ech shed and total amount */
document.getElementById("submit").onclick= function milkProduced(mp){
    let shed = ({
        shedA:document.getElementById("shed1"),    // to collect data from each shed with its respective id attribute
        shedB:document.getElementById("shed2"),
        shedC:document.getElementById("shed3"),
        shedD:document.getElementById("shed4"),
    })

    let totalLitres= (Number(shed1.value)+Number(shed2.value)+Number(shed3.value)+Number(shed4.value)); // total amount of milk per day
    // use function Number() to convert strings collected from form to number data types.

    document.getElementById("output1").value = "shed 1 has produced " + shed1.value + " litres of milk"; // output in html under daily report
    document.getElementById("output2").value = "shed 2 has produced " + shed2.value + " litres of milk";
    document.getElementById("output3").value = "shed 3 has produced " + shed3.value + " litres of milk";
    document.getElementById("output4").value = "shed 4 has produced " + shed4.value + " litres of milk";
    document.getElementById("summation").value =  "The total amount of milk from all the sheds is " + totalLitres + " litres";

    // Second function to use the variables of the first function to calculate income
    document.getElementById("income").onclick = function incomeGenerated(ig){

        const pricePerLitre = 45; // create new variables to make the code below easier to understand
        const year=365;
        const biweekly=14;
        const leapyear=366;

        document.getElementById("biweekly").value = "The income generated biweekly from this production is sh."+ pricePerLitre*biweekly*totalLitres;
        document.getElementById("yearly").value = "The income generated yearly from this production is sh."+ pricePerLitre*year*totalLitres + " or sh." + pricePerLitre*leapyear*totalLitres + " for a leap year.";

    };

    document.getElementById("months").onclick = function monthlyincome(mi){
        const months = { // create an object
            january : 31,
            february : 29,
            march : 31,
            april : 30,
            may : 31,
            june : 30,
            july : 31,
            august : 31,
            september : 30,
            october : 31,
            november : 30,
            december : 31
        }
        const pricePerLitre = 45; 

        // Access object values-number of days for each month, and use them in the calculating monthly income
        document.getElementById("jan").innerHTML= "Sh." + totalLitres*months.january*pricePerLitre;
        document.getElementById("feb").innerHTML= "Sh." + totalLitres*months.february*pricePerLitre;
        document.getElementById("mar").innerHTML= "Sh." + totalLitres*months.march*pricePerLitre;
        document.getElementById("apr").innerHTML= "Sh." + totalLitres*months.april*pricePerLitre;
        document.getElementById("may").innerHTML= "Sh." + totalLitres*months.may*pricePerLitre;
        document.getElementById("jun").innerHTML= "Sh." + totalLitres*months.june*pricePerLitre;
        document.getElementById("jul").innerHTML= "Sh." + totalLitres*months.july*pricePerLitre;
        document.getElementById("aug").innerHTML= "Sh." + totalLitres*months.august*pricePerLitre;
        document.getElementById("sep").innerHTML= "Sh." + totalLitres*months.september*pricePerLitre;
        document.getElementById("oct").innerHTML= "Sh." + totalLitres*months.october*pricePerLitre;
        document.getElementById("nov").innerHTML= "Sh." + totalLitres*months.november*pricePerLitre;
        document.getElementById("dec").innerHTML= "Sh." + totalLitres*months.december*pricePerLitre;

    
    }
}