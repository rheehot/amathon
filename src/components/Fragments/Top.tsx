import { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import LogoImage from '~/assets/top-logo.svg'
import NavAmathonImage from '~/assets/top-nav-amathon.svg'
import NavAusgImage from '~/assets/top-nav-ausg.svg'
import NavAwskrugImage from '~/assets/top-nav-awskrug.svg'
import styled, { css, media } from '~/styled'
import Button from '../System/Button'
import Section from '../System/Section'

export default function Top() {
  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = () => {
    if (window.scrollY < 150) {
      setIsScrolled(false)

    } else if (!isScrolled) {
      setIsScrolled(true)

    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Fixed isScrolled={isScrolled}>
      <Section padding={isScrolled ? '.75rem 1rem' : '1.5rem'}>
        <Container>
          <AnchorLink href='#hero'>
            <Logo src={LogoImage} />
          </AnchorLink>
          <Space />
          <Nav>
            <Scrollspy
              items={['amathon', 'awskrug', 'ausg']}
              currentClassName='is-current'
            >
              <AnchorLink href='#amathon' offset='56'>
                <NavItemContainer>
                  <NavAmathon src={NavAmathonImage} />
                </NavItemContainer>
              </AnchorLink>
              <AnchorLink href='#awskrug' offset='56'>
                <NavItemContainer>
                  <NavAwskrug src={NavAwskrugImage} />
                </NavItemContainer>
              </AnchorLink>
              <AnchorLink href='#ausg' offset='56'>
                <NavItemContainer>
                  <NavAusg src={NavAusgImage} />
                </NavItemContainer>
              </AnchorLink>
            </Scrollspy>
          </Nav>
          <Button
            icon={['fas', 'rocket']}
            label='참가 신청하기'
            href='https://forms.gle/SQWyoTfRBhULggRx8'
          />
        </Container>
      </Section>
    </Fixed>
  )
}

interface IFixedProps {
  isScrolled?: boolean
}
const Fixed = styled.div<IFixedProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color .3s, box-shadow .3s;

  ${(props) => props.isScrolled && css`
    background-color: #212529;
    box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .1);
  `}
`

const Container = styled.div`
  align-items: center;
  display: flex;
`

const Logo = styled.img`
  width: 9rem;
  height: 1.6875rem;
  cursor: pointer;
`

const Space = styled.div`
  flex: 1;
`

const NavItemContainer = styled.span`
  cursor: pointer;
  padding: .5rem;
  margin-right: .75rem;
  opacity: .5;
  transition: opacity .2s;
  text-decoration: none;

  &:hover {
    opacity: .7;
  }
`

const Nav = styled.div`
  display: flex;
  margin-right: .5rem;

  ${media.lessThan('medium')`
    display: none;
  `}

  ul {
    margin: 0;

    .is-current > ${NavItemContainer} {
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    }
  }

`

const NavAmathon = styled.img`
  width: 3.5625rem;
  height: .75rem;
`

const NavAwskrug = styled.img`
  width: 4.125rem;
  height: .6875rem;
`

const NavAusg = styled.img`
  width: 2.25rem;
  height: .6875rem;
`
