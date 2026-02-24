export type VideoItem = {
  id: string;
  title: string;
  poster?: string;

  // Recomendado (fallback)
  mp4?: string;
  webm?: string;

  // Opcional si aún lo usabas antes
  src?: string;
};