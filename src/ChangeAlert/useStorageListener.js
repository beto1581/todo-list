import React from "react";

function useStorageListener({ sincronize }) {
    const [storageChage, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('Hubo cambios en TODOS_V1');
            setStorageChange(true);
        }
    })

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    }


    return {

        show: { storageChage },
        toggleShow: { toggleShow }

    }
}
export { useStorageListener }