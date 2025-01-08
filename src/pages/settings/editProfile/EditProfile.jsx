import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import "./EditProfile.scss";
import FormFields from "../../../data/ProfileFormFields.json";
import InputField from "../../../components/common/input/InputField";
import PrimaryButton from "../../../components/common/button/Button";
import { validateFieldData } from "../../../utils/utils";
import AvatarUpload from "../../../components/common/avatarUpload/AvatarUpload";

const initialFormState = Object.keys(FormFields).reduce((acc, key) => {
  acc[key] = { value: "", error: false };
  return acc;
}, {});
const EditProfile = () => {
  const [fieldValues, setFieldValues] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log({ fieldValues });

  const handleSubmit = () => {
    setIsSubmitting(true);
    const { updatedValues, isValid } = validateFieldData(fieldValues);
    setFieldValues(updatedValues);
    if (!isValid) {
      console.log("Form Submitted Failed");
      return;
    }
    console.log("Form Submitted Successfully");
    setFieldValues(initialFormState);
  };

  const handleFieldChange = (field, value) => {
    setIsSubmitting(false);
    setFieldValues((prev) => ({ ...prev, [field]: { value, error: false } }));
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        spacing={2}
        justifyContent={"space-between"}
      >
        <AvatarUpload />
        <Stack
          gap={2}
          direction={"row"}
          className="editProfileForm"
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          {Object.keys(FormFields).map((field) => {
            return (
              <InputField
                key={field}
                field={FormFields[field]}
                onChange={(val) => handleFieldChange(field, val)}
                error={fieldValues[field].error}
              />
            );
          })}
        </Stack>
      </Stack>

      <Box width={"100%"} textAlign={"end"}>
        <PrimaryButton
          buttonText={"Submit"}
          type="submit"
          onClick={handleSubmit}
          disabled={
            isSubmitting || Object.values(fieldValues).some((f) => f.error)
          }
        />
      </Box>
    </Box>
  );
};

export default EditProfile;
