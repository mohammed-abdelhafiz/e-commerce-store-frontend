import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/shared/components/ui/number-field";

interface CartItemQuantityInputProps {
  value: number;
  onValueChange: (value: number) => void;
}

export function CartItemQuantityInput({
  value,
  onValueChange,
}: CartItemQuantityInputProps) {
  return (
    <div className="w-full max-w-24">
      <NumberField
        value={value}
        onValueChange={(v) => {
          const num = Number(v);
          if (!Number.isNaN(num) && num >= 1) {
            onValueChange(num);
          }
        }}
        min={1}
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
