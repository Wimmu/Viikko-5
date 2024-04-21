import { Link } from "react-router-dom"

export const Profile = () => {

  return <div>
    <h2 className="text-2xl font-bold">This is my profile page.</h2>

    <p>
      <Link to="/">Back to home</Link>
    </p>
  </div>
}
