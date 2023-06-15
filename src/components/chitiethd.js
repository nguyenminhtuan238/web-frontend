import React from "react";


function Chitiethd(){
    return(
        <div class="py-5 flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light w-5 overflow-hidden">
                    <thead class="bg-zinc-900 text-white border-b font-medium dark:border-neutral-500">
                        <tr className="px-4 py-6">
                            <th scope="col" class="px-4 py-4">#</th>
                            <th scope="col" class="px-4 py-4">Tên sản phẩm</th>
                            <th scope="col" class="px-4 py-4">Địa chỉ</th>
                            <th scope="col" class="px-4 py-4">Ngày mua hàng</th>
                            <th scope="col" class="px-4 py-4">Số lượng</th>
                            <th scope="col" class="px-4 py-4">Giá tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-4 py-4 font-medium">1</td>
                            <td class="whitespace-nowrap px-4 py-4">Nấm mối đen</td>                      
                            <td class="whitespace-nowrap px-4 py-4">3/2 Xuân Khánh Ninh Kiều Cần Thơ</td>
                            <td class="whitespace-nowrap px-4 py-4">13/06/2023</td>
                            <td class="whitespace-nowrap px-4 py-4">23</td>
                            <td class="whitespace-nowrap px-4 py-4">2.000.000đ</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Chitiethd;