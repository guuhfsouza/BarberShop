import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import '../../global.css'
import './style.css'

function Modal(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function openRegistrationCloseLogin(typeAnimation){

        const modal = document.querySelector('div [name=modalCustomerRegistration]')
        const login = document.querySelector('form[name=login]')
        const register = document.querySelector('form[name=registration]')
        const forgot = document.querySelector('form[name=forgot]')
        
        
        if(typeAnimation === 'register'){
            login.classList.toggle('on');
            register.classList.toggle('on');
        }

        else if( typeAnimation === 'forgot'){
            login.classList.toggle('on');
            forgot.classList.toggle('on')
        }
        else    
            modal.classList.toggle('on')
    }

    function handleLoginValidation(){
        if(email === 'gustavo' && password ==='123456'){
            history.push('/client-area');
        }   
        else
            alert('Usuário não encontrado')
    }
    
     return(
        <div className="modal-container" name='modalCustomerRegistration'>
            <section>         
                <form className='login' name='login' onSubmit={handleLoginValidation}>
                    <a href="#" onClick={openRegistrationCloseLogin}>X</a>
                    <title>
                        <h1>Login</h1>
                    </title>   
                    <label>E-mail</label>
                    <input placeholder="E-mail" value={email} onChange={ e => setEmail(e.target.value)}></input>
                    <label>Senha</label>
                    <input placeholder="Senha" type='password' value={password} onChange={ e => setPassword(e.target.value)}></input>
                    <button>Entrar</button>
                    <div >
                        <a href="#" onClick={e=> openRegistrationCloseLogin('register')}>Primeiro acesso?</a>
                        <a href="#" onClick={e=> openRegistrationCloseLogin('forgot')}>Redefinir Senha</a>
                    </div>            
                </form>
            </section>
            {/* Novo Cadastro de cliente */}
            <section>
                <form className="registration" name='registration'>
                <a href="#" onClick={e=> openRegistrationCloseLogin('register')}>X</a>
                    <title>
                        <h1>Cadastro</h1>
                    </title>            
                    <label>Seu Nome</label>
                    <input></input>
                    <label>Seu Sobrenome</label>
                    <input></input>
                    <label>Celular</label>
                    <input></input>
                    <label>E-mail para contato</label>
                    <input></input>

                    <button>Cadastrar</button>
                </form>
            </section>
            {/* Recuperar Senha */}
            <section>         
                <form className='forgot' name='forgot'>
                    <a href="#" onClick={e=> openRegistrationCloseLogin('forgot')}>X</a>
                    <title>
                        <h1>Recuperar Senha</h1>
                    </title>   
                    <label>E-mail</label>
                    <input placeholder="E-mail"></input>
                    <label>Nova Senha</label>
                    <input placeholder="Senha" type='password'></input>
                    <button>Recuperar</button>
                </form>
            </section>

        </div>
    );
}

export default Modal;