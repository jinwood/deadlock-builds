"use client";

import React from "react";

export default function BuildNotes({
  notes,
  setNotes,
}: {
  notes: any;
  setNotes: any;
}) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Build Notes</h2>
      <textarea
        className="w-full h-32 p-2 border rounded"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add your build notes here..."
      />
    </div>
  );
}
