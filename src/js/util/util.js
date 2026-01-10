/**
 * @see https://medium.com/@stheodorejohn/javascript-object-deep-equality-comparison-in-javascript-7aa227e889d4
 */
export function deepEqual(oldState, newState) {
    if (oldState === newState) {
        return true;
    }

    if (typeof oldState !== 'object' || typeof newState !== 'object' || oldState === null || newState === null) {
        return false;
    }

    const keys1 = Object.keys(oldState);
    const keys2 = Object.keys(newState);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(oldState[key], newState[key])) {
            return false;
        }
    }

    return true;
}