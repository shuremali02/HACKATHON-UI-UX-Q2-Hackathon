import { client } from '@/sanity/lib/client'
export interface WatchesXPerfumes {
    name?: string; // Name of the product
    description?: string; // Product description
    moreDetails?: string; // Additional details about the product
    price?: number; // Final price after discount
    discountPercentage?: number; // Discount percentage
    priceWithoutDiscount?: number; // Price without discount
    rating?: number; // Rating value (0-5)
    ratingCount?: number; // Total rating count
    tags?: string[]; // Array of tags
    sizes?: string[]; // Array of sizes
    categories?: string[]; // Array of categories
    colors?: string[]; // Array of colors
    gender?: string; // Gender specification
    stock_Quantity?: number; // Stock quantity
    brand?: string; // Brand name
    sku?: string; // Stock Keeping Unit
    imageUrl?:string,
    _id?: string; // Unique identifier for the object
    _type?: string; // Type of the object
    _rev?: string; // Revision identifier
    _createdAt?: string; // ISO date string for creation time
    _updatedAt?: string; // ISO date string for last update
  }
async function DataFetching() {
    const response:WatchesXPerfumes[] = await client.fetch(`*[_type == "watchPerfumes"] {name, title, description, brand,price, priceWithoutDiscount,"imageUrl": image.asset->url}`)
    console.log("length", response.length)
    console.log("THIS IS RESPONSE" , response)
 return response
}

export default DataFetching