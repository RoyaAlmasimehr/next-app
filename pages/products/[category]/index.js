import { useRouter } from "next/router";

function ProductsByCategory() {

    const router =useRouter().query
    console.log(router); 
    const category =router.category
    return (
      <>
        <h1> ProductsByCategory :{category}</h1>
      </>
    );
}

export default ProductsByCategory;