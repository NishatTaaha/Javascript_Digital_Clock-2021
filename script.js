
function digitalClock()
{

    // time counting strts

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var am_pm = document.getElementById('am-pm');

    hours = lessTime(hours);
    minutes = lessTime(minutes);
    seconds = lessTime(seconds);

    if (hours >= 12)
    {
        am_pm.innerHTML = 'PM';
    }
    else
    {
        am_pm.innerHTML = 'AM';
    }

    if (hours > 12)
    {
        hours = hours - 12;
    }

    function lessTime(i)
    {
        if (i < 10)
        {
            i = '0' + i
        }
        return i;
    };

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // time counting ends



    // day counting starts
    var day = date.getDate();
    if (day < 10)
    {
        day = '0' + day;
    }
    var month = (date.getMonth());
    switch (month)
    {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }
    if (month < 10)
    {
        month = '0' + month;
    }



    var year = (date.getFullYear());
    // var n= date.getDay();
    // var week= new Array(7);

    // week[0]= "Sunday";
    // week[1]= "Monday";
    // week[2]= "Tuesday";
    // week[3]= "Wednesday";
    // week[4]= "Thursday";
    // week[5]= "Friday";
    // week[6]= "Saturday";

    // var thisWeek= week[n];

    var thisWeek = date.getDay();
    switch (thisWeek)
    {
        case 0:
            thisWeek = 'Sunday';
            break;
        case 1:
            thisWeek = 'Monday';
            break;
        case 2:
            thisWeek = 'Tuesday';
            break;
        case 3:
            thisWeek = 'Wednesday';
            break;
        case 4:
            thisWeek = 'Thursday';
            break;
        case 5:
            thisWeek = 'Friday';
            break;
        case 6:
            thisWeek = 'Saturday';
            break;
        default:
            break;
    }

    document.getElementById('day').innerHTML = day+'\xa0\xa0\xa0';
    document.getElementById('month').innerHTML = month+'\xa0\xa0\xa0';
    document.getElementById('year').innerHTML = year+'\xa0\xa0\xa0';
    document.getElementById('week').innerHTML = thisWeek+'\xa0\xa0\xa0';

    // day counting ends
}
setInterval(digitalClock, 1000);
