export const useFullscreen = (callback) => {
    const element = useRef()
    const checkRn = isFull => { 
      if(callback && typeof callback === 'function') {
        callback(isFull)
      }
    }
    const triggerFullscreen = () => {
      if(element.current) {
        if(element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullScreen) {
          element.current.webkitRequestFullScreen();
        } else if (element.current.msRequestFullScreen) {
          element.current.msRequestFullScreen();
        }
  
        checkRn(true);
      }
    }
    const exitFull = () => {
        if(document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozRequestFullScreen) {
          document.mozRequestFullScreen();
        } else if (document.webkitRequestFullScreen) {
          document.webkitRequestFullScreen();
        } else if (document.msRequestFullScreen) {
          document.msRequestFullScreen();
        }
        checkRn(false);
      }
    return {element , triggerFullscreen, exitFull};
  }