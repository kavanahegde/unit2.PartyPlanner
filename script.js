document.addEventListener("DOMContentLoaded", function () {
    const partyList = document.getElementById("party-list");
    const partyForm = document.getElementById("party-form");
  
    // Initialize an array to store party data
    const parties = [];
  
    // Function to add a new party to the list
    function addPartyToList(party) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${party.name}</span>
        <span>${party.date}</span>
        <span>${party.time}</span>
        <span>${party.location}</span>
        <span>${party.description}</span>
        <button class="delete">Delete</button>
      `;
  
      // Add click event to delete button
      listItem.querySelector(".delete").addEventListener("click", () => {
        const index = parties.indexOf(party);
        if (index > -1) {
          parties.splice(index, 1);
          listItem.remove();
        }
      });
  
      partyList.appendChild(listItem);
    }
  
    // Function to handle form submission
    partyForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("party-name").value;
      const date = document.getElementById("party-date").value;
      const time = document.getElementById("party-time").value;
      const location = document.getElementById("party-location").value;
      const description = document.getElementById("party-description").value;
  
      const party = { name, date, time, location, description };
      parties.push(party);
      addPartyToList(party);
  
      // Clear the form fields
      partyForm.reset();
    });
  });
  