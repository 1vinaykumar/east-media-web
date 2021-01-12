import { useContext } from "react";
import Link from "next/link";
import { stateContext } from "../../state/store";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top bg-dark">
        <div className="container-fluid">
          <div className="mx-auto mx-sm-3">
            <Link className="navbar-brand" href="/">
              <a>
                <Image
                  src="/images/logo.jpg"
                  alt="East Media"
                  height="40px"
                  width="160px"
                />
              </a>
            </Link>
          </div>

          <div className="mx-auto mx-lg-0">
            <ul className="nav mt-1 mt-sm-0 me-lg-3">
              <li className="nav-item mx-md-3">
                <Link href="/">
                  <a className="nav-link text-center h6 text-secondary fw-bolder">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-md-3">
                <Link href="/news">
                  <a className="nav-link text-center h6 text-secondary fw-bolder">
                    News
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-md-3">
                <Link href="/about">
                  <a className="nav-link text-center h6 text-secondary fw-bolder">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-5 my-3 my-sm-0"></div>
    </>
  );
}

export default Navbar;
