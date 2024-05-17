import { Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../utils/constants";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/"> </NavLink>
      Navbar
    </Stack>
  );
};

export default Navbar;
