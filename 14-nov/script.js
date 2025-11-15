// JavaScript for Form Functionality

// Get elements
const form = document.getElementById('employeeForm');
const employeeTableBody = document.getElementById('employeeTableBody');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (page reload)
    event.preventDefault();

    // 2. Get values from the form inputs
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const position = document.getElementById('position').value.trim();

    // 3. Simple validation (The 'required' attribute in HTML handles most of it)
    if (!name || !age || !position) {
        return; // Exit if any field is empty
    }

    // 4. Create a new table row (<tr>)
    const newRow = document.createElement('tr');

    // 5. Create and populate table data cells (<td>)
    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const ageCell = document.createElement('td');
    ageCell.textContent = age;

    const positionCell = document.createElement('td');
    positionCell.textContent = position;

    // 6. Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(positionCell);

    // 7. Append the new row to the table body
    employeeTableBody.appendChild(newRow);

    // 8. Clear the form for the next entry
    form.reset();
});