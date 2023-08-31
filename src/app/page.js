"use client"


import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    function demo() {
        var obj = new jsPDF('landscape');

        // Add title heading
        obj.setFontSize(18);
        obj.text('Sample Table Report', 20, 20);

        // Create the table
        obj.setFontSize(12);
        obj.autoTable({
            startX: 30,
            startY: 40, // Adjust startY to make space for the title
            head: [['Name', 'City', 'Phone No.']],
            body: [
                ['Bambo', 'World', '07066279211'],
                ['Rachel', 'Los Angeles', '7845521'],
                ['Harvey', 'Chicago', '9865371'],
            ],
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
        </div>
    );
}
