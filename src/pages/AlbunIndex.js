import { useOutletContext } from 'react-router-dom'
export default function AlbumIndex() {
    const list = useOutletContext();
    return (
        <div className='row'>
            圖首頁
        </div>
    )
}