// Task #2: Fetch Tickets Using Async/Await and Handle Errors
const tickets = document.getElementById("tickets"); // Create tickets variable
const errors = document.getElementById("errors"); // Create errors variable
const loading = document.getElementById("loading"); // Create loading variable

async function fetchUnresolvedTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/'); //pulls the data inside this link

        if (!response.ok) {
            throw new Error('Could not fetch tickets at this time.'); //if fetch does not work, it will load this message
        }
        const unresolvedTickets = await response.json(); 
        
        if (unresolvedTickets.length === 0) {
            throw new Error('No unresolved tickets found.') //if there are 0 tickets, this message will appear
        }
        // Task #3: Display Tickets Dynamically on the Page
        errors.textContent = ""; 

        unresolvedTickets.forEach(ticket => {

            const listItem = document.createElement('li'); //creates list item

            const ticketId = document.createElement('div'); //variable to create ticketId from API
            ticketId.textContent = `Ticket ID: ${ticket.id}`;

            const userId = document.createElement('div'); //variable to create userId from API
            userId.textContent = `User ID: ${ticket.userId}`;

            const issueDescription = document.createElement('div'); //variable to create description from API
            issueDescription.textContent = `Issue Description: ${ticket.title}`;

            const details = document.createElement('div'); //variable to create details from API
            details.textContent = `Details: ${ticket.body}`;

            const divider = document.createElement('br'); //adds spacing between diffrent tickets
            divider.textContent = "";


            // Add all of the above variables into a single List item
            listItem.appendChild(ticketId);
            listItem.appendChild(userId);
            listItem.appendChild(issueDescription);
            listItem.appendChild(details);
            listItem.appendChild(divider);
            
            //adds this combined listItem into the tickets list
            tickets.appendChild(listItem);
        });

    } catch (error) { //catches errors and puts them in errors part of page
            errors.textContent = error.message;
            console.error('Error:', error.message);
        }