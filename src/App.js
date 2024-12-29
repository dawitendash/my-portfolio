//in this page the recommend way is to use one componet to create
import './App.css';
import Footer from './footerContent/Footer';
import NavBar from "./headerNavbar/NavBar";
function App() {
  return (
    <div className="bg-success p-2 text-dark bg-opacity-10" >
      <NavBar />
      <Footer />
    </div>
  );
}
export default App;
