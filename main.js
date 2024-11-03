// Task #2: Fetch Tickets Using Async/Await and Handle Errors
const tickets = document.getElementById("tickets"); // Create tickets variable
const errors = document.getElementById("errors"); // Create errors variable
const loading = document.getElementById("loading"); // Create loading variable

async function fetchUnresolvedTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/'); //pulls the data inside this link

        if (!response.ok) {
            throw new Error('Could not fetch tickets at this time.'); //if fetch does not work, it will load this pop-up message
        }
        const unresolvedTickets = await response.json(); //transforms the data into JSON formatting for our use

        if (unresolvedTickets.length === 0) {
            throw new Error('No unresolved tickets found.') //if there are 0 tickets, this message will appear
        }