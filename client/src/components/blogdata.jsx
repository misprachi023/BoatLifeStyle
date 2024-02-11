import React from "react";
import {
  Flex,
  Button,
  Link,
  Text,
  Image,
  Grid,
  Box,
  HStack,
} from "@chakra-ui/react";

const BlogData = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("https://boatlifestyle.onrender.com/blogs");
        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBlogs();
  }, []);
  return (
    <>
      <Text fontSize={"28px"} padding={"20px"}>
        All <span style={{ fontWeight: "bold" }}> Blogs</span>
      </Text>

      <HStack
        as={"nav"}
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"18px"}
        color={"gray"}
        paddingBottom={"10px"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          All Posts{" "}
        </Button>
        <Link>Accessories</Link>
        <Link>Bluetooth Speaker</Link>
        <Link>Campaign</Link>
        <Link>Cricket</Link>
        <Link>Custom Watch Faces</Link>
      </HStack>

      <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={3}
      >
        {blogs.map((item) => (
          <Box>
            <Box>
              <Image
                src={item.image}
                style={{
                  width: "100%",
                  height: "300px",
                  padding: "5px",
                  border: "10px 10px  0px 0px",
                  borderRadius: "15px",
                }}
              />
            </Box>
            <Text fontWeight={"bold"}>{item.title}</Text>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>{item.date}</Text>
                <Text color={"turquoise"} fontWeight={"bold"}>
                  {item.time}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default BlogData;
