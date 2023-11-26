import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
// import { addItem } from "../../redux/actions";


function NavbarHOC({ children }) {
  const state = useSelector((state)=>state.addItem)
  const routes = [
    {
      name: "home",
      path: "/"
    },
    {
      name: `Cart(${state.length})`,
      path: "/cart"
    },
    
  ];
  const navigate = useNavigate();
  const reRoute = (path) => {
    navigate(path);
  };

  const s1 = {
    color: "#740EB8",
    "&:hover": {
      color: "#340EB0"
    },
    width: "20px",
    display: "flex",
    flexDirection: { lg: "row", sm: "column", xs: "column" },
    fontSize: { lg: "15px", sm: "16px", xs: "11px" },
    textTransform: { lg: "uppercase", sm: "lowercase", xs: "lowercase" },
    wordWrap: "break-word",
  };

  return (

    
    <div>
      <Box sx={{ height: { lg: '70px', sm: "0px", xs: "0px", md: "70px" } }}>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "white",
            left: "0",
            top: { xs: "auto", lg: "0", sm: "auto", md: "0" },
            bottom: { xs: "0", lg: "auto", sm: "0", md: "auto" }
          }}
        >
          <Toolbar>
            <Grid container alignItems="center" justifyContent="center" columnSpacing={2}  >
              {routes.map((route, index) => {
                return (
                  <Grid item xs={3} lg={2} key={index} alignItems="center" justifyContent="center" >
                    <Button sx={s1} onClick={() => reRoute(route.path)} >
                       {route.name}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ margin: "30px auto", maxWidth: "1100px", width: "90%" }}>
        {children}
      </div>
    </div>
  );
}

export default NavbarHOC;