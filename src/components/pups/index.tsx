import React, { useEffect, useState } from "react";
import { getDogsData, getDogsIds } from "../../constants/api";
import Card from "../card";
import { Link } from "react-router-dom";

interface Dog {
	id: string;
	img: string;
	name: string;
	age: number;
	zip_code: string;
	breed: string;
}

interface Pages {
	prev: string;
	next: string;
}

const Pups = ({ params }: { params: object }) => {
	const [dogsData, setDogsData] = useState<Dog[]>();
	const [pages, setPages] = useState<Pages>({ prev: "", next: "" });

	const getDogsDetails = async (ids: Array<string>) => {
		try {
			const response = await getDogsData(ids);
			if (response.status === 200) {
				const data = await response.json();
				setDogsData(data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const getSearchData = async () => {
		try {
			const response = await getDogsIds();
			if (response.status === 200) {
				const searchResults = await response.json();
				console.log(searchResults);
				setPages((prevValues) => {
					const newValues = {
						prev: searchResults.prev || "",
						next: searchResults.next || "",
					};
					return { ...prevValues, ...newValues };
				});
				console.log(pages);
				await getDogsDetails(searchResults.resultIds);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getSearchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12 px-6'>
				{dogsData?.map((dog: Dog) => {
					return (
						<Card
							key={dog.id}
							id={dog.id}
							age={dog.age}
							breed={dog.breed}
							imgSrc={dog.img}
							name={dog.name}
							zipCode={dog.zip_code}
						/>
					);
				})}
			</div>
			<div>
				<div className='join flex justify-center my-10'>
					<button
						className='join-item btn btn-primary'
						disabled={!pages.prev.length}>
						<Link to={pages.prev}>Previous</Link>
					</button>
					<button
						className='join-item btn btn-primary'
						disabled={!pages.next.length}>
						<Link to={pages.next}>Next</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Pups;
