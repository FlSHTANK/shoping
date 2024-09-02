"use client";

import { Stack, Typography, Grid } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  const [grandTotalPrice, setGrandTotalPrice] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotal(total + 1);
    setGrandTotalPrice(grandTotalPrice + price);
  };

  const handleDecremental = (price: number) => {
    if (total > 0) {
      setTotal(total - 1);
      setGrandTotalPrice(grandTotalPrice - price);
    }
  };


  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41900, imageUrl: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-family-select?wid=4000&hei=3794&fmt=jpeg&qlt=90&.v=1692893972634" },
    { itemname: "iPhone 15", price: 32900, imageUrl: "https://media.studio7thailand.com/132837/iPhone-15-Green-square_medium.jpg" },
    { itemname: "iPad Pro", price: 39900, imageUrl: "https://mediam.dotlife.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/t/h/th_ipad_pro_cellular_12-9_in_6th_gen_silver_pdp_image_5g_position-1b_1_1_1.jpg" },
    { itemname: "iPad Air", price: 23900, imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-13inch-space-gray-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5VE52YTlHWkltOWpNQVF4Y3VwTzdmWGl1WEttbFlFejZ0L0VqVlhGc0pKT3BmbTBuZmdjbmVyUEN6U1pnb2VjUDh3Qjhvd1BnZkhnUFFYU1JJMGh5alFTUzBLNXZ0QTA0SmlDNU1IU2czNjMzNXFNVzc5YkZmK2I4YzJ4ZndkZUdjPQ==&traceId=1" },
    { itemname: "iPad", price: 13900, imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=eDJDc00wczl1QWk5QmpVYitFNXQwOVgrSXpWVEhWaW9YTGlWRHFoSHU0OG5mNEIvMUVsODRNNlRVVkNDQ2g4akpxbExkakZwOW1FVDBpNHlyYVFtRnM2c3NSYUM4YjA0RTQxLytvRzE4M0EvQzZsTkY3bUlhQXlnYVQ4OG1ybUl3bnNtc1k3Q0ZsRTVFSitUaitMYlFBPT0=&traceId=1" },
    { itemname: "iPad mini", price: 19900, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95hNyOKBzf6sLALHjzFc47XqQzplsXcCD-g&s" },
    { itemname: "MacBook Air", price: 39900, imageUrl: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" },
    { itemname: "MacBook Pro", price: 59900, imageUrl: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200" },
    { itemname: "iMac", price: 48000, imageUrl: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618" },
    { itemname: "Mac mini", price: 20900, imageUrl: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341" },
    { itemname: "Mac Studio", price: 74900, imageUrl: "https://i0.wp.com/sixcolors.com/wp-content/uploads/2022/03/Apple-Mac-Studio-back-white-6c.jpg?ssl=1" },
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Grid container spacing={2}>
        {myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            imageUrl={item.imageUrl}
            handleIncremental={() => handleIncremental(item.price)}
            handleDecremental={() => handleDecremental(item.price)}
          />
        ))}
      </Grid>
      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Typography variant="h4">Total Items: {total}</Typography>
        <Typography variant="h4">
          Total Price: {grandTotalPrice.toLocaleString()} บาท
        </Typography>
      </Stack>
    </div>
  );
}
