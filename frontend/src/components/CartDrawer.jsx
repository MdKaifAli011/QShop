import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCartOutline, IoClose } from "react-icons/io5";
import Divider from "@mui/material/Divider";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const sampleProducts = [
    {
      image: "https://example.com/products/shirt.jpg",
      title: "cotton casual shirt",
      description:
        "comfortable and breathable cotton casual shirt for daily wear",
      category: "clothing",
      brand: "united colors",
      price: 999,
      salePrice: 799,
      totalStock: 50,
      averageReview: 4.2,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation" >
      <div className="p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cart</h1>
        <IoClose size={30} onClick={toggleDrawer(false)}/>
      </div>

      <Divider />

      <div className="p-5">
        {sampleProducts.map((ele) => {
          return (
            <div
              key={ele.id}
              className="p-2 flex gap-1 rounded shadow-md border border-gray-200"
            >
              <img
                src="https://media.istockphoto.com/id/137996281/photo/blue-t-shirt.jpg?s=612x612&w=0&k=20&c=7D3z5wCRV3Duvyc8lLFJVAFqkWMg4xHcDieuqspq8zk="
                alt=""
                className="border h-20 w-20 object-center object-cover"
              />
              <div className="border w-full ps-1 text-black">
                <h1 className="capitalize font-semibold">{ele.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className="mt-1">
        <IoCartOutline />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
