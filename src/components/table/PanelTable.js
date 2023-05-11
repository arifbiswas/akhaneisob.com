import React from 'react';

const PanelTable = () => {
    return (
        <div class="flex flex-col ">
        <div class="overflow-x-auto ">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div class="overflow-hidden rounded-md">
              <table class="min-w-full bg-green-950  text-white ">
                <thead class="bg-green-600 border-b border-green-800 ">
                  <tr className=''>
                    <th scope="col" class="text-sm font-medium w-[5%] px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                      picture
                    </th>
                    <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                      First
                    </th>
                    <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                      Last
                    </th>
                    <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-green-600 border-b border-green-800">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">1</td>
                    <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                    <img className='w-12 h-12 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkdImF9xoSoIRwmRmmBCV19sCM76lW1qt0g&usqp=CAU" alt="" />
                    </td>
                    <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                     LOl
                    </td>
                    <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PanelTable;