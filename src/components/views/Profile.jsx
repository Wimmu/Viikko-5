import {Link} from "react-router-dom";

export const Profile = () => {

  return (
    <div>
      <h2>Welcome to your profile!</h2>
      <p>Here you can see your personal information.</p>
      <p><Link to="/">Back to homepage</Link></p>
    </div>
  );
};
