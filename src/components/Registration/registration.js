import { Controller, useForm } from 'react-hook-form';
import './style.css';
export const Registration = (props) => {
    const {register,handleSubmit,formState:{errors},control} = useForm();
    const addUser = (data) => {
        props.onRegistration(data)
    }
    const change = (e) => {
        e.preventDefault();
        props.onChangeSign();
    }
    return (
        <div id="app">
            <form onSubmit={handleSubmit( )}>
                <div className="form-group">
                    <span className='error'>{errors.name?.message}</span>
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        {...register('name',{required:'Please fill the name'})}
                        style={{borderColor:errors.name ? 'red' : 'initial'}}
                    />
                </div>
                <div className="form-group">
                    <span className='error'>{errors.surname?.message}</span>
                    <label htmlFor="surname">Surname *</label>
                    <input 
                        type="text"
                        placeholder="Surname"
                        name="surname"
                        {...register('surname',{required:'Please fill the surname'})}
                        style={{borderColor:errors.surname ? 'red' : 'initial'}}
                    />
                </div>
                <div className="form-group">
                    <span className='error'>{errors.email?.message}</span>
                    <label htmlFor="name">Email *</label>
                    <input 
                        type="text"
                        placeholder="email"
                        name="email"
                        {...register('email', {
                            required: 'Please fill the email',
                            pattern: {
                              value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid Email',
                            },
                        })}
                        style={{borderColor:errors.email ? 'red' : 'initial'}}
                    />
                </div>
                <div className="form-group">
                    <span className='error'>{errors.password?.message}</span>
                    <label htmlFor="password">Password *</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register('password',
                        {   required:'Please fill the password',
                            minLength: {
                                value:11,
                                message:'Password must be at least 11 characters long'
                            }
                        })}
                        style={{borderColor:errors.password ? 'red' : 'initial'}}
                    />
                </div>
                <div className=''>
                    <button onClick={(e)=>change(e)}>I have account!</button>
                </div>
                <div className='form-footer'>
                    <button className='btn'>Save</button>
                </div>
            </form>
        </div>
    )
}