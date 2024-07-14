import "./App.css";
import Navbar from "./features/nav/Navbar";
import { BrowserRouter } from "react-router-dom";
import Content from "./features/content/Content";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar>
            <Content />
          </Navbar>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
