import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const PrimaryModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  title,
  children,
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative flex h-[90vh] w-[90%] max-w-[1000px] flex-col overflow-y-auto rounded-lg bg-white p-4 pt-0 shadow-lg">
        <div className="sticky top-0 mb-4 flex items-center justify-between bg-white">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-4xl text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="w-full flex-1">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default PrimaryModal;
