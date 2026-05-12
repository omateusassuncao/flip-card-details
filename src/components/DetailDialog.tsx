import { useState } from "react";
import { Pencil, Upload, RotateCcw } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { details, type DetailKey } from "@/data/card-details";
import { EDIT_PASSWORD, fileToDataUrl, useImageOverrides } from "@/lib/image-overrides";
import { toast } from "sonner";

interface Props {
  detailKey: DetailKey | null;
  onClose: () => void;
}

export function DetailDialog({ detailKey, onClose }: Props) {
  const detail = detailKey ? details[detailKey] : null;
  const { overrides, setOverride, removeOverride } = useImageOverrides();
  const [editing, setEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);

  const currentImage = detailKey && overrides[detailKey] ? overrides[detailKey]! : detail?.image;

  const closeEdit = () => {
    setEditing(false);
    setPassword("");
    setAuthorized(false);
    setPendingFile(null);
  };

  const handleSave = async () => {
    if (!detailKey || !pendingFile) return;
    try {
      const dataUrl = await fileToDataUrl(pendingFile);
      setOverride(detailKey, dataUrl);
      toast.success("Imagem atualizada");
      closeEdit();
    } catch {
      toast.error("Erro ao ler arquivo");
    }
  };

  const handleReset = () => {
    if (!detailKey) return;
    removeOverride(detailKey);
    toast.success("Imagem restaurada");
    closeEdit();
  };

  return (
    <>
      <Dialog open={!!detail} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="overflow-hidden p-0 sm:max-w-lg">
          {detail && (
            <>
              <DialogTitle className="sr-only">
                {detail.title.replace(/ — \d+$/, "")}
              </DialogTitle>
              <button
                type="button"
                onClick={() => setEditing(true)}
                aria-label="Editar imagem"
                className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[var(--card-teal,#0f4c56)] shadow hover:bg-white"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <img
                src={currentImage}
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

      <Dialog open={editing} onOpenChange={(o) => !o && closeEdit()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar imagem</DialogTitle>
            <DialogDescription>
              {authorized
                ? "Selecione uma nova imagem ou restaure a original."
                : "Digite a senha para alterar a imagem."}
            </DialogDescription>
          </DialogHeader>

          {!authorized ? (
            <div className="space-y-3">
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (password === EDIT_PASSWORD) setAuthorized(true);
                    else toast.error("Senha incorreta");
                  }
                }}
                autoFocus
              />
              <DialogFooter>
                <Button variant="outline" onClick={closeEdit}>Cancelar</Button>
                <Button
                  onClick={() => {
                    if (password === EDIT_PASSWORD) setAuthorized(true);
                    else toast.error("Senha incorreta");
                  }}
                >
                  Confirmar
                </Button>
              </DialogFooter>
            </div>
          ) : (
            <div className="space-y-3">
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/30 p-6 hover:bg-muted/50">
                <Upload className="h-6 w-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {pendingFile ? pendingFile.name : "Clique para selecionar uma imagem"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setPendingFile(e.target.files?.[0] ?? null)}
                />
              </label>
              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={handleReset}>
                  <RotateCcw className="mr-1 h-4 w-4" /> Restaurar original
                </Button>
                <Button onClick={handleSave} disabled={!pendingFile}>Salvar</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
