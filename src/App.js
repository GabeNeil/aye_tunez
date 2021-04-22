import "./App.css";
import ChartContainer from "./containers/ChartContainer.js";
import logo from "./components/logo.png";

function App() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="{{ url_for('src', filename='logo.png') }}"
        ></link>
      </head>
      <body>
        <div className="App">
          <header id="header">
            <img id="logo" src={logo} alt="logo" width="100" height="80" />
            <h1 id="tag">Get Yer Tunez Here</h1>
          </header>
          <ChartContainer />
        </div>
      </body>
    </>
  );
}

export default App;
