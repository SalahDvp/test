import React, {useState} from 'react';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name: "" , password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className= "form-inner">
            
            <h2>Sign in</h2>
            {(error !='') ?(<div className='error'>{error}</div>):''}
            <div className="form-group">
                <label htmlFor='name'> User name: </label>
                <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor='password'> Password :</label>
                <input type ={'password'} name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input type={"submit"} value=" LOGIN "/>
            <div className="signup">
                <label htmlFor='signup'> Singn up </label>
                <span onChange={e => setDetails({...details, signup: e.target.value})} value={details.signup} />
            </div>
        </div>
    </form>
  )
}

export default LoginForm;