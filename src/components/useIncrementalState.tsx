import { useState } from "react";

export interface IncrementalStateArray {
    0: number;
    1: () => void;
    2: () => void;
}

/**
 * A hook that returns an array:
 * [0] is the current state
 * [1] is a function to increment the state
 * [2] is a function to decrement the state
 * Example usage:
 * const [ count, increment, decrement ] = useIncrementalState(0);
 * @param initialState The initial state to increment or decrement.
 * @returns An array containing the current state and two functions to increment or decrement the state.
 */
export const useIncrementalState = (initialState: number): IncrementalStateArray => {
    const [ state, setState ] = useState(initialState);
    
    const increment = () => {
        setState(state + 1);
    };
    
    const decrement = () => {
        setState(state - 1);
    };
    
    return [ state, increment, decrement ];
};

export default useIncrementalState;
