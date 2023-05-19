import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Làm gì đó với searchQuery
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="absolute top-0 left-0 flex items-center justify-center w-10 h-full text-gray-400"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {isSearching && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {/* Hiển thị các kết quả tìm kiếm ở đây */}
        </div>
      )}
    </div>
  );
};

export default SearchBox;