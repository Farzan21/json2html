export default function json2html(data) {
    // Start building the HTML string for the table
    let html = '<table data-user="skfarzansuper@gmail.com">';
    
    // Add the table header
    html += '<thead><tr>';
    html += '<th>Name</th>';
    html += '<th>Age</th>';
    html += '<th>Gender</th>'; // Include Gender header
    html += '</tr></thead>';
    
    // Add the table body
    html += '<tbody>';
    
    // Iterate over each object in the array
    data.forEach(item => {
        html += '<tr>';
        html += `<td>${item.Name}</td>`;
        html += `<td>${item.Age}</td>`;
        html += `<td>${item.Gender || ''}</td>`; // Use empty string if Gender is not present
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    
    return html; // Return the complete HTML string
}