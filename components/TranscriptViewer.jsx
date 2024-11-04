import React, { useState } from "react";

const TranscriptViewer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [transcript, setTranscript] = useState(
    "This is a sample meeting transcript. You can search for words within this transcript, and each occurrence will be highlighted for easy reference."
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Helper function to highlight search term in transcript
  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span
          key={index}
          className="bg-yellow-300 cursor-pointer"
          onClick={() => alert(`Selected: ${part}`)}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-lg shadow-md w-3/4 mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-4">Transcript Viewer</h2>

      <input
        type="text"
        placeholder="Search for a term..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <div className="bg-gray-100 p-4 w-full h-64 overflow-y-auto border border-gray-300 rounded">
        {getHighlightedText(transcript, searchTerm)}
      </div>
    </div>
  );
};

export default TranscriptViewer;
