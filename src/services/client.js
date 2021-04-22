import { useState, useEffect, useCallback } from 'react';

export const useFetch = ((url) => {
    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState([])

    const getFiles = useCallback(async () => {
        const response = await fetch(url)
        const files = await response.json()
        setFiles(files)
        setLoading(false)
    }, [url])

    useEffect(() => {
        getFiles().then(r => console.log(r))
    }, [getFiles, url])

    return {loading , files}
})

export const deleteFile = (url, id) => {
    fetch(`${url}/delete/${id}`, {method: "DELETE"}).then(console.log)
}