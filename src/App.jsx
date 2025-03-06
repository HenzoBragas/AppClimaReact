import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import Background from "./assets/background.jpg";
import "./App.css";

function App() {

  return (
    <>
      <div className="containerMain" style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={Background}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            borderRadius: "25px"
          }}
        />
        <SearchBar />
        <WeatherInfo />
      </div>
    </>
  );
}

export default App;
