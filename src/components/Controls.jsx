import React, { useEffect, useState } from 'react';
import Search from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
]

const Controls = ({ handleSearch }) => {
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState('')

	useEffect(() => {
		handleSearch(search, region?.value || '')
	}, [search, region])

	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch}/>
			<CustomSelect
				value={region}
				onChange={setRegion}
				placeholder='Filter by region'
				isClearable
				isSearchable={false}
				options={options}
			/>
		</Wrapper>
	);
};

export default Controls;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	@media(min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;