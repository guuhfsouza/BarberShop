const options = document.querySelectorAll('a')

options.forEach(element => {
    element.addEventListener('click', showSelectedSectionInMenu)
});

function showSelectedSectionInMenu(event){
    const scheduleClient = document.querySelector('fieldset[name=schedule-client]');
    const schedulingClient = document.querySelector('fieldset[name=scheduling-client]')

    if(event.target.dataset.id === 'minha agenda'){
       scheduleClient.classList.remove('off')
        schedulingClient.classList.add('off')
    }
    else if(event.target.dataset.id === 'novo agendamento'){
        scheduleClient.classList.add('off')
        schedulingClient.classList.remove('off')
    }
}


export default showSelectedSectionInMenu;