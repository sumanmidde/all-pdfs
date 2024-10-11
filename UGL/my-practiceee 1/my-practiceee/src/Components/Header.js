import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import tabledata from './tabledata.json'; 

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const filteredSuggestions = [];
            tabledata.TableData.forEach(item => {
                Object.values(item).forEach(value => {
                    const val = value.toString().toUpperCase();
                    if (val.includes(searchTerm.toUpperCase()) && !filteredSuggestions.includes(val)) {
                        filteredSuggestions.push(val);
                    }
                });
            });
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm('');
        onSearch(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="header-container">
            <h2>Fleet Overview</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <SearchIcon className="search-icon" />
                {suggestions.length > 0 && (
                    <div className="suggestions">
                        {suggestions.map((suggestion) => (
                            <div
                                className="suggestion"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
