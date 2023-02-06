
// Часть 1

let clients = [ {
    firstName: "Александр",
    lastName: "Иванчук",
    date: "11-29-1990",
    phone: "8 (929) 988-90-09",
    amounts: [ 2546, 2098, 764, 7266 ]
}, {
    firstName: "Анатолий", lastName: "Стаценко", date: "02-12-1987", phone: null, amounts: [ 563, 8287, 889 ]
}, {
    firstName: "Марина",
    lastName: "Петрова",
    date: "02-06-1997",
    phone: "8 (899) 546-09-08",
    amounts: [ 6525, 837, 1283, 392 ]
}, {
    firstName: "Иван", lastName: "Караванов", date: "09-12-1999", phone: null, amounts: [ 7634, 283, 9823, 3902 ]
}, {
    firstName: "Оксана",
    lastName: "Абрамова",
    date: "01-24-2002",
    phone: "8 (952) 746-99-22",
    amounts: [ 342, 766, 362 ]
} ];

let newClient = {
};


function fillClientData( client ) {
    client.firstName = prompt( "Please enter your first name." );
    client.lastName = prompt( "Please enter your last name." );
    client.date = new Date( prompt( "Please enter your birthday in MM.DD.YYYY." ) );
    client.phone = prompt( "Please enter your phone." );
    let amounts = [];
    client.amounts = amounts;

    function confirmation() {
        return confirm( "Should we add purchases for client: " + client.firstName + " " + client.lastName + " ?" );
    };
    while ( confirmation() == true ) {
        amounts.push( (parseInt( prompt( "Please enter the amount." ) )) );
    }

    clients.push( client );
}

// fillClientData( newClient );
//
// console.log( clients );

/* Часть 2 */

/* Задача 1 */

function fullName( clientArr, clientNumber ) {
    return clientArr[clientNumber].firstName + " " + clientArr[clientNumber].lastName;
}

// console.log( "Полное имя клиента: " + fullName( clients, 5 ) );

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
        console.log( "Ваш день рождения " + formatter.format( bDate ) + " " + "(Сегодня)!" );
    }
    else {
        console.log( "Ваш день рождения " + formatter.format( bDate ) + " (не сегодня)." );
    }
}

// getBirthday( clients[5].date, new Date() );

/* Задача 3 */

function getAllAmount( arr ) {
    return arr.reduce( ( a, b ) => a + b );
};

// console.log( "Сумма всех покупок: " + getAllAmount( clients[5].amounts ) );

/*  Задача 4 */

function getAverageAmount( arr ) {
    let average = arr.reduce( ( a, b ) => a + b ) / arr.length;
    return average.toFixed( 1 );
}

// console.log( "Средний чек клиента: " + getAverageAmount( clients[0].amounts ) );