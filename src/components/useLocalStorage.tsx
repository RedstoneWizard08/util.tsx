import { useEffect, useState } from "react";

export interface LocalStorage {
    [key: string]: any;
}

export function useLocalStorage() {
    const [localStorage, setLocalStorage] = useState<LocalStorage>({});
    useEffect(() => {
        window.addEventListener("load", () => {
            const itemNames = Object.keys(window.localStorage);
            const newLocalStorage: LocalStorage = {};
            itemNames.forEach(itemName => {
                newLocalStorage[itemName] = window.localStorage.getItem(itemName);
            });
            setLocalStorage(newLocalStorage);
        });
    });
    return localStorage;
};
