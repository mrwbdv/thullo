import React from "react";
import { Modal } from "@shared/ui/molecules";
import { $isOpenModal, closeModal } from "@entities/board/model/boards";
import { useStore } from "effector-react";
import { Add, Image, Lock } from "@mui/icons-material";
import { Button, Flex, Input } from "@shared/ui/atoms";
import styled from "styled-components";
// import { SearchBar } from "@shared/ui/organisms";

export const AddBoard = () => {
    const isOpen = useStore($isOpenModal);
    const imageRef = React.useRef(null);
    const [cover, setCover] = React.useState(
        "https://images.unsplash.com/photo-1649172862637-082f8449ec8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1777&q=80"
    );
    const [name, setName] = React.useState("");
    const handleImageChange = (e: any) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setCover(url);
    };

    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div
                style={{
                    width: "100%",
                    height: 130,
                    marginBottom: 12,
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: 12,
                }}
            >
                <img
                    src={cover}
                    alt=""
                    className="img-cover"
                    style={{
                        borderRadius: 12,
                        objectFit: "fill",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                />
            </div>

            <input
                name="image"
                type="file"
                ref={imageRef}
                onChange={handleImageChange}
                hidden
            />
            {/* <Input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add board name"
                variant="outlined"
            /> */}

            <Input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add board name"
                variant="outlined"
                mb={20}
            />
            <Flex justifyContent="space-between" mb={4}>
                <Button
                    leftIcon={<Image fontSize="small" />}
                    variant="secondary"
                >
                    Cover
                </Button>
                <Button
                    leftIcon={<Lock fontSize="small" />}
                    variant="secondary"
                >
                    Private
                </Button>
            </Flex>

            <Flex justifyContent="end" alignItems="center">
                <Button variant="transparent">Cancel</Button>
                <Button variant="primary" leftIcon={<Add fontSize="small" />}>
                    Create
                </Button>
            </Flex>
        </Modal>
    );
};

const AddButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`;
