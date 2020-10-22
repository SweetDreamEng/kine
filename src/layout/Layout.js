import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { _NAVIGATIONS } from '../routes/navigations'
import Logo from '../assets/images/logo-blue.svg'

import './layout.styles.scss'

/**
 * @description create a full layout for the main application.
 * @observe this layout is only used when user is logged in.
 */
const Layout = ({ location, children }) => {
  const found = _NAVIGATIONS

  const [apps, setApps] = useState([])

  useEffect(() => {
    if (!found) {
      setApps([])
      return;
    }
    setApps(found)
  }, [found])

  return (
    <div className="main-layout">
      <div className="main-layout__sidebar">
        <div className="main-layout__logo-container">
          <img className="main-layout__logo" src={Logo} alt="Kinelite Logo" />
          <p className="main-layout__logo-text">Admin Console</p>
        </div>
        <div className="main-layout__links">
          {apps.map((link, key) => {
            const ItemIcon = link.icon ? link.icon : null;
            const isActive = location.pathname
              .toLowerCase()
              .startsWith(link.path.toLowerCase());
            return (
              <div
                key={key}
                className={`main-layout__link ${isActive ? 'active' : ''}`}
              >
                <Link to={link.path} data-title={link.name}>
                  {ItemIcon ? (
                    <ItemIcon
                      height="30"
                      width="30"
                      fill={`${isActive ? '#2a4faf' : '#b8b7b5'}`}
                    />
                  ) : null}
                  <span>{link.name}</span>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="main-layout__sidebar-footer">
          <p>
            Powered by <b>Soltivo</b>
          </p>
        </div>
      </div>
      <div className="main-layout__content">{children}</div>
    </div>
  )
}

export default withRouter(Layout)
