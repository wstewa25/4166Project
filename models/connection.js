const { v4: uuidv4 } = require('uuid');

//Connections objects for testing, default connections.
const connections = [{
        id: '1',
        name: 'Learn to Solve the Cube: Beginners Course',
        catagory: 'Learning/Practice',
        details: 'Any beginners are welcome to come learn the first, most basic method to get started learning how to solve the cube. Come get started along your path to becoming a cuber!',
        date: '2022-12-12',
        start_time: '13:00',
        end_time: '20:00',
        host_name: 'Willstew',
        image: 'https://th.bing.com/th/id/OIP.VOgtrmCX7CK9pXdu4iKTwwHaHt?w=196&h=205&c=7&r=0&o=5&pid=1.7',
        location: 'To be Determined'
    },
    {
        id: '2',
        name: 'Learn F2L the Easy Way: Intermediate Course',
        catagory: 'Learning/Practice',
        details: 'For intermediate cubers seeking to improve their times, and turn corner and edge insertion into one fluent process. Come meet and learn f2l, one of the biggest ways to speed up your times and score new records!',
        date: '2022-12-13',
        start_time: '13:00',
        end_time: '18:00',
        host_name: 'Willstew',
        image: 'https://www.cubeskills.com/uploads/images/tutorials/useful-f2l-algorithms.png',
        location: 'To be Determined'
    },
    {
        id: '3',
        name: 'Practicing Oll and Pll Alogrithms: Group Practice',
        catagory: 'Learning/Practice',
        details: 'All cubers in the process of learning OLL and PLL, or cubers who are just looking to hang out and practice, there will be a practice session for OLL and PLL algorithms I am hosing at my house on this day.',
        date: '2022-12-14',
        start_time: '14:00',
        end_time: '18:00',
        host_name: 'JonNichols',
        image: 'https://i.ytimg.com/vi/T3AYk8_ZeA8/maxresdefault.jpg',
        location: 'To be Determined'
    },
    {
        id: '4',
        name: 'Megaminx Speedsolving Competition',
        catagory: 'Competitions',
        details: 'WCA sanctioned Megaminx speedsolving competition. Bring your megaminx and shoot for a new record whether it be a world record or a personal record! Remember, mexaminxes with raised corners for grip are against the rules as they provide an unfair advantage. Stickerless, black, and white megaminx colors are allowed. Good luck!',
        date: '2022-12-15',
        start_time: '12:00',
        end_time: '20:00',
        host_name: 'Willstew',
        image: '../images/megaminx.jpg',
        location: 'Tyvola Senior Center'
    },
    {
        id: '5',
        name: 'Blindfolded 3x3 Speedsolving Competition',
        catagory: 'Competitions',
        details: 'WCA sacntioned blindfolded speedsolving competition. 3x3 cubes only.',
        date: '2022-12-16',
        start_time: '12:00',
        end_time: '20:00',
        host_name: 'WCA',
        image: 'https://th.bing.com/th/id/OIP.Yu0JzS1IczpWW-0Hob2b0wHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7',
        location: 'To be Determined'
    },
    {
        id: '6',
        name: 'Square-1 Ao5 Competition',
        catagory: 'Competitions',
        details: 'WCA sanctioned Average of 5 Square-1 competition.',
        date: '2022-12-17',
        start_time: '12:00',
        end_time: '20:00',
        host_name: 'WCA',
        image: 'https://cinoto.com.br/cubomagico/wp-content/uploads/2020/02/square-1-1.jpg',
        location: 'To be Determined'
    },
    {
        id: '7',
        name: 'Cubers Night Out: Escape Room Night',
        catagory: 'Social Gatherings',
        details: 'Members of charlotte cubers club, come hang out and spend night out at an escape room!',
        date: '2022-12-18',
        start_time: '20:00',
        end_time: '0:00',
        host_name: 'Willstew',
        image: 'https://th.bing.com/th/id/OIP.X3aIxfhX8TPwEnArijuAnwHaD4?pid=ImgDet&rs=1',
        location: 'To be Determined'
    },
    {
        id: '8',
        name: 'Cuber Gathering: Party at my place!',
        catagory: 'Social Gatherings',
        details: 'Celebrating nothing in particular, lets party!',
        date: '2022-12-19',
        start_time: '16:00',
        end_time: '23:00',
        host_name: 'JonNichols',
        image: 'https://i.pinimg.com/736x/a4/71/db/a471db4eea8fddf20247b91821350e82--rubix-cube-party-rubiks-cube-cake.jpg',
        location: 'To be Determined'
    },
    {
        id: '9',
        name: 'Charlotte Cubing Club Dinner Event at Midwood Smokehouse',
        catagory: 'Social Gatherings',
        details: 'Hosting a dinner at Midwood Smokehouse, all cubers club members welcome.',
        date: '2022-12-20',
        start_time: '18:00',
        end_time: '20:00',
        host_name: 'KevinRick',
        image: 'https://th.bing.com/th/id/OIP.gIrNB3rIzyV-v0Fsdk8xcwHaEc?pid=ImgDet&rs=1',
        location: 'To be Determined'
    },

];

//Find a specific connection
exports.find = function() {
    return connections;
}

//Find a connection using its id
exports.findByID = function(id) {
    return connections.find(connection => connection.id === id);
}

//Save a connection to the connections array after generating an id using uuidv4
exports.save = function(connection) {
    connection.id = uuidv4();
    connections.push(connection);
}

//Update all of the values of a connection after the update button is pressed from the edit page
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

//Delete a connection by using its id to find and delete it
exports.deleteById = function(id) {
    let index = connections.findIndex(connection => connection.id === id);
    if (index !== -1) {
        connections.splice(index, 1);
        return true;
    } else {
        return false;
    }
}