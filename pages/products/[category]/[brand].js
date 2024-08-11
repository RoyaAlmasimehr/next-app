import { useRouter } from "next/router";


function ProductsByBrand() {

const {category,brand}=useRouter().query


    return ( <>
    <h1>ProductsByBrand :{category} -{brand} </h1>
    </> );
}

export default ProductsByBrand;