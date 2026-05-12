import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { details, type DetailKey } from "@/data/card-details";

interface Props {
  detailKey: DetailKey | null;
  onClose: () => void;
}

export function DetailDialog({ detailKey, onClose }: Props) {
  const detail = detailKey ? details[detailKey] : null;
  const Icon = detail?.icon;

  return (
    <Dialog open={!!detail} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        {detail && Icon && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--itau-orange)]/10 text-[var(--itau-orange)]">
                  <Icon className="h-5 w-5" />
                </span>
                {detail.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2 overflow-hidden rounded-xl bg-muted">
              <img
                src={detail.image}
                alt={detail.title}
                width={512}
                height={512}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
