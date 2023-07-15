// Часть 1

let clients = [
    {
        firstName: "Александр",
        lastName: "Иванчук",
        date: "11-29-1990",
        phone: "8 (929) 988-90-09",
        amounts: [ 2546, 2098, 764, 7266 ]
    },
    {
        firstName: "Анатолий",
        lastName: "Стаценко",
        date: "02-12-1987",
        phone: null,
        amounts: [ 563, 8287, 889 ]
    },
    {
        firstName: "Марина",
        lastName: "Петрова",
        date: "02-06-1997",
        phone: "8 (899) 546-09-08",
        amounts: [ 6525, 837, 1283, 392 ]
    },
    {
        firstName: "Иван",
        lastName: "Караванов",
        date: "09-12-1999",
        phone: null,
        amounts: [ 7634, 283, 9823, 3902 ]
    },
    {
        firstName: "Оксана",
        lastName: "Абрамова",
        date: "01-24-2002",
        phone: "8 (952) 746-99-22",
        amounts: [ 342, 766, 362 ]
    }
];

/* Задача 1 */

let newClient = {
    amounts: []
};

/* Задача 2, 3, 4 */

function fillClientData( client ) {
    client.firstName = prompt( "Please enter your first name." );
    client.lastName = prompt( "Please enter your last name." );
    client.date = new Date( prompt( "Please enter your birthday in MM.DD.YYYY." ) );
    client.phone = prompt( "Please enter your phone." );

    function confirmation() {
        return confirm( "Should we add purchases for client: " + client.firstName + " " + client.lastName + " ?" );
    };
    while ( confirmation() == true ) {
        client.amounts.push( (parseInt( prompt( "Please enter the amount." ) )) );
    }

    clients.push( client );
}


/* Часть 2 */

/* Задача 1 */

function fullName( clientArr, clientNumber ) {
    return clientArr[clientNumber].firstName + " " + clientArr[clientNumber].lastName;
}

/* Задача 2 */

function getBirthday( birthday, date ) {
    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let bDate = new Date( birthday );
    let bDay = bDate.getDate();
    let bMonth = bDate.getMonth();

    let formatter = new Intl.DateTimeFormat( "ru", {
        month: "long", day: "numeric"
    } );
    if ( currentDay === bDay && currentMonth === bMonth ) {
        return formatter.format( bDate ) + " " + "(cегодня)!";
    }
    else {
        return formatter.format( bDate ) + ".";
    }
}


/* Задача 3 */

function getAllAmount( arr ) {
    return arr.reduce( ( a, b ) => a + b );
};


/*  Задача 4 */

function getAverageAmount( arr ) {
    return arr.reduce( ( a, b ) => a + b ) / arr.length.toFixed( 1 );
}


/* Задача 5; Все временные вызовы функций не удалил, а закомментировал. */

fillClientData( newClient );
console.log( clients );
console.log( "Полное имя клиента: " + fullName( clients, 0 ) );
getBirthday( clients[5].date, new Date() );
console.log( "Сумма всех покупок: " + getAllAmount( clients[5].amounts ) );
console.log( "Средний чек клиента: " + getAverageAmount( clients[4].amounts ) );

/* Задача 6 */

let showClients = ( arr ) => {
    for ( let i = 0; i < arr.length; i++ ) {
        console.log( "Клиент, " + fullName( arr, [ i ] ) + ", имеет среднюю сумму чека: " + getAverageAmount( arr[i].amounts ) + " . День рождения клиента: " + getBirthday( arr[i].date, new Date() ) );
    }
};

/* Задача 7 */
 showClients( clients  );

/* Задача 8 */

try {
    showClients();
} catch ( error ) {
    console.log( "Вызвана функция без параметров." );
}

/* задача 9*/

let bestClients = [
    {
        firstName: "Михаил",
        lastName: "Михеев",
        date: "10-30-1991",
        phone: "8 (929) 988-90-09",
        amounts: [ 254, 209, 76, 726 ]
    },
    {
        firstName: "Александр",
        lastName: "Бонд",
        date: "01-10-1980",
        phone: null,
        amounts: [ 56, 828, 88, 259 ]
    },
    {
        firstName: "Алина",
        lastName: "Макарова",
        date: "03-07-1995",
        phone: "8 (899) 546-09-08",
        amounts: [ 652, 83, 128, 92, 1034, 546 ]
    },
    {
        firstName: "Анна",
        lastName: "Каракай",
        date: "03-02-1969",
        phone: null,
        amounts: [ 734, 28, 923, 390 ]
    },
    {
        firstName: "Ольга",
        lastName: "Нахимова",
        date: "11-25-2006",
        phone: "8 (952) 746-99-22",
        amounts: [ 32, 76, 36, 567 ]
    }
];

showClients( bestClients );


/* Задача 10 */

setTimeout( () => {
    showClients( bestClients );
}, 3000 );

/* Задача 11 */

function whoSpentMore( arr ) {
    let biggestSum = 0;
    let richestClient = "";
    for ( let i = 0; i < arr.length; i++ ) {
        if ( biggestSum < getAllAmount( arr[i].amounts ) ) {
            biggestSum = getAllAmount( arr[i].amounts );
            richestClient = fullName( arr, [ i ] );
        }
    }
    console.log( "Больше всех потратил клиент: " + richestClient + ". Сумма покупок составила " + biggestSum + "." );
}

whoSpentMore( bestClients );

/* Задача 12 */
/* Вроде все работает ;-) */


let myBirthday = new Date( "1989-01-07T04:30:00" );
let currDate = new Date();
let dateP = currDate - myBirthday;
const daysPassed = dateP / 86400000;

// console.log( typeof (dateP) );

console.log( "Со дня моего рождения прошло: " + daysPassed + " дней." );

const formatter1 = new Intl.DateTimeFormat( "iw", {
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jerusalem"
} );

const formatter2 = new Intl.DateTimeFormat( "en-PG", {
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Pacific/Port_Moresby"
} );

const formatter3 = new Intl.DateTimeFormat( "es-AR", {
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Buenos_Aires"
} );

const formatter4 = new Intl.DateTimeFormat( "zh-Hans", {
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Hong_Kong"
} );

console.log( "В Израиле сейчас: " + formatter1.format( currDate ) );

console.log( "В Папуа-Новой Гвинее сейчас: " + formatter2.format( currDate ) );

console.log( "В Аргентине сейчас: " + formatter3.format( currDate ) );

console.log( "В Китае сейчас: " + formatter4.format( currDate ) );


const formatter5 = new Intl.DateTimeFormat( "ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
} );

function dateTimer() {
    console.log( "Точное Московское Время: " + formatter5.format( new Date() ) );

}

setInterval( dateTimer, 5000 );


document.getElementsByTagName( "button" )[0].addEventListener( "click", () => {

    window.location.reload();
    alert("this page was reloaded");
} );