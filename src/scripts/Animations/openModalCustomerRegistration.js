function openModalCustomerRegistration(){
    const modalCustomerRegistration = document.querySelector('div [name=modalCustomerRegistration]');
    const login = document.querySelector('form[name=login]')

    login.classList.remove('on');

    modalCustomerRegistration.classList.toggle('on')
    setTimeout(() => {
        login.classList.add('on')
    }, 50)
}

export default openModalCustomerRegistration;