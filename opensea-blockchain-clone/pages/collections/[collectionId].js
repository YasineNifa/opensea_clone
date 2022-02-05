import React from 'react';
import {useRouter} from 'next/router' 
function Collection() {

    const router = useRouter()
    console.log("Query : ", router.query)
    console.log("Collection ID : ", router.query.collectionId)
    return <div></div>;
}

export default Collection;
