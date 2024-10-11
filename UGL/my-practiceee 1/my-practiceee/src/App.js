import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Cardcontainer from './Components/Cardcontainer';
import Livetracking from './Components/Livetracking';
import Table from './Components/Table';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import TicketSummary from './Components/TicketSummary';
import DetailsSidebar from './Components/DetailsSodebar';
import TrainDetail from './Components/TrainDetail';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('default');
  const [activeIcon, setActiveIcon] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setActiveView('details');
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    if (icon === 'commute') {
      setActiveView('commute');
    } else if (icon === 'tram') {
      setActiveView('details');
    }
  };

  return (
    <div className="app">
      <Sidebar onIconClick={handleIconClick} activeIcon={activeIcon} />
      <DetailsSidebar />
      <TicketSummary />
      <div className="main-content">
        <Navbar />
        {activeView === 'details' ? (
          <TrainDetail row={selectedRow} />
        ) : (
          <>
            <Header onSearch={handleSearch} />
            <Cardcontainer setSelectedCard={setSelectedCard} />
            <Livetracking selectedCard={selectedCard} />
            <Table onRowClick={handleRowClick} searchTerm={searchTerm} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
