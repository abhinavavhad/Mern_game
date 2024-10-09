import React from 'react'
import SearchBar from '../components/SearchBar'
import DropDown from '../components/DropDown.jsx'
import Table from '../components/Table.jsx'
import Pagination from '../components/Pagination.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Transaction = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [perPage, setPerPage] = useState(10); 
    const [totalPages, setTotalPages] = useState(0); 
    const [search, setSearch] = useState("");
    const [month, setMonth] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:3000/transactions?page=${currentPage}&limit=${perPage}&search=${search}&month=${month}`) 
            .then((response) => {
                setTransactionData(response.data.products); 
                console.log(response.data)
                setTotalPages(response.data.Pagination.pageCount); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPage, perPage, search, month]); 

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage); // Update current page when pagination changes
    };
    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="bg-green-300 text-white rounded-lg w-64 h-64 flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-center flex flex-col space-y-4">
                        <span>Transaction</span>
                        <span>Dashboard</span>
                    </h1>
                </div>

            </div>
            <div className=' justify-center space-x-60 relative'>
                <SearchBar search={search} setSearch={setSearch} />
                <DropDown month={month} setMonth={setMonth} />
            </div>
            <div>
                <Table products={transactionData} />
            </div>
            <div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Transaction

