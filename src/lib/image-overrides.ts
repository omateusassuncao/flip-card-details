import { useEffect, useState } from "react";
import type { DetailKey } from "@/data/card-details";

const STORAGE_KEY = "card-image-overrides-v1";

type Overrides = Partial<Record<DetailKey, string>>;

function read(): Overrides {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function write(o: Overrides) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(o));
  window.dispatchEvent(new Event("image-overrides-changed"));
}

export function useImageOverrides() {
  const [overrides, setOverrides] = useState<Overrides>(() => read());

  useEffect(() => {
    const handler = () => setOverrides(read());
    window.addEventListener("image-overrides-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("image-overrides-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  return {
    overrides,
    setOverride: (key: DetailKey, dataUrl: string) => {
      const next = { ...read(), [key]: dataUrl };
      write(next);
    },
    removeOverride: (key: DetailKey) => {
      const next = { ...read() };
      delete next[key];
      write(next);
    },
  };
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const EDIT_PASSWORD = "@123321@";
