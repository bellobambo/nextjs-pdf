"use client"

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    const [tableData, setTableData] = useState([
         ['Bambo', 'World', '07066279211'],
        ['Rachel', 'Los Angeles', '7845521'],
        ['Harvey', 'Chicago', '9865371'],
    ]);

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
