
export const useUtils = () => {
    const saveToLocalStorage = (key: string, value: any) => {
        if(typeof window !== 'undefined' && window.localStorage) {
           window.localStorage.setItem(key, JSON.stringify(value))
            console.log('value saved to local storage', (value));
            // console.log('tyoe of window:',typeof window);
            // console.log('window local storage:',window.localStorage);
            // console.log('value', value);
            
        }
    }


    return {
        saveToLocalStorage
    }
}
