import React from "react";

const Thongtin = () => {
    return (
        <div class="w-full py-4">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-8">
                <table class="min-w-full divide-y divide-gray-200">
                <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-2 text-left">STT</th>
                    <th class="py-3 px-6 text-left">Tên khách hàng</th>
                    <th class="py-3 px-6 text-left">Hình ảnh</th>
                    <th class="py-3 px-6 text-left">Email</th>
                    <th class="py-3 px-6 text-left">Ngày tháng năm sinh</th>
                    <th class="py-3 px-6 text-left">Số đơn hàng</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                    <td class="px-2 py-4 whitespace-nowrap">
                        1
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        Row 1, Column 2
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        Row 1, Column 2
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Thongtin;