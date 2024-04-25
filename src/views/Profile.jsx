import { Link } from 'react-router-dom';
import UserData from '../components/UserData';

export const Profile = () => (
  <div>
    <h2 className="text-2xl font-bold">Profile</h2>
    <div>
      <UserData/>
    </div>
    <p>
      <Link to="/">Back to home</Link>
    </p>
  </div>
);
