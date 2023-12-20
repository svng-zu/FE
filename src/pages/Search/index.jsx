import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function Search(props) {
  const [search, setSearch] = useState('');
  const [vods, setVods] = useState([]);

  const debounceValue = useDebounce(search, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hello00back.net/search/?Searchword=${debounceValue}`);
        if (response.status === 200) {
          setVods(response);
          console.log(response);
          console.log(debounceValue);
        }
      } catch (error) {
        // Handle errors here
        console.error('There has been a problem with your axios operation:', error);
      }
    };
    
    if (debounceValue) {
      fetchData();
    }
  }, [debounceValue]);
  console.log(debounceValue);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} />
      {/* Render your vods here */}
    </div>
  );
}

export default Search;


