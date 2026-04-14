import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import ErrorTooltip from "@/shared/components/ErrorTooltip";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  registration,
  error,
}: FormFieldProps) => {
  return (
    <Field>
      <div className="flex items-center gap-1">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        {error && (
          <ErrorTooltip
            message={error.message || `Invalid ${label.toLowerCase()}`}
          />
        )}
      </div>
      <Input id={id} type={type} placeholder={placeholder} {...registration} />
    </Field>
  );
};
