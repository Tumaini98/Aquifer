import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ColorSchemesExample from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeaderVideo from "./pages/landing/headervideo/HeaderVideo";
function App() {
  return (
    <React.Fragment>
      <ColorSchemesExample></ColorSchemesExample>
      <HeaderVideo />
      <h1>"Hello World"</h1>;
      <Footer />
    </React.Fragment>
  );
}
export default App;
