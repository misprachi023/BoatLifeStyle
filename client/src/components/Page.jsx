import { Box } from "@chakra-ui/react";
import {  useCart } from "react-use-cart";
import { Button, Heading, Text, Flex } from "@chakra-ui/react";
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
        <Button backgroundColor={"black"}
          _hover={"none"}  
         color="white">
          Checkout
        </Button>
        <Button
          margin={"10px"}
          color={"white"}
          _hover={"none"}
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
