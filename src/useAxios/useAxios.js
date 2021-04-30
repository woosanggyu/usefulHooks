import defaultAxios from 'axios'
import { useEffect, useState } from 'react';

const useAxios = (options ,axiosInstance = defaultAxios) => {
    const [state , setState] = useState({
        loading : true,
        error : null,
        data : null
    })
    // if(!options.url) {
    //     return;
    // }

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            loading:true
        })
        setTrigger(Date.now()
        );
    }
    useEffect(()=> {
        axiosInstance(options).then(data => {
            setState({
                ...state,
                loading : false,
                data : data
            });
        }).catch(error => setState({
            ...setState,
            loading : false,
            error : error
        })) 
    }, [trigger]);

    return {...state, refetch};
}

export default useAxios;