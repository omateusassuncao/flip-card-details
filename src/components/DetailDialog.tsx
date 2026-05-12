import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { details, type DetailKey } from "@/data/card-details";

interface Props {
  detailKey: DetailKey | null;
  onClose: () => void;
}

export function DetailDialog({ detailKey, onClose }: Props) {
  const detail = detailKey ? details[detailKey] : null;

  return (
    <Dialog open={!!detail} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-lg">
        {detail && (
          <>
            <DialogTitle className="sr-only">
              {detail.title.replace(/ — \d+$/, "")}
            </DialogTitle>
            <img
              src={detail.image}
              alt={detail.title.replace(/ — \d+$/, "")}
              width={1024}
              height={1024}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
