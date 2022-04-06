import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Button } from "@shared/ui/atoms";
import { Close } from "@mui/icons-material";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    animation-name: appear;
    animation-duration: 300ms;

    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ModalDialog = styled.div`
    width: 100%;
    padding: 25px;
    overflow: hidden;
    width: 310px;
    max-width: 700px;
    background: #fff;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    animation-name: slide-in;
    animation-duration: 0.5s;

    @keyframes slide-in {
        from {
            transform: translateY(-150px);
        }
        to {
            transform: translateY(0);
        }
    }
`;

export const Modal = ({ isOpen, onClose, children }) => {
    const handleEscape = React.useCallback(
        (event) => {
            if (event.keyCode === 27) onClose();
        },
        [onClose]
    );

    React.useEffect(() => {
        if (isOpen) document.addEventListener("keydown", handleEscape, false);
        return () => {
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [handleEscape, isOpen]);

    return ReactDOM.createPortal(
        isOpen ? (
            <ModalOverlay>
                <ModalDialog>
                    <CloseButton onClick={onClose} leftIcon={<Close />} />
                    {children}
                </ModalDialog>
            </ModalOverlay>
        ) : null,
        document.getElementById("modal-root")
    );
};

export const CloseButton = styled(Button)`
    position: absolute;
    top: 11px;
    right: 11px;
    z-index: 2;
    padding: 0;
`;
