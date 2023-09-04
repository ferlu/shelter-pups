const Select = ({
	options,
	defaultPlaceholder,
	handleSelect,
}: {
	options: string[];
	defaultPlaceholder: string;
	handleSelect: (optionValue: string) => void;
}) => {
	return (
		<select
			defaultValue='DEFAULT'
			className='select select-primary max-w-xs border-4'
			onChange={(e) => handleSelect(e.currentTarget.value)}>
			<option
				key='default'
				disabled
				value='DEFAULT'>
				{defaultPlaceholder}
			</option>
			{options.length > 0 &&
				options.map((option: string, index: number) => (
					<option
						value={option}
						key={index}>
						{option}
					</option>
				))}
		</select>
	);
};

export default Select;
