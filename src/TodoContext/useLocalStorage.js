import React from "react";

function useLocalStorage(itemName, initialvalue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialvalue);

    React.useEffect(() => {
        // setTimeout(() => {
            // try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                console.log(localStorage.getItem(itemName));
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialvalue));
                    parsedItem = [];

                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                console.log('chupapi 1');
                setItem(parsedItem);
                setLoading(false);
                
                console.log('chupapi');
            // } catch (error) {
            //     setError(error);
            // }

        // }, 2000);
    })

    const saveItem = (newItem) => {
        try {
            const stringifyItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifyItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return [{
        item,
        saveItem,
        loading,
        error
    }];
}

export {useLocalStorage};