import './Message.css'
import { useEffect, useState } from 'react';

const coreAPI = 'http://localhost:5000/data';

function Message() {
    const [message, setMessage] = useState<string>('Empty');

    useEffect( () =>  {
        fetch(coreAPI) // Replace with your API URL
          .then((response) => response.json())
          .then((data: any) => setMessage(data.text))
          .catch((error) => console.error('Error fetching user:', error));
    }, []);

    // try some await / async stuff. its just fancy .then and .catches in the background anyway.
    // useEffect(async () => {

    return <div>Message fetched is: "{message}"</div>;
}

export default Message;