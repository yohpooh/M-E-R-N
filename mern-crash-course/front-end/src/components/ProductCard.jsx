import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Dialog,
  Portal,
  CloseButton,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "./ui/color-mode.jsx";
import { useProductStore } from "../store/product.js";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      console.log("Error!! ", message);
    } else {
      console.log("Success!! ", message);
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      console.log("Error!! ", message);
    } else {
      console.log("Success!! ", message);
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>EDIT</Button>
            </Dialog.Trigger>

            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>UPDATE PRODUCT</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Input
                      placeholder="Product Name"
                      name="name"
                      value={updatedProduct.name}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Price"
                      name="price"
                      type="number"
                      value={updatedProduct.price}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          price: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Image URL"
                      name="image"
                      value={updatedProduct.image}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          image: e.target.value,
                        })
                      }
                    />
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">CANCEL</Button>
                    </Dialog.ActionTrigger>

                    <Dialog.ActionTrigger asChild>
                      <Button
                        onClick={() =>
                          handleUpdateProduct(product._id, updatedProduct)
                        }
                      >
                        UPDATE
                      </Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>

          <Button onClick={() => handleDeleteProduct(product._id)}>
            DELETE
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
