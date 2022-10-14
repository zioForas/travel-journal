import "./App.css";
import NavBar from "./components/NavBar";
import Trip from "./components/Trip";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Trip key={item.id} {...item} />;
  });

  return (
    <>
      <NavBar />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;