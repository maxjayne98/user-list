import Input from "@/components/Base/Input.tsx";
import { useState } from "react";

interface Props {
  value: string;
  onUpdate: (value: string) => void;
}

const EditableInput = ({ value, onUpdate }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  function toggleOnClick() {
    setIsEditMode((value) => !value);
  }

  function submitChangeOnClick() {
    onUpdate(newValue);
    toggleOnClick();
  }

  function cancelChangeOnClick() {
    setNewValue(value);
    toggleOnClick();
  }

  function updateValueOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewValue(event.currentTarget.value);
  }

  return (
    <div className="flex gap-x-2">
      {isEditMode ? (
        <>
          <Input label="" value={newValue} onChange={updateValueOnChange} />
          <div className="flex gap-x-0.5">
            <button
              className="bg-green-500 p-0.5 text-xxs text-white rounded"
              onClick={submitChangeOnClick}
            >
              Submit
            </button>
            <button
              className="bg-red-500 p-0.5 text-xxs text-white rounded"
              onClick={cancelChangeOnClick}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-primary-500 text-left">{value}</div>
          <button
            className="bg-yellow-500 p-0.5 text-xxs text-white rounded"
            onClick={toggleOnClick}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditableInput;
