import { Box, Image, Badge, Heading, Text, Button } from "@chakra-ui/react";
import truncateString from "../utils/helpers/truncateString";
import { useNavigate } from "react-router-dom";

function SingleProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="250px">
      <Image src={product.images} alt={""} />

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
          {product.title}
        </Box>

        <Box>
          {product?.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
        <Box>{truncateString(product?.description, 40)}</Box>
        <Button
          colorScheme="teal"
          size="xs"
          onClick={() => {
            navigate(`/product/${product?.id}`);
          }}
        >
          Details
        </Button>
      </Box>
    </Box>
  );
}

export default SingleProductCard;
