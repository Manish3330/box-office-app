import { Link } from 'react-router-dom';
const Links = [
  { text: 'Home', To: '/' },
  { text: 'Starred', To: '/Starred' },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {Links.map(Item => (
          <li key={Item.To}>
            <Link to={Item.To}>{Item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;
