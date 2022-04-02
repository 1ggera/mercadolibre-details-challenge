import React from "react";
import {Container, Text, Stack, Icon, Input, StackDivider, Box, Image} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" padding={4}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            {/* stack de row completo */}
            <Stack direction="row" justifyContent="space-between">
              {/* <Stack direction={{base: "column", md: "row"}} justifyContent="space-between"> */}
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="md"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={690}
                  padding={2}
                  width="100%"
                >
                  <Input paddingX={2} variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="gray.400" height={6} width={6} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={3}>
                <Icon as={FiPrinter} height={9} width={9} />
                <Text fintSize="lg" fontWeight="410">
                  Comprá tu Point y QR a $189
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={GoLocation} height={6} width={6} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Buenos Aires 1759
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.710" direction="row" fonSize="sm" spacing={5}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row" fontSize="sm" spacing={6}>
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={IoCartOutline} height={6} width={6} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
