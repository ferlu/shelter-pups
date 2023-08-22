// @vendors
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @constants
import { login } from "../../constants/api";

const Login = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [responseStatus, setResponseStatus] = useState(0);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
		setResponseStatus(0);
		setErrorMessage("");
		e.preventDefault();
		const body = {
			name,
			email,
		};
		try {
			const response = await login(body);
			setResponseStatus(response.status);
			if (response.status === 200) {
				setErrorMessage("");
				localStorage.setItem("isLoggedIn", "true");
				return navigate("/home");
			}
		} catch (error) {
			setErrorMessage(errorMessage);
		}
	};

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Login now!</h1>
					<p className='py-6'>Come to the bark side 🐶</p>
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl mx-4 bg-base-100'>
					<form
						className='card-body'
						onSubmit={(e: React.MouseEvent<HTMLFormElement, MouseEvent>) =>
							handleSubmit(e)
						}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								required
								type='text'
								placeholder='name'
								className='input input-bordered'
								onChange={(e: React.FormEvent<HTMLInputElement>) =>
									setName(e.currentTarget.value)
								}
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								required
								type='email'
								placeholder='email'
								className='input input-bordered'
								onChange={(e: React.FormEvent<HTMLInputElement>) =>
									setEmail(e.currentTarget.value)
								}
							/>
						</div>
						<div className='form-control mt-6'>
							<button
								type='submit'
								className='btn btn-primary'>
								Login
							</button>
						</div>
					</form>
					{(![200, 0].includes(responseStatus) || errorMessage.length > 0) && (
						<div className='alert alert-error'>
							<span>[{responseStatus}] - Please try again later</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
