import React from 'react';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface ModalProps {
  title: string;
  icon: React.ReactNode; // Icon to render
  buttons: (close: () => void) => React.ReactNode; // Buttons to render inside the modal
  content: React.ReactNode; // Content to render inside the modal
}

export const GenericModal = ({
  title,
  icon,
  buttons,
  content,
}: ModalProps): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title={title} centered>
        {content}
        {buttons(close)}
      </Modal>

      <Button onClick={open}>{icon}</Button>
    </>
  );
};
