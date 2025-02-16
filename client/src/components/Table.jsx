import React from 'react';

const Table = ({products}) => {


    return (
        <div className="flex justify-center overflow-auto mt-20 mx-10  bg-white">
      <table className="table-auto border-collapse border border-black bg-green-300 ">
                <thead>
                <tr className="bg-green-500 text-black">
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Price</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Sold</th>
                    <th className="px-4 py-2 border">Image</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id} className="text-center">
                        <td className="px-4 py-2 border">{product.id}</td>
                        <td className="px-4 py-2 border">{product.title}</td>
                        <td className="px-4 py-2 border">{product.description}</td>
                        <td className="px-4 py-2 border">{product.price}</td>
                        <td className="px-4 py-2 border">{product.category}</td>
                        <td className="px-4 py-2 border">{product.sold?"yes":"no"}</td>
                        <td className="px-4 py-2 border">{product.image}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;