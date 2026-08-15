import SportsShowcase from '@/components/SportsShowcase';
import Footer from '@/components/Footer';

export default function FootballPage() {
  return (
    <div className="pt-20">
      <SportsShowcase defaultSport="football" />
      <Footer />
    </div>
  );
}
