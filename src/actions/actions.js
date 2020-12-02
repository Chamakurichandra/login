import axios from 'axios';

/**********************************FETCH*************************/

export const getProducts=()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:8080/fetch")
        .then((posRes)=>{
            dispatch(fun_one(posRes))
        },(errRes)=>{
            console.log(errRes)
        })
    }
};
export const fun_one=(records)=>{
    return{type:"FETCH",value:records}
};