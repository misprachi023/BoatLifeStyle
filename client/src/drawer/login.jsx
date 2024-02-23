import React from "react";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

import { FaRegUser } from "react-icons/fa";
import Createuser from "./createuser";
const Login = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const toast = useToast();
  const handleClick = async () => {
    await axios
      .get("https://boatlifestyle.onrender.com/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.msg == "Logout successful") {
          toast({
            title: "Logout",
            description: "You are logged out",
            status: "success",
          });
          setIsLogin(false);
        } else {
          toast({
            title: "Logout failed",
            description: err.response.data.msg || "An error occurred",
            status: "error",
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Logout failed",
          description: "try again",
          status: "error",
        });
        console.log(err);
      });
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button backgroundColor={"white"}>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/user_6be0d230-5262-4e4c-94b2-e796ba39b697.png?v=1663761259"
              width="100%"
              alt=""
            />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader style={{ fontWeight: "bold" }}>
              Hi {isLogin ? localStorage.getItem("user") : "Boathead!"}
              {isLogin && (
                <>
                  <Link to="/myorder" display={"block"}>
                    Manage your Order
                  </Link>
                  <Button
                    onClick={handleClick}
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      padding: "10px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>{!isLogin && <Createuser />}</PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default Login;
