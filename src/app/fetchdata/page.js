"use client"


import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import styles from './page.module.css';

export default function Home() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                //use any data
                const processedData = data.map(user => [user.name, user.address.city, user.phone]);
                setTableData(processedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function demo() {
        var obj = new jsPDF('landscape');
        obj.setFontSize(18);
        obj.text('Sample Table Report', 20, 20);
        obj.setFontSize(12);
        obj.autoTable({
            startX: 30,
            startY: 40,
            head: [['Name', 'City', 'Phone No.']],
            body: tableData,
        });
        obj.save('example.pdf');
    }

    return (
        <div>
            <div className={styles.buttonContainer}>
                <button className={styles.customButton} onClick={demo}>
                    Download PDF
                </button>
            </div>
            <div className={styles.tableContainer}>
                <h2>Preview Table</h2>
                <table className={styles.previewTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}