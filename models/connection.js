const { DateTime } = require("luxon");
const { v4: uuidv4 } = require('uuid');
const connections = [{
        id: '1',
        name: 'Learn to Solve the Cube: Beginners Course',
        catagory: 'Learning/Practice',
        details: 'Any beginners are welcome to come learn the first, most basic method to get started learning how to solve the cube. Come get started along your path to becoming a cuber!',
        date: DateTime.local(2022, 2, 12, 13, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 12, 13, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 12, 20, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'Willstew',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '2',
        name: 'Learn F2L the Easy Way: Intermediate Course',
        catagory: 'Learning/Practice',
        details: 'For intermediate cubers seeking to improve their times, and turn corner and edge insertion into one fluent process. Come meet and learn f2l, one of the biggest ways to speed up your times and score new records!',
        date: DateTime.local(2022, 2, 13, 13, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 13, 13, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 13, 18, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'Willstew',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '3',
        name: 'Practicing Oll and Pll Alogrithms: Group Practice',
        catagory: 'Learning/Practice',
        details: 'All cubers in the process of learning OLL and PLL, or cubers who are just looking to hang out and practice, there will be a practice session for OLL and PLL algorithms I am hosing at my house on this day.',
        date: DateTime.local(2022, 2, 14, 14, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 14, 14, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 14, 18, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'JonNichols',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '4',
        name: 'Megaminx Speedsolving Competition',
        catagory: 'Competitions',
        details: 'WCA sanctioned Megaminx speedsolving competition. Bring your megaminx and shoot for a new record whether it be a world record or a personal record! Remember, mexaminxes with raised corners for grip are against the rules as they provide an unfair advantage. Stickerless, black, and white megaminx colors are allowed. Good luck!',
        date: DateTime.local(2022, 2, 15, 12, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 15, 12, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 15, 20, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'Willstew',
        image: '../images/megaminx.jpg',
        location: 'Tyvola Senior Center'
    },
    {
        id: '5',
        name: 'Blindfolded 3x3 Speedsolving Competition',
        catagory: 'Competitions',
        details: 'WCA sacntioned blindfolded speedsolving competition. 3x3 cubes only.',
        date: DateTime.local(2022, 2, 16, 12, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 16, 12, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 16, 20, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'WCA',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '6',
        name: 'Square-1 Ao5 Competition',
        catagory: 'Competitions',
        details: 'WCA sanctioned Average of 5 Square-1 competition.',
        date: DateTime.local(2022, 2, 17, 12, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 17, 12, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 17, 20, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'WCA',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '7',
        name: 'Cubers Night Out: Escape Room Night',
        catagory: 'Social Gatherings',
        details: 'Members of charlotte cubers club, come hang out and spend night out at an escape room!',
        date: DateTime.local(2022, 2, 18, 20, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 18, 20, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 18, 0, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'Willstew',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '8',
        name: 'Cuber Gathering: Party at my place!',
        catagory: 'Social Gatherings',
        details: 'Celebrating nothing in particular, lets party!',
        date: DateTime.local(2022, 2, 19, 16, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 19, 16, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 19, 23, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'JonNichols',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },
    {
        id: '9',
        name: 'Charlotte Cubing Club Dinner Event at Midwood Smokehouse',
        catagory: 'Social Gatherings',
        details: 'Hosting a dinner at Midwood Smokehouse, all cubers club members welcome.',
        date: DateTime.local(2022, 2, 20, 18, 0).toLocaleString(DateTime.DATE_SHORT),
        start_time: DateTime.local(2022, 2, 20, 18, 0).toLocaleString(DateTime.TIME_SIMPLE),
        end_time: DateTime.local(2022, 2, 20, 20, 0).toLocaleString(DateTime.TIME_SIMPLE),
        host_name: 'KevinRick',
        image: '../images/placehold.jpg',
        location: 'To be Determined'
    },

];

exports.find = function() {
    return connections;
}

exports.findByID = function(id) {
    return connections.find(connection => connection.id === id);
}

exports.save = function(connection) {
    connection.id = uuidv4();
    connections.push(connection);
}

exports.updateById = function(id, newconnection) {
    let connection = connections.find(connection => connection.id === id);
    if (connection) {
        connection.name = newconnection.name;
        connection.details = newconnection.details;
        connection.location = newconnection.location;
        connection.image = newconnection.image;
        connection.date = newconnection.date;
        connection.start_time = newconnection.start_time;
        connection.end_time = newconnection.end_time;
        connection.catagory = newconnection.catagory;
        return true
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = connections.findIndex(connection => connection.id === id);
    if (index !== -1) {
        connections.splice(index, 1);
        return true;
    } else {
        return false;
    }
}