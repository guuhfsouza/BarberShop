
//função que determina até qual section quero ir
function scrollTo(selectedSection = 'pageTop'){
    if(selectedSection === 'about'){
        const about = document.getElementsByClassName("about-container");
        smoothingScrollTo(0, about[0].offsetTop, 1000)
    }
    else if(selectedSection === 'service'){
        const service = document.getElementsByClassName("rendered-container");
        smoothingScrollTo(0, service[0].offsetTop, 1000)
    }
    else if(selectedSection === 'contact'){
        const contact = document.getElementsByClassName("contact-container");
        smoothingScrollTo(0, contact[0].offsetTop, 1000)
    }
    else{
        const myPageTop = document.documentElement.offsetTop;
        smoothingScrollTo(0, myPageTop, 1000)
    }
}

//função que suaviza o scrool até a section selecionada
function smoothingScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };


export default scrollTo;