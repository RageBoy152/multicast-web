import { useSearchParams } from "react-router-dom";

export default function Embed() {
  const [searchParams] = useSearchParams();
  const embedId = searchParams.get("v");

  if (!embedId) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-white bg-black">
        Missing ?v=VIDEO_ID in URL
      </div>
    );
  }

  const src = `https://www.youtube.com/embed/${embedId}?autoplay=1&origin=${encodeURIComponent(window.location.origin)}`;

  return (
    <iframe
      src={src}
      className="w-screen h-screen"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  );
}