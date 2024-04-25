import { useUserContext } from "../contexts/UserContext";

const UserData = () => {
  const {user} = useUserContext()

  if(!user) {
    return null;
  }

  return (
    <>
      <h2>Welcome, {user.username}!</h2>
      <p>Username: {user.username} </p>
      <p>Email: {user.email} </p>
      <p>User Created: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
    </>
  )
}

export default UserData
