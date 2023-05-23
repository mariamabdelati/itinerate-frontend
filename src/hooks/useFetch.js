import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setError('Could not fetch the data for that resource');
                }
                const results = await response.json();
                setData(results.data);
                setIsPending(false);
                setError(null);
            } catch (error) {
                setIsPending(false);
                setError(error.message);
            }
        }

        getData();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;
