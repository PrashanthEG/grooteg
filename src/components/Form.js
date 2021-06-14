import React from 'react'
import {useHistory}from 'react-router-dom'
function Form ({ option }) {
    const history=useHistory()
	return (
		<form className='account-form' onSubmit={(evt) =>{
            evt.preventDefault()
            const email=document.getElementById('email').value
            
            const password=document.getElementById('password').value
            if(option===2){
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
            history.push('/home')
        }

             if(option===1){
                 if(email===localStorage.getItem('email')&&password===localStorage.getItem('password')){
                    history.push('/home')
                 }else{
                     alert('Account not exsist,signup')
                 }
                
             }
            } }>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
	)
}
export default Form