export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"


/**
 * action crerater
 * 
 * acitonを返すもの
 */
export const increment = () =>({
    type: INCREMENT
})


export const decrement = () =>({
    type: DECREMENT
})

