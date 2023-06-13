import { useState } from 'react';
// import { Link } from 'react-router-dom';
const Home = () => {
  const [searchString, setsearchString] = useState('');

  const onInputChange = ev => {
    setsearchString(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchString}`
    );
    const body = await response.json();
    console.log(body);
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchString} onChange={onInputChange} />
        <button type="submit">Update the input</button>
      </form>
    </div>
  );
};
export default Home;
