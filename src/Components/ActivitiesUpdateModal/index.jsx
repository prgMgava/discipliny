import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useActivities } from "../../Provider/Activities";
import api from "../../Services/api";
import { ModalInput, ModalTitle } from "../HabitCreateModal/style";
import { FiEdit } from "react-icons/fi";

const ActivitiesUpdateModal = ({ activity }) => {
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateActivity } = useActivities();
  const [title, setTitle] = useState(activity.title);
  const [date, setDate] = useState(activity.realization_time);

  const handleSubmit = () => {
    const newActivity = {
      title: title,
      realization_time: date,
      // user: activity.id,
    };

    updateActivity(newActivity, activity.id);
  };

  return (
    <>
      <button onClick={onOpen}>
        <FiEdit />
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>
            <ModalHeader>Editar Atividade</ModalHeader>
          </ModalTitle>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <ModalInput
                ref={initialRef}
                placeholder="Digite uma nova atividade"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div>
                <p>Nova data para realizar:</p>
                <div>
                  <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>Criar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ActivitiesUpdateModal;
