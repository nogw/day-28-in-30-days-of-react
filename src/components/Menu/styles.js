import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.3);
  width: 300px;
  transform: scale(1);
  background-color: #242526;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  transition: all 500ms ease;

  a {
    color: #dadce1;
    text-decoration: none;
  }

  .menu {
    width: 100%;
  }

  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }


  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-secondary-exit {

  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  transition: background 500ms ease;
  padding: 10px;
  cursor: pointer;

  .rightIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #484a4d;
    height: 30px;
    width: 30px;
    margin: 5px;
  }

  .leftIcon {
    display: flex;
    align-items: center;
    margin: 5px;
    margin-left: auto;
  }

  &:hover {
    background-color: #525357;
  }
`;

