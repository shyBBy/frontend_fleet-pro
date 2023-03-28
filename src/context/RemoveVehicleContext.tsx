import {createContext, useState} from "react";

export const RemoveVehicleContext = createContext({
    isDeleting: false,
    setIsDeleting: (value: boolean) => {}
})


export const RemoveVehicleProvider = ({children}: {children: JSX.Element}) => {
    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <RemoveVehicleContext.Provider value={{ isDeleting, setIsDeleting }}>
            {children}
        </RemoveVehicleContext.Provider>
    )
}