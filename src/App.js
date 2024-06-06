import classes from "./App.module.css";
import Nav from "./components/navbar/Nav";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={classes.app}>
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
