import {
  Modal,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Alert, AlertIcon, Button, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";

export default function ButtonEliminar({ botonEliminar, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alertEliminar, setAlertEliminar] = useState(false);

  return (




    <td className="btnDelete">
      <button
        onClick={() => {
          onOpen()
        }}
        className="button-86"
        >
        <FcDeleteDatabase className="iconedit"></FcDeleteDatabase>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalFooter className="modalEliminar">
          <ModalCloseButton className="ModalCloseBoton2" />
          <Text className="textoModalEliminar" >¿Estas seguro que deseas eliminar esta tarea?</Text>
            <Button className="botonNO" mr={3} onClick={onClose}>
              NO
            </Button>
            <Button
              className="botonSi"
              onClick={() => {
                botonEliminar(id._id);
                onClose()
                setTimeout(() => {
                  setAlertEliminar(true);
                  setTimeout(() => {
                    setAlertEliminar(false);
                  }, 1500);
                }, 100);
              }}
              >
              Si
            </Button>
          </ModalFooter>
      </Modal>
      {alertEliminar ? (
          <Alert
            status="warning"
            variant="solid"
            color="white"
            background="red"
            width={"53%"}
            pos="absolute"
            top="400"
            left="-575"
            height={"80"}
          >
            <AlertIcon boxSize={"75%"} width="12%" />
            Tarea eliminada
          </Alert>
        ) : null}
    </td>

                
  );
}
