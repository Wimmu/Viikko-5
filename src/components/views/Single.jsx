import {useLocation, useNavigate} from 'react-router-dom';
import SingleView from "../SingleView.jsx";

const Single = () => {
  const location = useLocation()
  const navigate = useNavigate()

  if(!location.state?.item) {
  return null
  }

  const {item} = location.state

  return <SingleView
      selectedItem={item}
      setSelectedItem={()=> navigate(-1)}
    />
}

export default Single;
