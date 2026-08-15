import { useState } from 'react';
import VideoSection from '@/components/VideoSection';
import VideoModal from '@/components/VideoModal';
import Footer from '@/components/Footer';

export default function VideoPage() {
  const [videoModal, setVideoModal] = useState({ open: false, video: null });
  const openVideo = (video) => setVideoModal({ open: true, video });
  const closeVideo = () => setVideoModal({ open: false, video: null });

  return (
    <div className="pt-20">
      <VideoSection onOpenVideo={openVideo} />
      <VideoModal isOpen={videoModal.open} onClose={closeVideo} video={videoModal.video} />
      <Footer />
    </div>
  );
}
