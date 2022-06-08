import { createContext, useState } from 'react';
import axios from 'axios';

const SenoresContext = createContext();

/* eslint-disable react/prop-types */
const SensoresProvider = ({ children }) => {
    const [todos, setTodos] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState();

    // const sendMail = async (data) => {
    //     const osman = {
    //         email_username: data.email,
    //         email_password: data.pass,
    //     };
    //     try {
    //         setIsLoading(true);
    //         const res = await axios
    //             .post(
    //                 'https://spacez-link.herokuapp.com/api/submit/email-config',
    //                 osman
    //             )
    //             .then((res) => {
    //                 const data = res;
    //                 setTodos((prevTodos) => {
    //                     const updatedTodos = data.data.link;
    //                     setIsLoading(false);
    //                     return updatedTodos;
    //                 });
    //             })
    //             .catch((err) => {
    //                 console.log('asdasd', err.response.data.massage);
    //                 const handle = err.response.data.massage;
    //                 setErr(handle);
    //                 setIsLoading(false);
    //             });
    //     } catch (err) {
    //         console.error('asdsd', err);
    //     }
    // };

    // const removeError = () => {
    //     setErr();
    // };

    return (
        <SenoresContext.Provider
            value={{
                isLoading,
                todos,
                err,
                // sendMail,
                // removeError,
            }}
        >
            {children}
        </SenoresContext.Provider>
    );
};

export { SensoresProvider, SenoresContext };