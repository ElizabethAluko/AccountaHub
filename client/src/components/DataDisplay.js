// client/src/components/DataDisplay.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchDataAsync() {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        // Handle error
      }
    }

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
