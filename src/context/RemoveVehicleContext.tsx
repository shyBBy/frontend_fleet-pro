import {createContext} from "react";

export const RemoveVehicleContext = createContext({
    isDeleting: false,
    setIsDeleting: (value: boolean) => {} // tak dziala context, deklarujemy sobie jedynie funkcji, a gdzies musimy zrobic wspolny stan gdzie to bedzi trzymane - czyli najwyzszy komponent Appo
})