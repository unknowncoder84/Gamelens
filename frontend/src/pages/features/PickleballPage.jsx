import SportsShowcase from '@/components/SportsShowcase';
import Footer from '@/components/Footer';

export default function PickleballPage() {
  return (
    <div className="pt-20">
      <SportsShowcase defaultSport="pickleball" />
      <Footer />
    </div>
  );
}
