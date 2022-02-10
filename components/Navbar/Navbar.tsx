import React from "react";

import Link from "next/link";

import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { SECTION_ID } from "constants/sections-id";

type Props = {};

const Navbar = (props: Props) => {
  const items = [
    { name: "Servicios", href: `#${SECTION_ID.SERVICES}` },
    { name: "Galería", href: `#${SECTION_ID.GALLERY}` },
    { name: "Colaboradores", href: `#${SECTION_ID.COLABORATORS}` },
    { name: "Contacto", href: `#${SECTION_ID.COLABORATORS}` },
  ];

  return (
    <Flex
      justify="space-around"
      w="100%"
      h="60px"
      bg="black"
      position="sticky"
      top={0}
      zIndex={999}
    >
      <Center>
        <Text>SHECHE LOGO</Text>
      </Center>
      <Center>
        <Stack direction="row" spacing="24px">
          {items.map(({ name, href }) => (
            <Link key={name} href={`${href}`}>
              {name.toUpperCase()}
            </Link>
          ))}
        </Stack>
      </Center>
    </Flex>
  );
};

export default Navbar;
