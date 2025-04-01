import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar.jsx';
import Home from './components/Home.jsx';
function App() {
  return (
    <main>
      <CustomNavbar tema="dark"/>
      <Home/>
    </main>
  );
}

export default App
