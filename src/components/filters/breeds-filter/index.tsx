import React, { useEffect, useState } from "react";
import Select from "../../select";
import { getBreeds } from "../../../constants/api";
import { useNavigate } from "react-router-dom";

const BreedsFilter = () => {
	const navigate = useNavigate();
	const [dogBreeds, setDogBreeds] = useState<string[]>([]);

	const handleSelect = (optionValue: string) => {
		console.log("Selected value:", optionValue);
		// * Guardar en state, observar con useEffect
		// * Cuando hay cambios actualizamos los parámetros de dogs/search
	};

	const initializeBreedSelector = async () => {
		try {
			const response = await getBreeds();

			if (response.status === 200) {
				const data = await response.json();
				setDogBreeds(data);
			} else {
				localStorage.setItem("isLoggedIn", "false");
				navigate("/login");
			}
		} catch (error) {
			console.error(error);
			localStorage.setItem("isLoggedIn", "false");
			navigate("/login");
		}
	};

	useEffect(() => {
		initializeBreedSelector();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Select
			options={dogBreeds}
			defaultPlaceholder='Breeds'
			handleSelect={handleSelect}
		/>
	);
};

export default BreedsFilter;
