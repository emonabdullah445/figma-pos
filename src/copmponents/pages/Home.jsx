import { FaSearch } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

import { CiWifiOn } from "react-icons/ci";
const SalesDashboard = () => {
  const availableProducts = [
    {
      id: 1,
      desc: "Product A",
      company: "Company X",
      mrp: "500",
      inStock: "20",
    },
    {
      id: 2,
      desc: "Product B",
      company: "Company Y",
      mrp: "300",
      inStock: "15",
    },
  ];

  const selectedItems = [
    { id: 1, desc: "Product A", rate: "450", qty: "2", total: "900" },
    { id: 2, desc: "Product B", rate: "280", qty: "1", total: "280" },
  ];

  return (
    <div className=" bg-white">
      {/* Top Section */}

      <div className="flex items-center gap-4 justify-between">
        <div className="w-[757px] ">
          <div className="flex items-center gap-2">
            <div className=" h-14 flex items-center">
              <div className="p-2 h-9 bg-[#CFCFCF] ">
                <FaSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search product..."
                className="pl-8 h-9 w-[357px] pr-3 py-1 border border-gray-300   focus:outline-none focus:ring-2 "
              />
            </div>
            <div className="flex items-center">
              <p className="h-9 bg-[#CFCFCF] w-[66px] flex items-center justify-center text-center text-sm font-bold">
                BTC
              </p>

              <select className="h-9 bg-white border border-gray-300 w-[214px] flex items-center justify-center text-start text-sm  text-gray-00 px-4 font-bold">
                <option>select batch</option>
              </select>
              <p className="h-9 bg-[#CFCFCF] w-[66px] flex items-center justify-center text-center text-sm font-bold">
                ADD
              </p>
            </div>
          </div>

          <div className=" w-[393px] flex items-center justify-between">
            <div className="flex items-center">
              <label className=" text-xs font-medium bg-[#CFCFCF] text-black h-9 w-[48px] flex justify-center items-center">
                QTY*
              </label>
              <input
                type="text"
                defaultValue="1000"
                className=" p-1 border  bg-white w-[58px] h-9 "
              />
            </div>
            <div className="flex items-center">
              <label className=" text-xs font-medium bg-[#CFCFCF] text-black h-9 w-[48px] flex justify-center items-center">
                <MdAttachMoney size={20} />
              </label>
              <input
                type="text"
                defaultValue="1000"
                className=" p-1 border  bg-white w-[71px] h-9 "
              />
              <label className=" text-xs font-medium bg-[#CFCFCF] text-black h-9 w-[48px] flex justify-center items-center">
                10%
              </label>
            </div>
            <div className=" text-xs font-medium bg-[#05791E] text-black h-9 w-[107px] flex justify-center items-center">
              Add
            </div>
          </div>
          <div className="  overflow-hidden mt-2">
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
        </div>

        <div className="w-[596px] ">
          <div className="ml-auto flex items-center gap-4">
            <div className="bg-yellow-400 w-[250px] h-[93px] flex items-center justify-center text-black px-4 py-2 text-xl font-bold">
              1001.50
            </div>
            <div className="flex items-end top-6.5 relative">
              <input
                type="text"
                placeholder="Contact number for retarget-sale"
                className="border px-2 py-1  w-[269px] h-9"
              />
              <div className="p-2 h-9 bg-[#CFCFCF] ">
                <IoPersonCircle size={20} />
              </div>
            </div>
          </div>

          <div className="  overflow-hidden mt-2">
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
      </div>

      <div className="flex  mt-20 gap-4 justify-between">
        <div className="w-[850px] ">
          <div className="border-t">
            <div className="h-[75px] bg-[#2D2A2A] flex items-center justify-between">
              <div className="p-2 flex flex-col ">
                <div className="flex items-center gap-4">
                  <div className=" h-14 flex items-center">
                    <input
                      type="text"
                      placeholder="Order Number"
                      className="pl-8 h-9 w-[357px] pr-3 py-1 bg-[#D9D9D9] border border-gray-300   focus:outline-none focus:ring-2 "
                    />
                    <div className="p-2 h-9 bg-[#CFCFCF] ">
                      <FaSearch size={20} />
                    </div>
                  </div>
                  <div className="w-[113px] text-[12px] text-white h-9 flex items-center justify-center bg-[#05791E]">
                    Return Confirm
                  </div>
                </div>
                <div className="pb-2">
                  <div className="flex text-white">
                    <button className="flex items-center">
                      <MdOutlineCheckBoxOutlineBlank className="text-xl" />
                      <span>Return</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 ">
                      <MdPersonOutline className="text-xl" />
                      <span>01616815056</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 ">
                      <BsCartPlus className="text-xl" />
                      <span>Home-Delivery</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[139px] flex flex-col items-center justify-center h-[75px] bg-[#FFDF00]">
                <p className="font-bold text-2xl">1025</p>
                <p>Bill</p>
              </div>
            </div>

            <div className="  overflow-hidden w-full ">
              <div className="bg-black text-white text-sm p-2 flex justify-between">
                <span>Product Description</span>
                <span>Company Name</span>
                <span>Rate</span>
                <span>QTY</span>
                <span>Total</span>
              </div>
              <div className="divide-y divide-gray-200">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between p-2 text-sm"
                  >
                    <span>{item.desc}</span>
                    <span>{item.company || "N/A"}</span>
                    <span>{item.rate}</span>
                    <span>{item.qty}</span>
                    <span>{item.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[596px] border-t ">
          <div className="flex-1 flex justify-between mt-4">
            <div className="bg-green-600 w-[286px] h-[104px] text-white p-4">
              <div>Total : 1200 Tk</div>
              <div>Discount : 100 Tk</div>
              <div>Net : 100 Tk</div>
            </div>
            <button className="bg-green-600 w-[225px] h-[54px] text-white px-6 py-3  font-bold text-center">
              SOLD OUT
            </button>
          </div>
        </div>
      </div>

      <div className="w-[323px] h-[65px] flex absolute bottom-14 right-4">
        <div className="w-[75px]  h-[65px] bg-black flex items-center justify-center">
          <CiWifiOn size={24} color="white" />
        </div>
        <div className="w-[173px] h-[65px] p-1 bg-[#D9D9D9]">
          <p>Updated At</p>
          <p>2025 /10/20 20:22:60</p>
        </div>
        <div className="w-[75px] h-[65px] bg-black flex items-center justify-center">
          <CiWifiOn size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
