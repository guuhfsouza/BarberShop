import React from 'react';

import './style.css'
import '../../global.css'


function ClientArea(){

    const vector = [1,2,3,4,5];


    function showSelectedSectionInMenu(event){
        const scheduleClient = document.querySelector('fieldset[name=schedule-client]');
        const schedulingClient = document.querySelector('fieldset[name=scheduling-client]')

        console.log( event.target.dataset.id)

        if(event.target.dataset.id == 'minha agenda'){
            scheduleClient.classList.remove('off')
            schedulingClient.classList.add('off')
        }
        else if(event.target.dataset.id == 'novo agendamento'){
            scheduleClient.classList.add('off')
            schedulingClient.classList.remove('off')
        }
    }


    return(
        <div className="client-container">
            <section className="client-main">
                <title>
                    <h1>Menu</h1>
                </title>
                <nav>
                    <a onClick={showSelectedSectionInMenu} data-id="minha agenda">Minha agenda</a>
                    <a onClick={showSelectedSectionInMenu} data-id="novo agendamento">Novo Agendamento</a>
                    <a>Sair</a>
                </nav>
            </section>
            <section className="client-content">
                <title>
                    <h1>Espaço do cliente</h1>
                </title>
                <fieldset className="schedule-client" name='schedule-client'>
                    <ul>
                        {vector.map(index => (
                            <li key={vector}>
                            <header>
                                <strong> Barbeiro - 19/07 </strong>
                            </header>
                            <section>
                                <p>João</p>
                                <p>19:00</p>
                            </section>
                        </li>    
                        ))}
                    </ul>
                    {/* <div className= 'pages'>

                    </div> */}
                </fieldset>
                <fieldset className="scheduling-client off" name='scheduling-client'>
                    <form>
                        <label>Qual serviço</label>
                        <select>
                            <option>Barbeiro</option>
                            <option>Tatuador</option>
                        </select>
                        <label>Profissional</label>
                        <select>
                            <option>João</option>
                            <option>Carlos</option>
                        </select>
                        <label>Data</label>
                        <input type="date"></input>
                        <label>Hora</label>
                        <input type="time"></input>
                        <button>Agendar</button>
                    </form>
                </fieldset>
    
            </section>
        </div>
    )
}

export default ClientArea;