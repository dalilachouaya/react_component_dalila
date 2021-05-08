import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Footer from "./Component/Profile/Footer";
import Navbars from "./Component/Profile/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbars/>
        <br/>
      </header>
      <body>
        <ProfilePhoto />
        <hr /><br/>
        <FullName /> 
      </body>
      <footer>
      <Address />
        <Footer />
      </footer>
    </div>
  );
}

export default App;

