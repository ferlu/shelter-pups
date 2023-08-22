import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error: unknown = useRouteError();
	console.error(error);

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center'>
					<h1 className='text-5xl font-bold'>Today's been ruff</h1>
					<p>Sorry, an unexpected error has occurred.</p>
				</div>
			</div>
		</div>
	);
}
