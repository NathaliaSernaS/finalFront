 import React, {createContext, useEffect, useState} from 'react';
import { Await } from 'react-router-dom';

export const DentistContext = createContext([]);

export const DentistProvider = (props) => {

    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        async function getData() {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();

                setDentists(data);

            }catch(error){
                console.error(error)

            }
            
        }
       getData();
        
    },[])

    return (
        <DentistContext.Provider value={dentists}>
            {props.children}
        </DentistContext.Provider>
    )
}
