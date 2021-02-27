import React, { useState } from 'react';
import { Container, MenuItem } from './styles';
import { FaCog, FaChevronRight, FaUserAlt, FaChevronLeft, FaFileContract, FaInfo, FaDatabase } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'

function Menu() {
  const [MenuNow, setMenuNow] = useState('main')
  const [MenuHeight, setMenuHeight] = useState(null)
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    setMenuHeight(menuRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <Container style={{ height: MenuHeight }} ref={menuRef}>
      <CSSTransition 
        in={MenuNow === 'main'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
        onEnter={calcHeight}
        >
          <div className="menu">
              <MenuItem>
                <span className="rightIcon"><FaUserAlt/></span>
                Profile
              </MenuItem>
              <MenuItem onClick={() => setMenuNow('settings')}>
                <span className="rightIcon"><FaCog/></span>
                Settings
                <span className="leftIcon"><FaChevronRight/></span>
              </MenuItem>
          </div>
      </CSSTransition>
      <CSSTransition 
        in={MenuNow === 'settings'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
        onEnter={calcHeight}
        >
          <div className="menu">
              <MenuItem onClick={() => setMenuNow('main')}>
                <span className="rightIcon"><FaChevronLeft/></span>
                Return
              </MenuItem>
              <MenuItem>
                <span className="rightIcon"><FaInfo/></span>
                  My informations
              </MenuItem>
              <MenuItem>
                <span className="rightIcon"><FaDatabase/></span>
                  My data
              </MenuItem>
              <MenuItem>
                <span className="rightIcon"><FaFileContract/></span>
                  Contract
              </MenuItem>
          </div>
      </CSSTransition>
    </Container>
  );
}

export default Menu;