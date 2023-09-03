import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/fireBase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
    setLoading(true);

    const collectionRef = itemId
    ? query(collection(db, "Products"), where("category", "==", itemId))
    : collection(db, "Products");

    getDocs(collectionRef)
    .then((response) => {
        const productosAdapted = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
        });
        
        setProducts(productosAdapted);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        setLoading(false);
    });
    }, [itemId]);
    return (
    <div>
    <ItemList productos={productos} loading={loading} />
    </div>
    );
};

export default ItemListContainer;