import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import tv from '../../images/TV.svg'
import Settings from '../../images/Settings.svg'

const Nav = styled.nav`
height: 48px;
width: 100%;
display: flex;
background-color: #393939;
justify-content: space-between;
align-items: center;
`

const Brand = styled.img`
width: 48px;
height: 48px;
margin-left: 10px;
`

const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`

const Img = styled.img`
display: flex;
align-items: center;
`

const Menu = styled.ul`

  display: flex;
  align-items: center;
  font-family: 'Ubuntu';
  padding: 0;

  & > li {
    margin-left: 20px;
  }

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 400ms ease-in;
  }
`

const Links = styled.li`
  list-style: none;
  color: whitesmoke;
  font-weight: 600;
  font-size: 14px;

  &:first-child {
  cursor: pointer;
}

  &:first-child a {
  color: whitesmoke;
  text-decoration: none;
}

  &:last-child {
  margin-right: 15px;
  }

  &:nth-child(2)::after {
  content: '';
  border-left: 2px solid #00b7ff;
}
`

export default function Header() {
  const [ isOpen, setOpen ] = React.useState(false)
  const ref = React.useRef(null)

  const accordeon = (toggled) => {
    if (toggled) setOpen(!isOpen)
    setOpen(!isOpen)
  }

  return (
    <header>
      <Nav>
        <Link to='/'>
          <Brand src={tv} alt='home' />
        </Link>
        <Container>
          <CSSTransition in={isOpen} classNames='fade' timeout={500} unmountOnExit nodeRef={ref}>
            <Menu ref={ref}>
              <Link to='settings'><Img alt='settings' src={Settings} /></Link>
              <Links />
              <Links>EN</Links>
              <Links>UA</Links>
            </Menu>
          </CSSTransition>
          <Hamburger
            onToggle={accordeon}
            rounded
            distance='md'
            color='#00b7ff'
            size={20}
            toggled={isOpen}
            toggle={setOpen}
          />
        </Container>
      </Nav>
    </header>
  )
}