import React, { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import Info from "../components/Info";

const Details = () => {
	const { name } = useParams()
	const navigate = useNavigate()
	const [currentCountry, setCurrentCountry] = useState(null)

	useEffect(async () => {
		if (name) {
			const { data } = await axios.get(searchByCountry(name))
			setCurrentCountry(data[0])
		}
	}, [name])

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack/> Back
			</Button>
			{!!currentCountry && <Info navigate={navigate} {...currentCountry} />}
		</div>
	);
};

export default Details;