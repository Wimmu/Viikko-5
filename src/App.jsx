import './App.css';
import Home from './components/views/Home.jsx';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Profile} from "./components/views/Profile.jsx";
import Upload from "./components/Upload.jsx";
import Layout from "./components/views/Layout.jsx";
import Single from "./components/views/Single.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/media/:id" element={<Single />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
