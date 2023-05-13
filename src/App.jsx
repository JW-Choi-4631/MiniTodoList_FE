import "./App.css";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 1200,
          maxHeight: 800,
          margin: "auto",
          marginTop: 20,
          marginBottom: 20,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h1
          style={{
            fontSize: 50,
          }}
        >
          MyToDoList
        </h1>
      </header>
      <Router />
    </>
  );
}

export default App;
