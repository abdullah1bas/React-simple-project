import { Box, Typography } from "@mui/material";
import "./Home.css";

import React, { useEffect, useState } from "react";
import Paperr from "MUI-components/Paperr";
import Swal from "sweetalert2";



const Home = () => {
  const [myData, setMyData] = useState([]);
  const totalPrice = myData.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);

  useEffect(() => {
    getAllPaper();
  }, []); 

  const getAllPaper = () => {
    fetch("http://localhost:9000/transaction")
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }
  const deletePaper = (item) => {
    Swal.fire({
      title: `Are you Sure To Delete ${[item.title]}?`,
      showCancelButton: true,
      customClass: {
        container: 'aleart',
      },
    }).then((data) => {
      data.isConfirmed &&
        fetch(`http://localhost:9000/transaction/${item.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => getAllPaper());
    });
  };

  // console.log(myData)
  return (
    <Box>
      {myData.map((paper) => {
        return <Paperr paper={paper} deletePaper={deletePaper} key={paper.id} price={paper.price} name={paper.title} />;
      })}

      <Typography
        textAlign='center'
        mt='55px'
        variant="h6"
      >
        👉 You Spend ${totalPrice}
      </Typography>

    </Box>
  );
};

export default Home;
