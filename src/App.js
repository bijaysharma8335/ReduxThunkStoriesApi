import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Stories from "./components/stories";
import "./App.css";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Stories />
        </Provider>
    );
}

export default App;
