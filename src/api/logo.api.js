export default async function getProductsLogo(){
    const response=await fetch("http://localhost:5173/productsLogo");
    const data= await response.json();
    return data;
}