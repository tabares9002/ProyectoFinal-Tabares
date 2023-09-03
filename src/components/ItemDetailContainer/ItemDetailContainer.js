import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/fireBase/firebaseConfig";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [productos, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'Products', itemId)

        getDoc(docRef)
        .then((response) =>{
            setProduct(
                {...response.data(), id: response.id}
            );
            
            
        })
    }, [itemId]
    );
return(
    <div className='ItemDetailContainer'>
        <ItemDetail {...productos} />
    </div>
)
}

export default ItemDetailContainer