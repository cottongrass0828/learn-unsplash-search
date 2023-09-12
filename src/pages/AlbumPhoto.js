import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = 'https://api.unsplash.com/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
    const { id } = useParams();
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${api}/${id}?client_id=${accessId}`)
            setPhoto(response.data);
        })();
    }, [id])

    return (
        <>這是單張圖片 {id}
            <p>{photo.description}</p>
            <img src={photo?.urls?.regular} className="img-fluid" alt='' />
        </>
    )

}