import logo from "./logo.svg";
import "./App.css";
import { loginRequest } from "./redux/actions";
import { connect } from "react-redux";

function App(props) {
  const login = () => {
    props.loginRequest({ username: "oguzkaan", password: "112" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={login}>redux</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  loginRequest: (body) => dispatch(loginRequest(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
