import React from "react";


function Hoadon(){


    return(
        <div class="py-5 flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light w-5 overflow-hidden">
                    <thead class="bg-zinc-900 text-white border-b font-medium dark:border-neutral-500">
                        <tr className="px-4 py-6">
                            <th scope="col" class="px-6 py-4">#</th>
                            <th scope="col" class="px-6 py-4">Tên hóa đơn</th>
                            <th scope="col" class="px-6 py-4">Nhân viên</th>
                            <th scope="col" class="px-6 py-4">Ngày lập hóa đơn</th>
                            <th scope="col" class="px-6 py-4">Tổng tiền</th>
                            <th scope="col" class="px-6 py-4">Quản lý</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td class="whitespace-nowrap px-6 py-4">Mark</td>
                            <td class="whitespace-nowrap px-6 py-4">Văn Hoàng</td>
                            <td class="whitespace-nowrap px-6 py-4">13/06/2023</td>
                            <td class="whitespace-nowrap px-6 py-4">53.000.000 đ</td>
                            <button
                                type="submit"
                                className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-900  mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                xem chi tiết
                              </button>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hoadon;