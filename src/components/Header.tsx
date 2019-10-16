import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import useToggle from '../hooks/useToggle'
import useTopics from '../hooks/markdown/useTopics'

import Favicon from '../svg/favicon.svg'

import styles from './Header.module.scss'

const Header = () => {
  const [isOpen, toggleIsOpen] = useToggle()

  const topics = useTopics()

  return (
    <header>
      <Navbar dark expand="md" className={styles.wrapper}>
        <Container>
          <Link className="navbar-brand" to="/">
            <Favicon
              style={{ height: '23px', width: '23px', marginRight: '10px' }}
            />
            eCollaboration
          </Link>
          <NavbarToggler onClick={toggleIsOpen} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Topics
                </DropdownToggle>
                <DropdownMenu right>
                  {topics.map(topic => {
                    const {
                      id,
                      fields: { slug },
                      frontmatter: { title },
                    } = topic

                    return (
                      <Link
                        key={id}
                        to={slug}
                        style={{
                          textAlign: 'left',
                          color: '#212529',
                          textDecoration: 'none',
                        }}
                        onClick={toggleIsOpen}
                      >
                        <DropdownItem>{title}</DropdownItem>
                      </Link>
                    )
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/danlutz/MCI_eCollaboration_WS2019"
                >
                  GitHub
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
