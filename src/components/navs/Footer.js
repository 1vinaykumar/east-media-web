import { useEffect, useState, useContext } from "react";
import { stateContext } from "../../state/store";
import { changeTheme } from "../../state/actions";

function Footer() {
  const [date, setDate] = useState(new Date());
  const { state, dispatch } = useContext(stateContext);
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <>
      <footer className="fixed-bottom bg-dark text-light">
        <div className="py-1"></div>
        <div className="row justify-content-center">
          <h6 className="text-center col-9">
            {`${date.toDateString()}, `}
            <small>{date.toLocaleTimeString()}</small>
          </h6>
          <div className="form-check form-switch col-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="switch"
              checked={state.theme === "dark"}
              onChange={handleChangeTheme}
            />
            <label
              className="form-check-label text-light d-none d-sm-block"
              htmlFor="switch"
            >
              Dark Theme
            </label>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
