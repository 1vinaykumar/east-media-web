import { useReducer, useEffect } from "react";
import { initialState, stateContext } from "../src/state/store";
import { setInitialState } from "../src/state/actions";
import { reducer } from "../src/state/reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/customStyles.css";
import "@openfonts/lakki-reddy_telugu/index.css";
import "@openfonts/ramaraja_telugu/index.css";
import Navbar from "../src/components/navs/Navbar";
import Footer from "../src/components/navs/Footer";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localState = localStorage.getItem("eastMediaState");
    if (localState) {
      dispatch(setInitialState(JSON.parse(localState)));
    } else {
      dispatch(setInitialState(initialState));
    }

    window.onbeforeunload = () => {
      localStorage.setItem("eastMediaState", JSON.stringify(state));
      return null;
    };
  }, []);

  useEffect(() => {
    if (state.theme === "light") {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = " #121212";
    } else {
      document.body.style.backgroundColor = " #121212";
      document.body.style.color = "#ffffff";
    }
  }, [state.theme]);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </stateContext.Provider>
  );
}

export default MyApp;
