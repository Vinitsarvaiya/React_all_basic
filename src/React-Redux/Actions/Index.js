export const IncNumber = (amount) => {
    return {
        type: "INCREMENT",
        playload:amount
    }
}

export const DecNumber=()=>{
    return{
        type: "DECREMENT"
    }
}

export const ResNumber=()=>{
    return{
        type: "RESET"
    }
}