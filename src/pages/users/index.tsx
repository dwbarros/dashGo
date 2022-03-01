import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import NextLink from 'next/link';
import { Pagination } from "../../components/Pagination";
import { useState } from "react";

type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

type Data = {
    totalCount: number;
    users: User[];
}

export default function UserList() {

    const [page, setPage] = useState(1);

    const data: Data = {
        totalCount: 2,
        users: [{
            id: "001",
            name: "David",
            email: "dwbarros@gmail.com",
            created_at: '07/02/2022',
        }, {
            id: "002",
            name: "Jesus",
            email: "jesus@paraiso.com",
            created_at: "22/02/2022",
        }]
    }

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
                                <Th>Data de cadastro</Th>
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
                                    <Td>{user.created_at}</Td>
                                    <Td>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            cursor="pointer"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                            Editar
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