import DropDown from "../components/DropDown.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "../components/BarChart.jsx";

function Statistics() {
    const [statisticsData, setStatisticsData] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [statmonth, setStatMonth] = useState(1);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {

        axios.get(`http://localhost:3000/statistics?month=${statmonth}`)
            .then((response) => {
                setStatisticsData(response.data);
                console.log(response.data); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, [statmonth]);

    useEffect(() => {

        axios.get(`http://localhost:3000/barChart?month=${statmonth}`)
            .then((response) => {
                setChartData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [statmonth]);

    return (
        <div className="my-24 px-4 font-poppins"> {/* Apply the new font here */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-orange-600 tracking-tight">
                    STATISTICS - <span className="text-4xl font-semibold mx-3">{months[statmonth - 1]}</span>
                </h1>
                <DropDown month={statmonth} setMonth={setStatMonth} />
            </div>

            <div className="flex justify-center items-center mt-12">
                <div className="h-[12em] w-full md:w-[30em] bg-orange-300 rounded-2xl text-black font-nunito p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {statisticsData ? (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-semibold">Total Sale</p>
                                <p className="text-xl font-bold">{statisticsData.totalSaleAmount}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-semibold">Total Sold Items</p>
                                <p className="text-xl font-bold">{statisticsData.totalSoldItems}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-semibold">Total Not Sold Items</p>
                                <p className="text-xl font-bold">{statisticsData.totalNotSoldItems}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xl text-gray-600">Loading statistics...</p>
                    )}
                </div>
            </div>

            <div className="mt-16">
                {chartData ? <BarChart data={chartData} /> : <p className="text-xl text-gray-600">Loading BarChart data...</p>}
            </div>
        </div>
    );
}

export default Statistics;
