/* eslint-disable react/prop-types */
// import React from "react";
import logo from '../assets/nexisa.png'
const PaySlip = ({formData}) => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl px-6">
                <div className='flex justify-center items-center mb-1'>
                    <img src={logo} alt="Logo" className='w-44'/>
                </div>
                <div className='border-2 border-solid border-black'>
                    <h1 className="text-2xl font-bold text-center bg-blue-300 py-2 border-b-2 border-black">Nexisa LLP</h1>
                    <h2 className="text-lg font-semibold text-center bg-blue-100 py-2 border-b-2 border-black">Pay Slip</h2>

                    {/* Employee Details */}
                    <div>
                        <div className='flex p-2 border-b-2 border-black gap-4'>
                            <p className="font-medium">Employee Name:</p>
                            <p className="text-gray-700">{formData.name}</p>
                        </div>
                        <div className='flex p-2 border-b-2 border-black gap-4'>
                            <p className="font-medium">Designation:</p>
                            <p className="text-gray-700">{formData.designation}</p>
                        </div>
                        <div className='flex p-2 border-b-2 border-black gap-4'>
                            <p className="font-medium">Department:</p>
                            <p className="text-gray-700">{formData.department}</p>
                        </div>
                        <div className='flex p-2 border-b-2 border-black gap-4'>
                            <p className="font-medium">Month:</p>
                            <p className="text-gray-700">{formData.month}</p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <div className='flex'>
                            <div className='w-1/2 flex justify-center items-center text-lg font-bold border-r-2 border-b-2 border-black bg-blue-300 py-2'>Earnings</div>
                            <div className='w-1/2 flex justify-center items-center text-lg font-bold border-b-2 border-black bg-blue-300 py-2'>Deductions</div>
                        </div>
                        {/* Table head  */}
                        <div className='flex'>
                            <div className='w-1/2 flex'>
                                <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black bg-blue-100 py-2'>Salary Head</div>
                                <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black bg-blue-100 py-2'>Amount</div>
                            </div>
                            <div className='w-1/2 flex'>
                                <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black bg-blue-100 py-2'>Salary Head</div>
                                <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black bg-blue-100 py-2'>Amount</div>
                            </div>
                        </div>
                        {/* Table body  */}
                        <div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Basic</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.basic}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>PF Employee</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'>{formData.pfemployee}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>H R A</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.hra}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>ESI Employee</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'>{formData.esiemployee}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Conv. All</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.conv}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Loan</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'>{formData.loan}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Trans. All</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.trans}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Tax</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'>{formData.tax}</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>CEA</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.cea}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Others</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.others}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Medical Allowance</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.medical}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Salary (Gross)</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.gross}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>PF Employer</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.pfemployer}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>ESI Employer</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.esiemployer}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>Telephone</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.telephone}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'></div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'></div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center font-bold text-lg border-r-2 border-b-2 border-black py-2'>Salary</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-r-2 border-b-2 border-black py-2'>{formData.totalSalary}</div>
                                </div>
                                <div className='w-1/2 flex'>
                                    <div className='w-1/2 flex justify-center items-center font-bold text-lg border-r-2 border-b-2 border-black py-2'>Total Deduction</div>
                                    <div className='w-1/2 flex justify-center items-center text-lg border-b-2 border-black py-2'>{formData.totalDeduction}</div>
                                </div>
                            </div>   
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-10">
                        <p className="text-gray-700 py-2 px-4 mx-5 border-t border-black">Prepared by:</p>
                        <p className="text-gray-700 py-2 px-4 mx-5 border-t border-black">Checked by:</p>
                        <p className="text-gray-700 py-2 px-4 mx-5 border-t border-black">Authorized by:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaySlip;