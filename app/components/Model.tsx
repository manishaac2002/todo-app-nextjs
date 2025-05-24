import React, { useRef, useEffect } from "react";

interface ModelProps {
  modelOpen: boolean;
}

const Model: React.FC<ModelProps> = ({ modelOpen }) => {

  return (
    <div>
      <dialog id="my_modal_3" className={`model ${modelOpen ? "model-open" :"" }`}>
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
