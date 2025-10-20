// SalesDashboard.jsx
import React from 'react';

const SalesDashboard = () => {
  // Mock data for tables
  const availableProducts = [
    { id: 1, desc: 'Product A', company: 'Company X', mrp: '500', inStock: '20' },
    { id: 2, desc: 'Product B', company: 'Company Y', mrp: '300', inStock: '15' },
  ];

  const selectedItems = [
    { id: 1, desc: 'Product A', rate: '450', qty: '2', total: '900' },
    { id: 2, desc: 'Product B', rate: '280', qty: '1', total: '280' },
  ];

  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-4">
        {/* Search Product */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search product..."
              className="pl-8 pr-3 py-2 border rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select className="border px-2 py-2 rounded">
            <option>BTC</option>
          </select>
          <select className="border px-2 py-2 rounded w-32">
            <option>select batch</option>
          </select>
          <button className="bg-green-600 text-white px-3 py-2 rounded font-bold">ADD</button>
        </div>

        {/* Total Display */}
        <div className="ml-auto flex items-center gap-4">
          <div className="bg-yellow-400 text-black px-4 py-2 text-xl font-bold">1001.50</div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Contact number for retarget-sale"
              className="border px-2 py-1 rounded w-48"
            />
            <button className="bg-gray-200 p-1 rounded">
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 014 4v2H8v-2a4 4 0 014-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Two Tables */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Left Table - Available Products */}
        <div className="border rounded overflow-hidden">
          <div className="bg-black text-white text-sm p-2 flex justify-between">
            <span>Product Description</span>
            <span>Company Name</span>
            <span>MRP</span>
            <span>In-Stock</span>
          </div>
          <div className="divide-y divide-gray-200">
            {availableProducts.map((item) => (
              <div key={item.id} className="flex justify-between p-2 text-sm">
                <span>{item.desc}</span>
                <span>{item.company}</span>
                <span>{item.mrp}</span>
                <span>{item.inStock}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Table - Selected Items */}
        <div className="border rounded overflow-hidden">
          <div className="bg-black text-white text-sm p-2 flex justify-between">
            <span>Product Description</span>
            <span>Rate</span>
            <span>QTY</span>
            <span>Total</span>
            <span>Action</span>
          </div>
          <div className="divide-y divide-gray-200">
            {selectedItems.map((item) => (
              <div key={item.id} className="flex justify-between p-2 text-sm">
                <span>{item.desc}</span>
                <span>{item.rate}</span>
                <span>{item.qty}</span>
                <span>{item.total}</span>
                <span>
                  <button className="text-red-500">X</button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t pt-4 mt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="return" className="mr-1" />
            <label htmlFor="return" className="text-sm">Return</label>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Order Number ?"
              className="pl-8 pr-3 py-2 border rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="bg-green-600 text-white px-3 py-2 rounded font-bold">Return Confirm</button>
          <div className="bg-yellow-400 text-black px-4 py-2 text-xl font-bold">1025</div>
          <div className="text-xs">Bill</div>
        </div>

        <div className="flex items-start gap-4">
          {/* Left: Order Table */}
          <div className="border rounded overflow-hidden w-2/3">
            <div className="bg-black text-white text-sm p-2 flex justify-between">
              <span>Product Description</span>
              <span>Company Name</span>
              <span>Rate</span>
              <span>QTY</span>
              <span>Total</span>
            </div>
            <div className="divide-y divide-gray-200">
              {selectedItems.map((item) => (
                <div key={item.id} className="flex justify-between p-2 text-sm">
                  <span>{item.desc}</span>
                  <span>{item.company || 'N/A'}</span>
                  <span>{item.rate}</span>
                  <span>{item.qty}</span>
                  <span>{item.total}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Totals & Sold Out */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-green-600 text-white p-4 rounded">
              <div>Total : 1200 Tk</div>
              <div>Discount : 100 Tk</div>
              <div>Net : 100 Tk</div>
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded font-bold text-center">
              SOLD OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;