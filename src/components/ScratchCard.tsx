import React from "react";
import ScratchToReveal from "@/components/ui/scratch-to-reveal";

const ScratchCard = () => {
  const handleComplete = () => {
    console.log("Scratch complete :: ", true);
    const element = document.getElementById("scratch-card");
    if (element) {
      element.animate(
        [
          { transform: "translate(1px, 1px) rotate(0deg)" },
          { transform: "translate(-1px, -2px) rotate(-1deg)" },
          { transform: "translate(-3px, 0px) rotate(1deg)" },
          { transform: "translate(3px, 2px) rotate(0deg)" },
          { transform: "translate(1px, -1px) rotate(1deg)" },
          { transform: "translate(-1px, 2px) rotate(-1deg)" },
          { transform: "translate(-3px, 1px) rotate(0deg)" },
          { transform: "translate(3px, 1px) rotate(-1deg)" },
          { transform: "translate(-1px, -1px) rotate(1deg)" },
          { transform: "translate(1px, 2px) rotate(0deg)" },
          { transform: "translate(1px, -2px) rotate(-1deg)" },
        ],
        {
          duration: 500,
          iterations: 1,
        }
      );
    }
  };

  return (
    <div id="scratch-card">
      <ScratchToReveal
        width={250}
        height={250}
        minScratchPercentage={40}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        onComplete={handleComplete}
        gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      >
        <p className="text-9xl">😎</p>
      </ScratchToReveal>
    </div>
  );
};

export default ScratchCard;
