import styled from 'styled-components';
import Icon from '../UI-Components/Icon';

export default function Navbar() {
  return (
    <NavBox>
      <NavbarTitle>
        <DevDAOIcon/>
        <Span>DevDAO Job Board</Span>
      </NavbarTitle>
      <MainMenu>
        <Navs
          href='/jobs'
        >
          Job List
        </Navs>

        <Navs
          href='/developers'
        >
          Developers
        </Navs>

        <Navs
          href='/post-job'
        >
          Post a Job
        </Navs>
      </MainMenu>
    </NavBox>
  )
};

const NavBox = styled.nav`
  display: flex;
  background-color: #F7FAFC;
  justify-content: space-between;
  text-align: center;
  z-index: 1;
  width: 100%;
  height: 10%;
  border-bottom: solid 2px #E2E8F0;
  opacity: 0.8;
  overflow: hidden;
`;

const DevDAOIcon = styled(Icon)`
  border-radius: 180px;
`;

const Span = styled.span`
  display: inline;
  width: 100px;
  height: 30px;
  position: absolute;
  bottom: 2px;
`;

const NavbarTitle = styled.h1`
  position: relative;
  display: block;
  float: left;
  font-size: 0.875rem;
  color: #4A5568;
`;

const Navs = styled.a`
  color: black;
  padding: 0.45rem;
  margin: 0 0.25rem;
  cursor: pointer;
  float: left;
  text-decoration: none;
  border-radius: 18px;

  &:focus {
    background-color: lightgray;
    color: black;
  }

  &:hover {
    color: gray;
  }
`;

const MainMenu = styled.div`
  align-items: center;
  text-align: center;
`;

const Hamburgermenu = styled.div`
  display: inline-block;
  align-items: right;
  text-align: right;
  float: right;
`;