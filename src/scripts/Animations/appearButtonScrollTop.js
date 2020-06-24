function appearButtonScrollTop(){
    const myPageScrollPoint = document.documentElement.scrollTop;
    const aboutSectionPosition = document.querySelector('div [name=aboutSection]')

    if(myPageScrollPoint >= aboutSectionPosition.offsetTop- 5){
        const buttonScrollTop = document.querySelector('div [name=button-scrollTop]');
        buttonScrollTop.classList.add('on')
    }
    else{
        const buttonScrollTop = document.querySelector('div [name=button-scrollTop]');
        buttonScrollTop.classList.remove('on')
    }    
}

export default appearButtonScrollTop;
