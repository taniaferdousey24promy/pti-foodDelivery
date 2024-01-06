import { FaArrowRight, FaSearchengin } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

const Navigation = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg bg-transparent
"
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="#">
            pti.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* <li className="nav-item"> */}
              <form
                style={{ width: "400px" }}
                className="d-flex  "
                role="search"
              >
                {/* <button style={{borderStyle:"none" , }} type="submit">
              <FaSearchengin />

            </button> */}
                <input
                  className="form-control me-2 ms-0"
                  type="search"
                  placeholder="Search Audiobook"
                  aria-label="Search"
                />
              </form>

             
              {/* </li> */}

              <li
                style={{ width: "150px", height: "37px" }}
                className="nav-item dropdown bg-white rounded"
              >
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MENU
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Details{" "}
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Category{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Favorites
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Login/SignUp
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav me-0 mb-2 mb-lg-0">
              {/* <button ><FaRegUser  className="  fs-4  " /></button> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <LuUser
                    style={{ backgroundColor: "#FF4500" }}
                    className="   p-1 fs-2 rounded-circle text-white "
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
