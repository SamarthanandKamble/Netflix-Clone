import Body from "./components/Body";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./utils/Redux/appStore";
function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
