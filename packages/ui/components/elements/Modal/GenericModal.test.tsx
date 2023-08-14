import React from "react";
import { render } from "react-dom";
import Modal from "./GenericModal"; // Update the path to your Modal component

describe("Modal Component", () => {
  it("should render the modal content when isOpen is true", () => {
    const container = document.createElement("div");
    render(
      <Modal isOpen={true} closeModal={() => {}}>
        <div>Modal Content</div>
      </Modal>,
      container
    );

    const modalContent = container.querySelector(".modal-content");
    expect(modalContent).not.toBeNull();
  });

  it("should not render the modal content when isOpen is false", () => {
    const container = document.createElement("div");
    render(
      <Modal isOpen={false} closeModal={() => {}}>
        <div>Modal Content</div>
      </Modal>,
      container
    );

    const modalContent = container.querySelector(".modal-content");
    expect(modalContent).toBeNull();
  });

  it("should call closeModal function when ModalContainer is clicked", () => {
    const closeModalMock = jest.fn();
    const container = document.createElement("div");
    render(
      <Modal isOpen={true} closeModal={closeModalMock}>
        <div>Modal Content</div>
      </Modal>,
      container
    );

    const modalContainer = container.querySelector(".modal-container");
    modalContainer?.dispatchEvent(new MouseEvent("click"));

    expect(closeModalMock).toHaveBeenCalled();
  });

  it("should stop event propagation when ModalContent is clicked", () => {
    const closeModalMock = jest.fn();
    const container = document.createElement("div");
    render(
      <Modal isOpen={true} closeModal={closeModalMock}>
        <div className="modal-content">Modal Content</div>
      </Modal>,
      container
    );

    const modalContent = container.querySelector(".modal-content");
    const eventMock = { stopPropagation: jest.fn() };
    modalContent?.dispatchEvent(new MouseEvent("click", eventMock));

    expect(eventMock.stopPropagation).toHaveBeenCalled();
  });
});
