const products = [
    {
        id: '1',
        name: 'Monitor LG',
        price: 250,
        category: 'Monitores',
        img: 'https://http2.mlstatic.com/D_NQ_NP_632603-MLA45730969968_042021-O.webp',
        stock: 10,
        description: ' MonitorLG 19 Pulgadas'
    },
    {
        id: '2',
        name: 'Parlante Genius',
        price: 20,
        category: 'Parlantes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_785829-MLA46374892684_062021-O.webp',
        stock: 35,
        description: 'Parlante Genius 9w'
    },
    {
        id: '3',
        name: 'Teclado Logitech',
        price: 25,
        category: 'Teclados',
        img: 'https://http2.mlstatic.com/D_NQ_NP_673881-MLA45341666013_032021-O.webp',
        stock: 30,
        description: 'Teclado negro Logitech'
    }
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
setTimeout(() => {
resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
setTimeout(() => {
resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}