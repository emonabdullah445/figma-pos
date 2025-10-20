import React from "react";
import { FaSearch } from "react-icons/fa";
const AddStock = () => {
  return (
    <div>
      <div className="pb-2">
        <h1 className="font-bold text-2xl">Add Stock</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-200">
          <div class="flex items-center  bg-[#9C9191] p-2">
            
            <input
              type="text"
              placeholder="Search product..."
              class="w-[400px] p-2 border border-[#A89797] h-9  bg-white  text-black"
            />
          </div>
          <table class="w-full">
            <div class="bg-gray-800 text-white h-9 grid grid-cols-3">
              <div class="p-2 text-center">Product Description</div>
              <div class="p-2 text-center">Company Name</div>
              <div class="p-2 text-center">MRP</div>
            </div>

            <div>
              <div class="bg-[#D9D9D9] h-6"></div>
              <div class="bg-[#CAC7C7] h-6"></div>
              <div class="bg-[#D9D9D9] h-6"></div>
              <div class="bg-[#CAC7C7] h-6"></div>
              <div class="bg-[#D9D9D9] h-6"></div>
              <div class="bg-[#CAC7C7] h-6"></div>
            </div>
          </table>
        </div>

        <div>
          <div className="bg-[#9C9191] mb-1 p-2 space-y-1">
            <div class=" text-white  h-7 flex justify-between">
              <span className="bg-gray-800 font-bold px-2 text-sm">
                Bulk Stock Helper
              </span>
              <span className="bg-gray-800 px-2 text-sm">
                Note: Bulk buy%,Sale%,P-sale%,M-offer% off calculate base on MRP
              </span>
            </div>

            <div class="w-full">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex items-center justify-between">
                    <td class="p-2 font-bold bg-[#CAC7C7] w-[56px] h-[35px]">
                      Buy%
                    </td>
                    <td class="p-2 text-black bg-white w-[78px] h-[35px]">
                      10
                    </td>
                  </div>

                  <div className="flex items-center justify-between">
                    <td class="p-2 font-bold bg-[#CAC7C7] w-[56px] h-[35px]">
                      Sale%
                    </td>
                    <td class="p-2 text-black bg-white w-[78px] h-[35px]">
                      10
                    </td>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                 <div>
                     <td class=" font-bold bg-[#CAC7C7] w-[72px] h-[30px]">P-Sale%</td>
                  <td class="p-2 bg-white w-[66px] h-[35px]">10</td>
                 </div>
                  <div>
                    <td class=" font-bold bg-[#CAC7C7] w-[80px] h-[30px]">M-Offer%</td>
                  <td class="p-2 bg-white w-[121px] h-[35px]">12</td>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default AddStock;
