import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import ErrorTooltip from "@/shared/components/ErrorTooltip";
import { FieldError } from "react-hook-form";
import Image from "next/image";

interface ImageFormFieldProps {
  id: string;
  label: string;
  error?: FieldError;
  preview?: {
    url: string;
    alt: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageFormField = ({
  id,
  label,
  error,
  preview,
  onChange,
}: ImageFormFieldProps) => {
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
      <Input id={id} type="file" accept="image/*" onChange={onChange} />
      {preview && (
        <Image
          src={preview.url}
          alt={preview.alt}
          width={100}
          height={100}
          className="rounded-lg object-cover w-24! h-24 mt-2"
        />
      )}
    </Field>
  );
};
