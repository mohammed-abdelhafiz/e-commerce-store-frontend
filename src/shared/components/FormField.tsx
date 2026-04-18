import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import ErrorTooltip from "@/shared/components/ErrorTooltip";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  as?: "input" | "textarea";
  resize?: boolean;
}

export const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  registration,
  error,
  as = "input",
  resize = true,
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
      {as === "textarea" ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          {...registration}
          className={!resize ? "resize-none" : ""}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...registration}
        />
      )}
    </Field>
  );
};
