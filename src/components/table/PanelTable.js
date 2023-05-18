import React from "react";
import WhiteButton from "../smallComponents/whiteButton";
import { FaEdit, FaTrash } from "react-icons/fa";

const PanelTable = ({
  serial,
  picture,
  name,
  description,
  price,
  category,
  sales,
  contents,
}) => {
  return (
    <div className="flex flex-col py-3">
      <div className="overflow-x-auto ">
        <div className="py-2 inline-block min-w-full sm:px-3 lg:px-8 ">
          <div className="overflow-hidden rounded-md">
            <table className="min-w-full bg-green-950  text-white ">
              <thead className="bg-green-700 border-b border-green-800 ">
                <tr className="">
                  <th className="text-sm font-medium w-[5%] px-3 py-4 text-left uppercase">
                    Serial
                  </th>

                  {picture && (
                    <th className="text-sm font-medium  px-3 py-4 text-left uppercase">
                      picture
                    </th>
                  )}
                  {name && (
                    <th className="text-sm font-medium  px-3 py-4 text-left uppercase">
                      Name
                    </th>
                  )}
                  {description && (
                    <th className="text-sm font-medium  px-3 py-4 text-left uppercase">
                      Description
                    </th>
                  )}
                  {category && (
                    <th className="text-sm font-medium  px-3 py-4 text-left uppercase">
                      Categories
                    </th>
                  )}
                  {price && (
                    <th className="text-sm font-medium  px-3 py-4 text-left uppercase">
                      Price
                    </th>
                  )}
                  {sales && (
                    <th className="text-sm font-medium  px-3 py-4 text-left uppercase">
                      sales
                    </th>
                  )}
                  <th className="text-sm font-medium  px-3 py-4 text-left uppercase w-20">
                    Actions
                  </th>
                </tr>
              </thead>
              {contents?.map((content, index) => (
                <tbody key={content._id || index}>
                  <tr className="bg-green-600 border-b border-green-800">
                    <td className="px-3 py-4 text-sm font-medium text-center whitespace-nowrap">
                      {index + 1}
                    </td>
                    {picture && content.imgUrl && (
                      <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                        <img
                          className="w-12 h-12 rounded-md"
                          src={content?.imgUrl}
                          alt={content?.name}
                        />
                      </td>
                    )}
                    {name && content.name && (
                      <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                        {content?.name}
                      </td>
                    )}
                    {description && content.description && (
                      <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                        {content?.description.slice(0, 30)}
                      </td>
                    )}
                    {category && content.category && (
                      <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                        {content?.category}
                      </td>
                    )}
                    {price && content.price && (
                      <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                        {content?.price}
                      </td>
                    )}
                    {sales && content.sales && (
                      <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                        {content?.sales}
                      </td>
                    )}
                    <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                      <WhiteButton
                        css={"text-white bg-green-500 mx-2"}
                        text={"Edit"}
                      >
                        {" "}
                        <FaEdit />{" "}
                      </WhiteButton>
                      <WhiteButton
                        css={"text-white bg-red-500 mx-2"}
                        text={"Edit"}
                      >
                        {" "}
                        <FaTrash />{" "}
                      </WhiteButton>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelTable;
