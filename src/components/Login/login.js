import { useForm } from "react-hook-form"

export const Login = (props) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const login = (data) => {
        props.onLogin(data)
        reset() 
    }
    const change = (e) => {
        e.preventDefault();
        props.onChangeSign();
    }
    return(
        <div id="app">
            <form onSubmit = {handleSubmit(login)} >
                <div className="form-group">
                    <span className='error'>{errors.login?.message}</span>
                    <label htmlFor="login">Login</label>
                    <input 
                        type="text"
                        placeholder="E-mail"
                        name="login"
                        {...register('login',{
                            required:'Login is required',
                            pattern:{
                                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message:'Invalid Login'
                            }
                    })}
                    style={{borderColor:errors.login ? 'red' : 'initial'}}
                    />
                </div>
                <div className="form-group">
                    <span className='error'>{errors.password?.message}</span>
                    <label htmlFor="Password">Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register('password',{
                            required:'Password is required',
                            minLength:{
                                value:11,
                                message:'Password need to be 11 charachter'
                            }
                        })}
                        style={{borderColor:errors.password ? 'red' : 'initial'}}
                    />
                </div>
                <div className="remember_section form-group">
                    <input 
                        type="checkbox"
                        name = "remember"
                        {...register('remember')}
                    />
                    <span htmlFor="remember">Remember me</span>
                </div>
                <button onClick={(e)=>change(e)}>I don't have account!</button>
                <div className="form-footer">
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
    )
}