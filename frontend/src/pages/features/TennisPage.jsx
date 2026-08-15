import SportsShowcase from '@/components/SportsShowcase';
import Footer from '@/components/Footer';

export default function TennisPage() {
  return (
    <div className="pt-20">
      <SportsShowcase defaultSport="tennis" />
      <Footer />
    </div>
  );
}
