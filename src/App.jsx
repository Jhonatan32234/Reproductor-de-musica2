import Home from "./pages/Home"
import {HelmetProvider} from "react-helmet-async"


function App() {
  
  return <HelmetProvider>
    <Home></Home>
    </HelmetProvider>
}
export default App
