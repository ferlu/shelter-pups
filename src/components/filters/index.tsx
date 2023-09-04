import { useState } from "react";
import BreedsFilter from "./breeds-filter";

const Filters = () => {
	const [urlParams, setUrlParams] = useState<object>({});

	return (
		<div>
			<BreedsFilter />
		</div>
	);
};

export default Filters;
