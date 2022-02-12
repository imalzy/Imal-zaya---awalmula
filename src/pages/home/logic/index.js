import * as React from 'react'
import { getRequest } from '../../../core/AxiosClient'

const useHook = () => {
    const [product, setProduct] = React.useState(null)
    const [category, setCategory] = React.useState(null)

    const fetchProduct = () => {
        getRequest("products?searchCriteria[pageSize]=10").then((response) => setProduct(response.data.items))
    }

    const fetchCategory = () => {
        getRequest("categories").then((response) => setCategory(response.data))
    }

    const fetchAll = () => {
        fetchProduct();
        fetchCategory();
    }

    const findProductByCategory = (categoryId) => {
        alert("see in console")
        getRequest(`categories/${categoryId}/products`).then((response) => {
            console.log(response)
        })
    }

    const handleClick = (item) => {
        findProductByCategory(item.id)
    }

    const handleDetail = (item) => {
        alert("See in Console")
        console.log(item)
    }

    return { product, category, fetchAll, handleClick, handleDetail }
}

export default useHook