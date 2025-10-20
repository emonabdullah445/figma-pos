import { FaSearch } from "react-icons/fa";
const AddStock = () => {
  // Mock data for tables
  const products = [
    { id: 1, desc: "Product A", company: "Company X", mrp: "$500" },
    { id: 2, desc: "Product B", company: "Company Y", mrp: "$300" },
    { id: 3, desc: "Product C", company: "Company Z", mrp: "$750" },
    { id: 4, desc: "Product D", company: "Company Z", mrp: "$750" },
    { id: 5, desc: "Product E", company: "Company Z", mrp: "$750" },
    { id: 6, desc: "Product F", company: "Company Z", mrp: "$750" },
    { id: 7, desc: "Product G", company: "Company Z", mrp: "$750" },
  ];

  const recentStock = [
    {
      id: 1,
      desc: "Product A",
      company: "Company X",
      mrp: "$500",
      stock: "50",
    },
    {
      id: 2,
      desc: "Product B",
      company: "Company Y",
      mrp: "$300",
      stock: "25",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <h2 className="text-lg font-semibold mb-4">Add Stock</h2>

      {/* Main Layout - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="relative bg-[#9C9191] p-2 h-14 flex items-center">
            <div className="p-2 h-9 bg-[#CFCFCF] ">
              <FaSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search product..."
              className="pl-8 h-9 pr-3 py-1 border border-gray-300  w-64 focus:outline-none focus:ring-2 "
            />
          </div>

          {/* Product Table */}
          <div className="border  overflow-hidden">
            <div className="bg-black text-white text-sm p-2 flex justify-between">
              <span>Product Description</span>
              <span>Company Name</span>
              <span>MRP</span>
            </div>
            <div className="divide-y divide-gray-200">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex  justify-between p-2 text-sm hover:bg-gray-50"
                >
                  <span>{item.desc}</span>
                  <span>{item.company}</span>
                  <span>{item.mrp}</span>
                </div>
              ))}
            </div>
          </div>
          {/* RECENT STOCK SECTION */}
          <div className="mt-8">
            <h3 className="text-md font-semibold mb-3">Recent Stock</h3>
            <div className="border  overflow-hidden">
              <div className="bg-black text-white text-sm p-2 flex justify-between">
                <span>Product Description</span>
                <span>Company Name</span>
                <span>MRP</span>
                <span>Stock</span>
              </div>
              <div className="divide-y divide-gray-200">
                {recentStock.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between p-2 text-sm hover:bg-gray-50"
                  >
                    <span>{item.desc}</span>
                    <span>{item.company}</span>
                    <span>{item.mrp}</span>
                    <span>{item.stock}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Bulk & Single Stock Forms */}
        <div className="space-y-6">
          {/* Bulk Stock Helper */}

          <div className="bg-[#9C9191] p-3 rounded">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-xs text-white bg-black w-[134px] h-9 flex justify-center items-center">
                Bulk Stock Helper
              </span>
              <span className="text-xs bg-black text-white px-2 h-9 w-[488px] flex justify-center items-center">
                Note: Bulk buy%, Sale%, P-Sale%, M-Offer% off calculate base on
                MRP
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-14">
                    Buy%
                  </label>
                  <input
                    type="text"
                    defaultValue="122 x 17"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-14"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-14">
                    Sale%
                  </label>
                  <input
                    type="text"
                    defaultValue="10"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-14"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex items-center ">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-14">
                    P-Sale%
                  </label>
                  <input
                    type="text"
                    defaultValue="479 x 17"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-14"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-[76px]">
                    M-Offer %
                  </label>
                  <input
                    type="text"
                    defaultValue="12"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-[121px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-[76px]">
                  Exp*
                </label>
                <input
                  type="text"
                  placeholder="YYYY/MM/DD"
                  className="flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-[215px]"
                />
              </div>
              <div className="flex items-center">
                <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-[76px]">
                  BTC
                </label>
                <input
                  type="text"
                  placeholder="GB-YYYY/MM/DD"
                  className="flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-[215px]"
                />
              </div>
            </div>
          </div>

          {/* Single Stock */}
          <div className="bg-[#9C9191] p-3 ">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-bold text-xs text-white bg-black w-[134px] h-9 flex justify-center items-center">
                Single Stock
              </span>
              <span className="text-xs bg-black  text-white px-2 h-9 w-[488px] flex justify-center items-center">
                Note: If you stock as bulk then price and other input will place
                auto
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-14">
                    Buy%
                  </label>
                  <input
                    type="text"
                    defaultValue="122 x 17"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-14"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-14">
                    Sale%
                  </label>
                  <input
                    type="text"
                    defaultValue="10"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-14"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex items-center ">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-14">
                    P-Sale%
                  </label>
                  <input
                    type="text"
                    defaultValue="479 x 17"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-14"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-[76px]">
                    M-Offer %
                  </label>
                  <input
                    type="text"
                    defaultValue="12"
                    className=" flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-[121px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-[76px]">
                  Exp*
                </label>
                <input
                  type="text"
                  placeholder="YYYY/MM/DD"
                  className="flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-[215px]"
                />
              </div>
              <div className="flex items-center">
                <label className="flex justify-center text-xs text-center items-center  font-medium bg-[#CFCFCF] h-9 w-[76px]">
                  BTC
                </label>
                <input
                  type="text"
                  placeholder="GB-YYYY/MM/DD"
                  className="flex justify-center text-xs text-center items-center  font-medium bg-white h-9 w-[215px]"
                />
              </div>
            </div>

            <div>
              <div className="mb-2">
                
                <input type="checkbox" className="mr-2" /> Auto BTC
              </div>
              <div className="flex items-center">
                <label className=" text-xs font-medium bg-[#CFCFCF] text-black h-9 w-[67px] flex justify-center items-center">QTY*</label>
                <input
                  type="text"
                  defaultValue="1000"
                  className=" p-1 border rounded bg-white w-[206px] h-9 "
                />
              </div>
            </div>
            <div className="flex my-6 items-center justify-center">
              <button className="w-[264px] bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700">
                ADD STOCK
              </button>
            </div>
          </div>

          {/* ADD STOCK Button */}
        </div>
      </div>
    </div>
  );
};

export default AddStock;
