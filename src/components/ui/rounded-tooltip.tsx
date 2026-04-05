import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";

const RoundedTooltipDemo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze hover:text-white transition-colors duration-300">Test Feature</Button>
        </TooltipTrigger>
        <TooltipContent className="rounded-full bg-charcoal text-cream border-bronze">
          <p>Preview Feature is Active!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RoundedTooltipDemo;
