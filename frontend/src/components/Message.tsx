import './Message.css'
import { useEffect, useState } from 'react';

const coreAPI = 'http://core:8080/data';

function Message() {
    const [message, setMessage] = useState<string>('Empty');

    useEffect( () =>  {
        fetch(coreAPI) // Replace with your API URL
          .then((response) => response.json())
          .then((data: any) => setMessage(data.text))
          .catch((error) => console.error('Error fetching user:', error));
    }, []);

    return <div>Message fetched is: "{message}"</div>;
}

export default Message;