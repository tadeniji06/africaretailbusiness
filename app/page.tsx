import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import TopicsSection from "@/components/TopicsSection";
import MarqueeSection, {
	NewsletterSection,
	TestimonialsSection,
	CTABanner,
} from "@/components/HomeSections";

export const metadata: Metadata = {
	title:
		"Africa Retail Business | Africa's Premier Retail News Publication",
	description:
		"Breaking news, in-depth analysis and market intelligence from Africa's #1 retail business publication.",
};

export default function Home() {
	return (
		<>
			<HeroCarousel />
			<StatsSection />
			<MarqueeSection />
			<FeaturedArticles />
			<TopicsSection />
			<TestimonialsSection />
			<NewsletterSection />
			<CTABanner />
		</>
	);
}
