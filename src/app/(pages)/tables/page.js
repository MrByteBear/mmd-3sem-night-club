"use client";

import { useState } from "react";
import Tables from "@/app/components/(Meleese)/Tables";
import BookingForm from "@/app/components/(Meleese)/BookingForm";
import SubHeader from "@/app/components/(Meleese)/SubHeader";


const TABLES = [ 
  { id: 1, type: 1 },
  { id: 2, type: 1 },
  { id: 3, type: 2 },
  { id: 4, type: 1 },
  { id: 5, type: 3 },
  { id: 6, type: 1 },
  { id: 7, type: 1 },
  { id: 8, type: 2 },
  { id: 9, type: 1 },
  { id: 10, type: 3 },
  { id: 11, type: 1 },
  { id: 12, type: 1 },
  { id: 13, type: 3 },
  { id: 14, type: 1 },
  { id: 15, type: 1 },
];


export default function TablesPage() {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <main>
    <SubHeader title="Book Table" />
      <section className="py-16 space-y-10">
        <Tables
          tables={TABLES}
          selectedTable={selectedTable}
          onSelect={setSelectedTable}
        />
        <BookingForm selectedTable={selectedTable} />
      </section>
    </main>
  );
}
