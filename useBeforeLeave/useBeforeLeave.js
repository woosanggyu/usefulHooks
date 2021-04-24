export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        if(typeof onBefore !== 'function') {
        return;
        }

        const { clientY } = event;
            if(clientY <= 0) {
            onBefore()
        }
    }
  
    useEffect(() => {
      document.addEventListener('mouseleave', handle);
      return () => document.removeEventListener('mouseleave', handle);
    }, []);
  }