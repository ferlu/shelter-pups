import React from "react";
import { Navbar } from "../../components/navbar";
import Filters from "../../components/filters";
import Pups from "../../components/pups";

const Home = () => {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<div className='py-4 md:p-6 container mx-auto '>
				<Filters />
			</div>
			<div className='container mx-auto pt-10'>
				<Pups params={{}} />
			</div>
		</div>
	);
};

export default Home;
