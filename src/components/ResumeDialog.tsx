import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, Download } from "lucide-react";
import resumeImg from "../assets/resume_img.jpg"

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ResumeDialog({ open, onOpenChange }: ResumeDialogProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/KANCHUSTAMBHAM_DHARANESH.pdf";
    link.download = "KANCHUSTAMBHAM_DHARANESH.pdf";
    link.click();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[75vh] p-0 gap-0 overflow-y-scroll" hideClose>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-6 bg-card flex items-start justify-center scrollbar-styled">
            <img 
              src={resumeImg} 
              alt="Resume" 
              className="w-full max-w-2xl h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex justify-end gap-3 p-4 bg-card backdrop-blur-sm">
            <button
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-border bg-card hover:bg-secondary hover:border-primary/30 transition-all font-semibold shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl glow-effect"
            >
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
