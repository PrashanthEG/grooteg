
import React from 'react'
import Form from '../components/Form'
import logo from './ig.png';
function Login () {
	const [option, setOption] = React.useState(1)
	
	return (
		
		<div className='container'>
			<img src={logo} alt="Logo" />
			<h1>Grootan Technologies</h1>
			<header>
				<div className='color'>
                    {option===1 && 
					<span>Sign in to your account</span>}
					{option===2 && <span>Create an account</span>}
					{option===3 && <span>Reset your password</span>}
				</div>
			</header>
			<ul className='options'>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
				<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
			</ul>
			<Form option={option} />
			
		</div>
	)
}
export default Login
