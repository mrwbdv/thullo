import { Button, Flex, Text } from "@shared/ui/atoms";
import { Modal } from "@shared/ui/molecules";
import { Container } from "@shared/ui/templates";
import React from "react";
import styled from "styled-components";
// import { Card } from "../../shared/atoms/card/card";
import { Header } from "../../widgets/header";

export const HomePage = () => {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <>
      <Header />
      <Container>
        <ContainerMain>
          <Flex justifyContent="space-between" alignItems="center">
            <Text variant="caption">All Boards</Text>
            <Button>Add</Button>
          </Flex>
          <Modal />
        </ContainerMain>
      </Container>
      {/* <BoardCard /> */}
      {/* <Card>Hello</Card> */}
    </>
  );
};

const ContainerMain = styled.div`
    padding-top: 130px;
    min-height: 100vh;
`;
// export default HomePage;
