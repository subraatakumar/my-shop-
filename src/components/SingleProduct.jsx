import { useEffect, useState } from "react";
import { Box, Image, Badge, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}products/${productId}`)
        .then((data) => {
          setProduct(data?.data);
        });
    }
  }, [productId]);

  if (!product?.title) {
    return <>No Product found with this id</>;
  }
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product?.images} alt={""} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product?.brand} &bull; {product?.category}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {product?.title}
        </Box>

        <Box>
          {product?.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
        <Box>{product?.description}</Box>
        <Heading size="xs" textTransform="uppercase">
          Product Reviews
        </Heading>
        <Box>
          {product?.reviews?.map((review, index) => {
            console.log(product?.reviews);
            return (
              <Box key={index}>
                <Heading size="xs" textTransform="uppercase">
                  {review?.reviewerName}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {review?.comment}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default SingleProduct;
