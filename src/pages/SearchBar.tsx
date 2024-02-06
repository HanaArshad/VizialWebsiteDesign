// SearchBar.tsx
import React, { useState } from "react";
import styles from "./SearchBar.module.css"; // Import your CSS styles if needed

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.container}>
        <div className={styles.Spacer}>
          <input
            className={styles.sInput}
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
