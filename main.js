document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('data-table');

    // Hàm để lưu dữ liệu vào Local Storage
    function saveData() {
        const rows = table.rows;
        let data = [];

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].cells;
            let rowData = [];
            for (let j = 0; j < cells.length; j++) {
                rowData.push(cells[j].textContent);
            }
            data.push(rowData);
        }

        localStorage.setItem('tableData', JSON.stringify(data));
    }

    // Hàm để tải dữ liệu từ Local Storage
    function loadData() {
        const data = JSON.parse(localStorage.getItem('tableData'));

        if (data) {
            for (let i = 0; i < data.length; i++) {
                const row = table.rows[i];
                const rowData = data[i];
                for (let j = 0; j < rowData.length; j++) {
                    row.cells[j].textContent = rowData[j];
                }
            }
        }
    }

    // Lưu dữ liệu mỗi khi có thay đổi
    table.addEventListener('input', saveData);

    // Tải dữ liệu khi trang được tải
    loadData();
});
