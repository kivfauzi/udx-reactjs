import './App.css';
// import Account from './Pages/Account';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Account from './Pages/Account';
import Orders from './Pages/Orders';
import Home from './Pages/Home';


import Profile from './Components/Account/Profile';
import Feedback from './Components/Account/Feedback';
import About from './Components/Account/About';
import SavedAddress from './Components/Account/SavedAddress';
import EditAddress from './Components/Account/EditAddress';
import CreateAddress from './Components/Account/CreateAddress'

function App() {
  return (
    <div className="App">
      {/* <Account /> */}
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          {/* <Routes > */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/address" element={<SavedAddress />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about" element={<About />} />
                <Route path="/address/edit" element={<EditAddress />} />
                <Route path="/address/create" element={<CreateAddress />} />
            {/* </Routes> */}
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
