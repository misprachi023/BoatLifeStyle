import axios from "axios";
import { Box } from "@chakra-ui/react";
import {  useCart } from "react-use-cart";
import { Button, Heading, Text, Flex } from "@chakra-ui/react";
import useRazorpay from "react-razorpay";
function Page() {
  const { addItem } = useCart();
  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1,
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
    },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
function CartMain() {
  const Razorpay = useRazorpay();
  const {
    isEmpty,
    emptyCart,
    metadata,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const totalCartPrice = items.reduce(
    (total, item) => total + parseInt(item.price.substring(1)) * item.quantity,
    0
  );
  if (isEmpty) return <Heading size="sm"></Heading>;
  const checkoutHandler = async ({ name, amount }) => {
    const {
        data: { order },
    } = await axios.post(`https://boatlifestyle.onrender.com/payment/checkout`, {
        name,
        amount,
    });
    var options = {
        key: "rzp_test_lDKz5Mp6nAXD0O",
        amount: order.amount,
        currency: order.currency,
        name: "BoAt LifeStyle",
        description: "Test Transaction",
        image: "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434",
        order_id: order.id,
        callback_url: "https://boatlifestyle.onrender.com/payment/verification",
        prefill: {
            name: "xyzxyz",
            email: "xyz.soni@example.com",
            contact: "9000090000",
        },
        notes: {
            address: "Razorpay Corporate Office",
        },
        theme: {
            color: "#3399CC",
        },
    };
    console.log(window.Razorpay);
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }
  return (
    <>
      <Box
        p={4}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <Heading size={["xs", "sm", "md", "md", "md"]}>
          Cart ({totalUniqueItems})
        </Heading>
        <Box>
          {console.log(items)}
          {items.map((item) => (
            <Box padding={2} borderBottom="1px solid gray" key={item.id}>
              <Box width="70px">
                <img src={item.image} alt="" />
              </Box>
              <Heading size="sm">
                {item.title} - ${item.price.substring(1)}
              </Heading>
              <Text>
                {item.quantity} x {item.price} &mdash;
              </Text>
              <Flex justifyContent="space-between">
                <Box
                  borderRadius={5}
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  gap={10}
                >
                  <Button
                    fontSize={"25px"}
                    background={"Ivory"}
                    color={"black"}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Text
                    fontSize={"20px"}
                    background={"Ivory"}
                    color={"black"}
                    display={"inline"}
                  >
                    {item.quantity}
                  </Text>
                  <Button
                    background={"Ivory"}
                    color={"black"}
                    fontSize={"25px"}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </Box>
                <Button
                  backgroundColor={"black"}
                  color="white"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        bg="white"
        position={"sticky"}
        bottom={"0px"}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        p={4}
      >
        <Text>Total: ${totalCartPrice}</Text>
        <Button 
        onClick={() => checkoutHandler({ name: "BoAt LifeStyle", amount: totalCartPrice })}
        backgroundColor={"black"}
          _hover={"DarkSlateGray"}  
         color="white">
          Checkout 
        </Button>
        <Button
          margin={"10px"}
          color={"white"}
          _hover={"IndianRed"}
          width={"45%"}
          backgroundColor={"red"}
          onClick={() => emptyCart()}
        >
          Empty
        </Button>
      </Box>
    </>
  );
}
export { Page, CartMain };
