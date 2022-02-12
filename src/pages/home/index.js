import * as React from 'react'
import Card from "../../components/card"
import Category from "../../components/Category"
import useHook from './logic'

const Home = () => {
    const { product, category, fetchAll, handleClick, handleDetail } = useHook()

    React.useEffect(() => {
        fetchAll()
    }, [])



    return (
        <main className="bg-gray-100">
            {/* React Carosel */}
            <div className="flex justify-center items-center">
            </div>

            {/* Category Product */}
            <div className="bg-white rounded-3xl border shadow-xl m-4 p-4">
                <h2 className="text-3xl antialiased font-semibold mb-4">Kategori Pilihan</h2>
                {/* <div className="flex flex-row w-full overflow-x-auto"> */}
                <div className="grid grid-flow-col auto-cols-max md:auto-cols-min overflow-x-auto pb-2.5">
                    {
                        category && Array.isArray(category.children_data) ? category.children_data.map((item, index) => <Category key={index} items={item} onClick={() => handleClick(item)} />) : (<></>)
                    }
                    {/* <Category /> */}
                </div>
            </div>

            <div className="flex justify-center items-center min-h-screen px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        Array.isArray(product) ? product.map((item, index) => <Card key={index} productName={item.name} price={item.price} image={item.media_gallery_entries} attributes={item.extension_attributes} handleClick={() => handleDetail(item)} />) : <></>
                    }
                </div>
            </div>
        </main>
    )
}

export default Home