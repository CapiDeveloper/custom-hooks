import { useState } from "react";

const useForm = (initialForm = {}) => {

    const [stateForm, setStateForm] = useState(initialForm);

    const onChange = ({target})=>{
        setStateForm({
            ...stateForm,
            [target.name]: target.value
        });
    }

    const onResetForm = ()=>{
        setStateForm(initialForm);
    }

  return {
    stateForm,
    onResetForm,
    onChange
  }
}

export default useForm