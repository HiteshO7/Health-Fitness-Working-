// src/component/Header.jsx
import React, { useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "./AuthContextProvider";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/programs",
    display: "Programs",
  },
  {
    path: "/membership",
    display: "Membership",
  },
  {
    path: "/track",
    display: "Track your fitness",
  },
  {
    path: "/bmi",
    display: "BMI",
  },
  {
    path: "/water-intake",
    display: "Water Intake",
  },
  {
    path: "/workout-sessions",
    display: "Workout Sessions",
  },
];

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { filter, setFilter } = useContext(AuthContext);

  const isUserLoggedIn = () => {
    if (isAuthenticated) {
      verifyUser();
    }
  };

  const verifyUser = () => {
    fetch(`https://healthandfitness.onrender.com/data`)
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data.filter((el) => el.user === user.name);
        setFilter(filteredData);
        if (filteredData.length < 1) {
          let obj = {
            id: Math.floor(Math.random() * 100),
            user: user.name,
            userdata: [],
          };
          fetch(`https://healthandfitness.onrender.com/data`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          });
          setFilter([obj]);
        }
      });
  };

  const headerRef = useRef(null);
  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  useEffect(() => {
    isUserLoggedIn();
  }, [isAuthenticated]);

  const handleLogOut = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogIn = () => {
    loginWithRedirect();
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="logo" />
            </div>
            <h2>FitForza</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <NavLink
                  className="nav__item"
                  key={item.path}
                  to={item.path}
                  activeClassName="active"
                >
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            {isAuthenticated && (
              <p className="nav__item user__name"> Hitesh </p>
            )}
            {isAuthenticated ? (
              <button className="register__btn" onClick={handleLogOut}>
                Log Out
              </button>
            ) : (
              <button className="register__btn" onClick={handleLogIn}>
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
