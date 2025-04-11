import React from 'react'

export async function generateMetadata({params}) {
    const {productID} = await params;
    return {
        title: `Product ${productID} `,
        description: `This is a product ${productID} page, learning about Metadata`
    };

}
const ProductDetails = async({params}) => {
    const {productID} = await params;
    
  return (
    <div>
      Product {productID} Details
    </div>
  )
}

export default ProductDetails
