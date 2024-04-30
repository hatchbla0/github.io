// Function to fetch records by age category
function getRecordsByAgeCategory(ageCategory) {
    // Define records for each age category
    let records = [];
    switch (ageCategory) {
        case '10_under':
            records = [
                { event: '10 & under - 50 Free', holder: '10_example', time: '0:00.00' },
                { event: '10 & under - 50 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 50 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 50 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 100 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 100 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 100 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 100 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 100 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 200 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 200 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '10 & under - 500 Free', holder: 'Example Name', time: '0:00.00' }
            ];
            break;
        case '13_14':
            records = [
                { event: '13 & 14 - 50 Free', holder: '13_example', time: '0:00.00' },
                { event: '13 & 14 - 50 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 50 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 50 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 100 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 100 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 100 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 100 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 100 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 200 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 200 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '13 & 14 - 500 Free', holder: 'Example Name', time: '0:00.00' }
            ];
            break;
        case '15_16':
            records = [
                { event: '15 & 16 - 50 Free', holder: '15_example', time: '0:00.00' },
                { event: '15 & 16 - 50 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 50 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 50 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 100 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 100 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 100 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 100 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 100 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 200 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 200 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '15 & 16 - 500 Free', holder: 'Example Name', time: '0:00.00' }
            ];
            break;
        case '17_18':
            records = [
                { event: '17 & 18 - 50 Free', holder: '17_example', time: '0:00.00' },
                { event: '17 & 18 - 50 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 50 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 50 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 100 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 100 Back', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 100 Breast', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 100 Fly', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 100 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 200 Free', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 200 IM', holder: 'Example Name', time: '0:00.00' },
                { event: '17 & 18 - 500 Free', holder: 'Example Name', time: '0:00.00' }
            ];
            break;
        default:
            break;
    }
    return records;
}

// Function to display records in the HTML table
function showRecords(ageCategory) {
    // Clear previous records
    let recordsBody = document.getElementById('records-body');
    recordsBody.innerHTML = '';

    // Fetch records for the selected age category
    let records = getRecordsByAgeCategory(ageCategory);

    // Display records in the table
    records.forEach(record => {
        let row = `<tr>
                        <td>${record.event}</td>
                        <td>${record.holder}</td>
                        <td>${record.time}</td>
                  </tr>`;
        recordsBody.innerHTML += row;
    });
}
