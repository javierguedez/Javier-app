import imgBatido from "../../imagenes/batido.1.jpg";
import imgCheesecake from "../../imagenes/cheescake.jpg";
import imgCono from "../../imagenes/conos.jpg"

const products = [
    {
        id: '1',
        name: 'Batido',
        price: '9.000',
        category: 'bebidas',
        img: imgBatido ,
        stock: 20,
        description: 'Batido de mora'
    },
    { id: '2', name: 'Cheessecake', price: '5.000', category: 'postres', img:  imgCheesecake , stock: 17, description: 'Cheessecake de maracuya' },
    { id: '3', name: 'Cono', price: '3.000', category: 'helados', img:  imgCono , stock: 17, description: 'Cono de frutas' },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    }
    )
}
