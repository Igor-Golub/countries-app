import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import { searchByCodes } from "../config";

const Info = (props) => {
	const {
		name,
		nativeName,
		flag,
		capital,
		population,
		regin,
		subregion,
		borders = [],
		navigate
	} = props

	const [neighbors, setNeighbors] = useState([])

	useEffect(async () => {
		const { data } = await axios.get(searchByCodes(borders))
		const arrNeighborsNames = data
			.map(n => n ? n.name : false)
			.filter(Boolean)
		setNeighbors(arrNeighborsNames)
	}, [borders])

	const CountryInfoConfig = [
		{ label: 'NativeName', value: nativeName },
		{ label: 'Capital', value: capital },
		{ label: 'Population', value: population },
		{ label: 'Regin', value: regin },
		{ label: 'Subregion', value: subregion },
	]

	return (
		<Wrapper>
			<InfoImage src={flag} alt={name}/>

			<div>
				<InfoTitle>
					{name}
				</InfoTitle>
				<ListGroup>
					<List>
						{CountryInfoConfig.map(({ label, value }) => (
							<ListItem key={label}>
								<b>{label}</b>: {value || 'Нет данных'}
							</ListItem>
						))}
					</List>
				</ListGroup>
				<Meta>
					<b>Border Countries</b>
					{!neighbors.length ? <span>There is not border countries</span> : <TagGroup>
						{neighbors.map(b => <Tag onClick={() => navigate(`/country/${b}`)} key={b}>{b}</Tag>)}
					</TagGroup>}
				</Meta>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export default Info;