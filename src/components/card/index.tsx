const Card = ({
	id,
	age,
	breed,
	imgSrc,
	name,
	zipCode,
}: {
	id: string;
	age: number;
	breed: string;
	imgSrc: string;
	name: string;
	zipCode: string;
}) => {
	return (
		<div
			className='card cursor-pointer bg-base-100 shadow-xl hover:bg-primary/20 transition-all'
			id={id}>
			<figure className='h-auto'>
				<img
					className='w-full object-cover h-48'
					src={imgSrc}
					alt={`${breed} dog age ${age} called ${name}`}
				/>
			</figure>
			<div className='card-body p-6'>
				<h3 className='card-title'>{name}</h3>
				<p className='text-sm'>
					{breed} • {age} years
				</p>
				<div className='card-actions'>
					<div className='badge badge-ghost text-sm'>ZIP: {zipCode} </div>
				</div>
			</div>
		</div>
	);
};

export default Card;
