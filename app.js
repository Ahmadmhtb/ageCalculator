const months = [31,28,31,30,31,30,31,31,30,31,30,31];

const ageCalculate = (params) => {
    let todayDate = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthYear, birthMonth, birthDate;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth()+1;
    let currentDate = todayDate.getDate();


    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate  && birthDetails.month == currentMonth &&  birthDetails.year == currentYear)    
        )  {
            alert("Not born yet");
            displayResult("-","-","-")
            return;
    }


    birthYear = currentYear - birthDetails.year;
    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
        // console.log(birthMonth)
    }else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month; 
    }
    if (currentDate >= birthDetails.date ) {
        birthDate = currentDate - birthDetails.date;
        // console.log(birthDate);
    }else{
        birthMonth--;
        let days = months[currentMonth - 2];
        console.log(days)
        birthDate = days + currentDate - birthDetails.date;
        // if(birthMonth < 0){
        //     birthMonth = 11;
        //     birthYear--;
        // }
    }
    displayResult(birthDate, birthMonth, birthYear)
    // console.log(birthYear)
}

const displayResult = (bDate,bMonth,bYear) => {
    document.getElementById("years").innerHTML = bYear;
    document.getElementById("months").innerHTML = bMonth;
    document.getElementById("days").innerHTML = bDate;
}