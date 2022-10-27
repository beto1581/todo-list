import React from "react";

function useLocalStorage(itemName, initialvalue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialvalue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialvalue));
                    parsedItem = [];

                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }

        }, 6000);
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

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };