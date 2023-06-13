import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchString, setsearchString] = useState('');
  const [apiData, setapiData] = useState([]);
  const [apiDataError, setapiDataError] = useState(null);
  const onInputChange = ev => {
    setsearchString(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setapiDataError(null);
       const result = await searchForShows(searchString);
    setapiData(result);
    } catch (error) {
      setapiDataError(error);
    }
   
  };
  const renderApiData = () => {
    if(apiDataError)
    {
      return <div>error occured: {apiDataError.message}</div>
    }
    if(apiData)
      return apiData.map(data => <div key={data.show.id}>{data.show.name}</div>);
    return null
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchString} onChange={onInputChange} />
        <button type="submit">Update the input</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
