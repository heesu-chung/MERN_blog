import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #aaa;
  display: flex;
  align-items: center;
  height: 50px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 800px) {
    height: 40px;
  }
  @media (max-width: 500px) {
    height: 30px;
    font-size: 0.5rem;
    font-weight: 400;
  }

  .header-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    font-weight: 200;
    .logo-menu,
    .interaction,
    .likes,
    .msg {
      display: flex;
      flex-direction: row;
    }

    .logo-menu {
      gap: 5px;
    }

    .num {
      padding: 0 2px;
      margin-right: 2px;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="header-wrap">
        <div className="logo-menu">
          <div className="menu-bar">-</div>
          <div className="logo">Logo</div>
        </div>
        <div className="interaction">
          <div className="likes">
            likes
            <div className="likes-number num">20</div>
          </div>
          <div className="msg">
            msg
            <div className="msg num">10</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
