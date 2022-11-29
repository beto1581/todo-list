import React from "react";

function withStorageListener(WrappedComponet) {
    return function WrappedComponetWithStorageListener(props) {
        const [storageChage, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios en TODOS_V1');
                setStorageChange(true);
            }
        })

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }


        return (
            <WrappedComponet
                show={storageChage}
                toggleShow={toggleShow}
            />
        );
    }
}

export { withStorageListener }