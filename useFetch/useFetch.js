import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null
    });

    const GetFetch = async()=>{
        try {
            const resp = await fetch(url);
            const result = await resp.json();
            setState({
                data:result[0],
                isLoading:false,
                hasError:null
            });
        } catch (error) {
            setState({
                ...state,
                hasError:error
            });
        }
    }

    useEffect(() => {
      GetFetch();
    }, [url]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
  }
}