import { useParams } from 'react-router-dom';
//use param is a hook used to get dynamic parameters from the url
const Show = () => {
  const { showId } = useParams();

  return <div>Show page for show {showId}</div>;
};

export default Show;