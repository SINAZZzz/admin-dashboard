import { Box } from "@mui/material";
import { selectIsLoggedIn } from "../../store/loginSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";

export default function Profile() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <Box>{isLoggedIn ? "Profile" : <Loading />}</Box>;
}
