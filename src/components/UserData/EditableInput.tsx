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
          <Input
            label=""
            value={newValue}
            onChange={updateValueOnChange}
            data-cy="user-new-value-input"
          />
          <div className="flex gap-x-0.5">
            <button
              className="bg-green-500 p-0.5 text-xxs text-white rounded"
              data-cy="user-submit-edit-btn"
              onClick={submitChangeOnClick}
            >
              Submit
            </button>
            <button
              className="bg-red-500 p-0.5 text-xxs text-white rounded"
              data-cy="user-cancel-edit-btn"
              onClick={cancelChangeOnClick}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-primary-500 text-left" data-cy="user-row-value">
            {value}
          </div>
          <button
            className="bg-yellow-500 p-0.5 text-xxs text-white rounded"
            data-cy="user-edit-btn"
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
