import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #000;
  font-size: 12px;
  width: 100%;
  margin-top: 100px;
  bottom: 0px;
  position: absolute;
  height: 200px;
  font-weight: 200;
  color: #fff;
  li {
    list-style: none;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="desc">
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
