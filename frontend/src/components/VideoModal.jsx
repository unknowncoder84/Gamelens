import { useEffect, useCallback } from 'react';
import { X, Play, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, video }) {
  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      data-testid="video-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative z-10 w-[90%] max-w-4xl mx-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          data-testid="video-modal-close"
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video container */}
        <div className="rounded-2xl overflow-hidden bg-black shadow-2xl">
          <div className="aspect-video relative">
            <video
              src="/videos/main-hero-simulator.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Video info */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-white font-heading font-bold text-lg">
              {video?.title || 'GamLens Match Analysis'}
            </h3>
            <p className="text-white/60 text-sm font-body mt-0.5">
              {video?.subtitle || 'Full demonstration of real-time AI officiating'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
