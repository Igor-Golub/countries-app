import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";


const Home = () => {
	const navigate = useNavigate()
	const [countries, setCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState([])

	useEffect(async () => {
		const { data } = await axios.get(ALL_COUNTRIES)
		setCountries(data)
		setFilteredCountries(data)
	}, [])

	const handleSearch = useCallback((search, region) => {
		let data = [...countries]

		if(region) {
			data = data.filter(c => c.region.includes(region))
		}

		if(search) {
			data = data.filter(c => c.name.toLowerCase().includes(search))
		}

		setFilteredCountries(data)
	}, [countries])

	return (
		<>
			<Controls handleSearch={handleSearch} />
			<List>
				{!!filteredCountries.length &&
					filteredCountries.map(country => {
						const countryInfo = {
							img: country.flags.png,
							name: country.name,
							info: [
								{
									title: 'Population',
									description: country.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: country.region,
								},
								{
									title: 'Capital',
									description: country.capital,
								},
							]
						}
						return <Card onClick={() => navigate(`/country/${country.name}`)} key={country.name} {...countryInfo}/>
					})
				}
			</List>
		</>
	);
};

export default Home;