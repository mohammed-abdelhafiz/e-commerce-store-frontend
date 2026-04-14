import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { AlertCircle } from "lucide-react";

const ErrorTooltip = ({ message }: { message: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <AlertCircle className="h-3 w-3 cursor-pointer text-destructive" />
      </TooltipTrigger>
      <TooltipContent className="text-destructive bg-background">
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ErrorTooltip;
