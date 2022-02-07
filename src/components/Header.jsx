import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline, IoMoon } from 'react-icons/io5'
import { DARK_THEME, LIGHT_THEME } from "../config";
import { Link } from "react-router-dom";

const Header = () => {
	const [theme, setTheme] = useState(LIGHT_THEME)

	const toggleTheme = () => setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<HeaderElement>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ModeSwitcher onClick={toggleTheme}>
						{theme === LIGHT_THEME
							? <IoMoonOutline size='14px' />
							: <IoMoon size='14px' />
						}
						<span style={{ marginLeft: '.75rem' }}>
							{theme} Theme
						</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderElement>
	);
};

export default Header;

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
	to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  cursor: pointer;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;