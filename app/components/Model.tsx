import React, { useRef, useEffect } from "react";

interface ModelProps {
  modelOpen: boolean;
}

const Model: React.FC<ModelProps> = ({ modelOpen }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modelOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [modelOpen]);

  return (
    <div>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Model;
