"use client";

import { useState } from "react";
import Tables from "@/app/components/(meleese)/Tables";
import BookingForm from "@/app/components/(penny)/BookingReactForm";
// import BookingForm from "@/app/components/(Meleese)/BookingForm";

import SubHeader from "@/app/components/(meleese)/SubHeader";
import HeaderNav from "@/app/components/(Bjorn)/header-elem/HeaderNav";

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
    <div>
      <HeaderNav />
      <main>
        <SubHeader title="Book Table" />
        <section>
          <Tables
            tables={TABLES}
            selectedTable={selectedTable}
            onSelect={setSelectedTable}
          />
          <BookingForm
            selectedTable={selectedTable}
            onTableReset={() => setSelectedTable(null)}
          />
        </section>
      </main>
      {/* <FooterBox /> */}
    </div>
  );
}
