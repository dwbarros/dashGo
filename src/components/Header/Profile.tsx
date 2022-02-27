import { Flex, Box, Avatar, Text } from "@chakra-ui/react"


interface ProfileProps {
    showProfileData?: boolean;
}


export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="center">
                    <Text>David Barros</Text>

                    <Text color="gray.300" fontSize="small">
                        dwbarros@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="David Barros"
                src="https://github.com/dwbarros.png"
            />
        </Flex>
    )
}