"use client";
import { useRef, useState } from "react";
export function VideoPlayer({
  title,
  poster,
  standard,
  saver,
}: {
  title: string;
  poster: string;
  standard: string;
  saver: string;
}) {
  const [quality, setQuality] = useState<"standard" | "saver">("standard");
  const [failed, setFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const resumeAt = useRef(0);
  function changeQuality(value: "standard" | "saver") {
    resumeAt.current = video.current?.currentTime ?? 0;
    video.current?.pause();
    setFailed(false);
    setQuality(value);
  }
  return (
    <div className="space-y-4">
      <video
        key={quality}
        ref={video}
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label={title}
        aria-describedby="video-guidance"
        className="block w-full aspect-video bg-black rounded-lg"
        onError={() => setFailed(true)}
        onLoadedMetadata={() => {
          if (video.current && resumeAt.current > 0)
            video.current.currentTime = Math.min(
              resumeAt.current,
              video.current.duration,
            );
        }}
      >
        <source
          src={quality === "standard" ? standard : saver}
          type="video/mp4"
          onError={() => setFailed(true)}
        />
        Your browser does not support video playback. Use the direct video link
        below.
      </video>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="video-quality" className="text-sm font-semibold">
            Video quality
          </label>
          <select
            id="video-quality"
            value={quality}
            onChange={(e) =>
              changeQuality(e.target.value as "standard" | "saver")
            }
            className="border border-line-control rounded bg-white text-ink-950 px-3 py-2 min-h-[44px]"
          >
            <option value="standard">Standard · 720p</option>
            <option value="saver">Data saver · 480p</option>
          </select>
        </div>
        <a
          href={quality === "standard" ? standard : saver}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-navy-700 underline underline-offset-4"
        >
          Open video directly ↗
        </a>
      </div>
      <p id="video-guidance" className="text-sm text-ink-600">
        Press play when you’re ready. Videos do not autoplay. On a slower
        connection, choose Data saver. Changing quality pauses playback and
        keeps your position once the new version loads; press play to continue.
      </p>
      {failed && (
        <div
          role="alert"
          className="border border-orange-300 bg-orange-50 rounded p-4 text-sm"
        >
          <p className="font-semibold">The video could not load.</p>
          <p className="mt-2">
            Check your connection, try Data saver, or open the video directly.
            You can still read the module overview below.
          </p>
          <button
            type="button"
            onClick={() => {
              setFailed(false);
              video.current?.load();
            }}
            className="mt-3 underline font-semibold min-h-[44px]"
          >
            Try loading again
          </button>
        </div>
      )}
    </div>
  );
}
