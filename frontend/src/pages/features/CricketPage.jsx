import SportsShowcase from '@/components/SportsShowcase';
import Footer from '@/components/Footer';

export default function CricketPage() {
  return (
    <div className="pt-20">
      <SportsShowcase defaultSport="cricket" />
      <Footer />
    </div>
  );
}
