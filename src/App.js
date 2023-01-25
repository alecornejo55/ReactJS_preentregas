import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeflex/primeflex.css";                                  //core css
import "primeicons/primeicons.css";                                //icons
import { NavBar, ItemListContainer } from "./components";
 
function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido a la tienda!" />
    </>
  );
}

export default App;
