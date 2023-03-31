import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faFile,
  faFilter,
  faGear,
  faSearch,
  faShoppingBag,
  faRightFromBracket,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import './SearchInput.css';
import SearchInput from './SearchInput';
import FilterBy from './FilterBy';
import { logoutUser } from '../../services/userAPIcalls';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../services/authenticationAPIcalls';
import { useQuery } from 'react-query';

const SidebarContent = ({ onToggle, collapsed }) => {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const { data, isError } = useQuery('authenticateUser', authenticateUser, {
    onSuccess: (data) => {
      if (!data.id) {
        return setUserIsLoggedIn(false);
      }
    },
  });
  useEffect(() => {
    authenticateUser();
  }, []);
  const handleLogoutUser = async () => {
    await logoutUser();
    navigate(0);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-btn-container">
        {!collapsed &&
        <h2>
          <a href="/">Orderly</a>
        </h2>
        }
        <button className="sidebarToggleIcon" onClick={onToggle}>
          <FontAwesomeIcon icon={collapsed ? faBars : faTimes} className={`sidebarToggleIcon ${collapsed ? '' : 'expand'}`}/>
        </button>
      </div>
      <ul className="nav-links">
        <NavLink to="/" activeclassname="active">
          <li>
            <FontAwesomeIcon className="fa-sidebar-icon" icon={faFile} />
            {!collapsed && <span>Inventory</span>}
          </li>
        </NavLink>
        <NavLink to="/Orders" activeclassname="active">
          <li>
            <FontAwesomeIcon className="fa-sidebar-icon" icon={faShoppingBag} />
            {!collapsed && <span>Orders</span>}
          </li>
        </NavLink>
        <NavLink to="/Settings" activeclassname="active">
          <li>
            <FontAwesomeIcon className="fa-sidebar-icon" icon={faGear} />
            {!collapsed && <span>Settings</span>}
          </li>
        </NavLink>
        <NavLink to="/Profile" activeclassname="active">
          <li>
            <FontAwesomeIcon className="fa-sidebar-icon" icon={faUser} />
            {!collapsed && <span>Profile</span>}
          </li>
        </NavLink>
        {userIsLoggedIn && (
          <li onClick={() => handleLogoutUser()}>
            <FontAwesomeIcon
              className="fa-sidebar-icon"
              icon={faRightFromBracket}
            />
            {!collapsed && <span>Log out</span>}
          </li>
        )}
      </ul>
      <ul className="filter-search-container">
        <li>
          <FontAwesomeIcon className="fa-sidebar-icon-fs" icon={faSearch} />
          {!collapsed && (
            <span>
              <SearchInput />
            </span>
          )}
        </li>
        <li>
          <FontAwesomeIcon className="fa-sidebar-icon-fs" icon={faFilter} />
          {!collapsed && (
            <span>
              <FilterBy />
            </span>
          )}
        </li>
      </ul>
      <div className="footer-side">
        {!collapsed && (
          <span className="footer-span">
            &copy;Orderly 2023. All Rights Reserved.
          </span>
        )}
      </div>
    </div>
  );
};

export default SidebarContent;
