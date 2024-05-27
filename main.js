document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('data-table');
    
    // Load saved data from Local Storage
    loadSavedData();

    // Add event listener to save data when input changes
    table.addEventListener('input', function(event) {
        const cell = event.target;
        saveData(cell.parentElement.rowIndex, cell.cellIndex, cell.textContent);
    });

    function saveData(row, column, value) {
        const key = `cell_${row}_${column}`;
        localStorage.setItem(key, value);
    }

    function loadData(row, column) {
        const key = `cell_${row}_${column}`;
        return localStorage.getItem(key);
    }

    function loadSavedData() {
        for (let row = 0; row < table.rows.length; row++) {
            for (let col = 0; col < table.rows[row].cells.length; col++) {
                const value = loadData(row, col);
                if (value !== null) {
                    table.rows[row].cells[col].textContent = value;
                }
            }
        }
    }
});
