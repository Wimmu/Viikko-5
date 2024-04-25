import {Link} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';
import {useEffect, useState} from 'react';

export const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
      setUser(userData.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Profile</h2>
      <div>
        {user && (
          <>
            <h2>Welcome, {user.username}!</h2>
            <p>Username: {user.username} </p>
            <p>Email: {user.email} </p>
            <p>User Created: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
          </>
        )}
      </div>
      <p>
        <Link to="/">Navigoi takaisin etusivulle</Link>
      </p>
    </div>
  );
};
