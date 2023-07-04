export default function hasValuesFromArray(set, array) {
    if (Array.isArray(array)) {
        return array.every((element) => set.has(element));
    }
    
    return false;
    }