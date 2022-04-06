import React from "react";

import { openModal } from "@entities/board/model/boards";

import { Button, Flex, Text } from "@shared/ui/atoms";
import { Container } from "@shared/ui/templates";
import { Header } from "../../widgets/header";
import { AddBoard } from "@features/add-board/ui";

import styled from "styled-components";
import { Add } from "@mui/icons-material";

export const HomePage = () => {
    return (
        <>
            <Header />
            <Container>
                <ContainerMain>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text variant="caption">All Boards</Text>
                        <Button
                            onClick={() => openModal()}
                            variant="primary"
                            leftIcon={<Add fontSize="small" />}
                        >
                            Add
                        </Button>
                    </Flex>
                    <AddBoard />
                </ContainerMain>
            </Container>
        </>
    );
};

const ContainerMain = styled.div`
    padding-top: 130px;
    min-height: 100vh;
`;
// export default HomePage;
