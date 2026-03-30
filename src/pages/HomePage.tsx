import HeroSection from '../components/HeroSection';
import TopicsSection from '../components/TopicsSection';
import RelatedPages from '../components/RelatedPages';
import FeedbackBanner from '../components/FeedbackBanner';
import FeedbackSection from '../components/FeedbackSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <HeroSection />
      <TopicsSection />
      <RelatedPages />
      <FeedbackBanner />
      <FeedbackSection />
    </div>
  );
}
