import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";
import NextLink from 'next/link';
import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { data } from "../../services/api";


export default function UserList() {

    const [page, setPage] = useState(1);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                cursor="pointer"
                                leftIcon={<Icon
                                    as={RiAddLine}
                                />}
                            >
                                Criar novo
                            </Button>
                        </NextLink>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de cadastro</Th> }
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.users.map(user => (
                                <Tr key={user.id}>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color="purple.400">
                                                <Text fontWeight="bold">{user.name}</Text>
                                            </Link>
                                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>{user.created_at}</Td> }
                                    <Td>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            cursor="pointer"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                            iconSpacing={isWideVersion ? '2' : '' }
                                        >
                                            {isWideVersion ? 'Editar' : '' }
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <Pagination
                        totalCount={data.totalCount}
                        currentPage={page}
                        onPageChange={setPage}
                    />
                </Box>
            </Flex>
        </Box>
    )
}