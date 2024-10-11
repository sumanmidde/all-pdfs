import React, { useState, useEffect } from 'react';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import tabledata from './tabledata.json';

const Table = ({ onRowClick, searchTerm }) => {
    const [sorting, setSorting] = useState({ key: null, direction: 'asc' });
    const [sortedData, setSortedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const initialData = Array.isArray(tabledata?.TableData) ? tabledata.TableData : [];
        setSortedData(initialData);
        setFilteredData(initialData);
    }, []);

    useEffect(() => {
        if (searchTerm && typeof searchTerm === 'string') {
            const term = searchTerm.toUpperCase();
            const filtered = sortedData.filter(row =>
                Object.values(row).some(val => val.toString().toUpperCase().includes(term))
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(sortedData);
        }
    }, [searchTerm, sortedData]);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sorting.key === key && sorting.direction === 'asc') {
            direction = 'desc';
        }

        const sortedRows = [...sortedData];
        for (let i = 0; i < sortedRows.length - 1; i++) {
          for (let j = 0; j < sortedRows.length - 1 - i; j++) {
            if (direction === 'asc') {
              if (sortedRows[j][key] > sortedRows[j + 1][key]) {
                const temp = sortedRows[j];
                sortedRows[j] = sortedRows[j + 1];
                sortedRows[j + 1] = temp;
              }
            } else {
              if (sortedRows[j][key] < sortedRows[j + 1][key]) {
                const temp = sortedRows[j];
                sortedRows[j] = sortedRows[j + 1];
                sortedRows[j + 1] = temp;
              }
            }
          }
        }
        setSorting({ key, direction });
        setSortedData(sortedRows);
    };

    const renderConstraints = (constraints) => {
        if (constraints === '-') {
            return '-';
        }
        return constraints.split(', ').map((constraint, index) => (
            <span key={index} className="constraint-box">{constraint}</span>
        ));
    };

    const renderAlarmSource = (alarmSource) => {
        if (alarmSource === '-') {
            return '-';
        }
        return alarmSource.split('|').map((source, index) => (
            <span key={index} className="alarm-source">{source}</span>
        ));
    };

    const getIconColor = (trainNumber) => {
        return trainNumber === '-' ? "#D433FF" : "#0277BD";
    };

    const trainNewSvg = (iconColor) => (
        <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.875 25C46.875 37.0812 37.0812 46.875 25 46.875C12.9188 46.875 3.125 37.0812 3.125 25C3.125 12.9188 12.9188 3.125 25 3.125C37.0812 3.125 46.875 12.9188 46.875 25Z" stroke={iconColor} strokeWidth="3"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M34.3333 31.5867V20.3334C34.3333 16.6134 30.8533 15.8 26.32 15.68L27.3333 13.6667H31.6666V11.6667H18.3333V13.6667H24.6666L23.6533 15.6934C19.48 15.8134 15.6666 16.64 15.6666 20.3334V31.5867C15.6666 33.52 17.2533 35.1334 19.12 35.5467L17 37.6667V38.3334H19.9733L22.64 35.6667H27.6666L30.3333 38.3334H33V37.6667L31 35.6667H30.8933C33.1466 35.6667 34.3333 33.84 34.3333 31.5867ZM25 33.6667C23.8933 33.6667 23 32.7734 23 31.6667C23 30.56 23.8933 29.6667 25 29.6667C26.1066 29.6667 27 30.56 27 31.6667C27 32.7734 26.1066 33.6667 25 33.6667ZM18.3333 27.6667H31.6666V21H18.3333V27.6667Z" fill={iconColor}/>
        </svg>
    );

    const handleRowClick = (row) => {
        onRowClick(row);
    };

    return (
        <div className="table-container">
            <div className="table-body">
                <table>
                    <thead className="table-header">
                        <tr>
                            <th></th>
                            <th onClick={() => handleSort('trainNumber')}>
                                <span>Train Number</span>
                                {sorting.key === 'trainNumber' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb' }} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('unitNumber')}>
                                <span>Unit Number</span>
                                {sorting.key === 'unitNumber' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle' , color:'#61dafb'}} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('alarmSource')}>
                                <span>Alarm Source</span>
                                {sorting.key === 'alarmSource' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb' }} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('mode')}>
                                <span>Mode</span>
                                {sorting.key === 'mode' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb'}} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('routineService')}>
                                <span>Routine Service</span>
                                {sorting.key === 'routineService' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb' }} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('standingAlarm')}>
                                <span>Standing Alarm</span>
                                {sorting.key === 'standingAlarm' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb' }} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('nextStation')}>
                                <span>Next Station</span>
                                {sorting.key === 'nextStation' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb'}} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('constraints')}>
                                <span>Constraints</span>
                                {sorting.key === 'constraints' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb' }} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                            <th onClick={() => handleSort('lastCommunication')}>
                                <span>Last Communication</span>
                                {sorting.key === 'lastCommunication' && sorting.direction === 'asc' ? (
                                    <ArrowDropUpIcon style={{ verticalAlign: 'middle', color:'#61dafb' }} />
                                ) : (
                                    <ArrowDropDownIcon style={{ verticalAlign: 'middle', color:'#63666A' }} />
                                )}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index} onClick={() => handleRowClick(row)}>
                                <td>
                                    {trainNewSvg(getIconColor(row.trainNumber))}
                                </td>
                                <td>{row.trainNumber}</td>
                                <td>{row.unitNumber}</td>
                                <td>{renderAlarmSource(row.alarmSource)}</td>
                                <td>{row.mode}</td>
                                <td>{row.routineService}</td>
                                <td>{row.standingAlarm}</td>
                                <td>{row.nextStation}</td>
                                <td>{renderConstraints(row.constraints)}</td>
                                <td>
                                <CloudDoneIcon style={{ color: 'green', marginBottom: '-7px', padding: '2px' }} />

                                    {row.lastCommunication}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
