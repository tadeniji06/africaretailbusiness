"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
	{
		id: 1,
		category: "E-Commerce",
		categoryIcon: "ph:shopping-cart-bold",
		title:
			"How Jumia is Redefining Last-Mile Delivery Across Sub-Saharan Africa",
		excerpt:
			"The continent's leading e-commerce platform is deploying a network of independent agents, rewriting the rules of retail logistics.",
		image:
			"https://images.unsplash.com/photo-1603573355706-3f15d98cf100?w=800&q=80&auto=format&fit=crop",
		readTime: "6 min read",
		date: "Mar 5, 2025",
		featured: true,
	},
	{
		id: 2,
		category: "Consumer Goods",
		categoryIcon: "ph:package-bold",
		title: "FMCG Giants Bet Big on Africa's Growing Middle Class",
		excerpt:
			"Unilever, Nestlé and P&G are investing billions as Africa's middle class swells to 600 million by 2030.",
		image:
			"https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop",
		readTime: "4 min read",
		date: "Mar 3, 2025",
		featured: false,
	},
	{
		id: 3,
		category: "Fintech",
		categoryIcon: "ph:bank-bold",
		title:
			"Buy Now, Pay Later Is Unlocking Retail Access for Millions",
		excerpt:
			"African BNPL startups are bridging the gap between aspiration and access for underserved consumers.",
		image:
			"https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80&auto=format&fit=crop",
		readTime: "5 min read",
		date: "Feb 28, 2025",
		featured: false,
	},
	{
		id: 4,
		category: "Real Estate",
		categoryIcon: "ph:buildings-bold",
		title: "Shopping Malls or Experience Hubs? Africa Chooses Both",
		excerpt:
			"Developers are reimagining retail spaces as lifestyle destinations to compete with the rise of online shopping.",
		image:
			"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80&auto=format&fit=crop",
		readTime: "7 min read",
		date: "Feb 25, 2025",
		featured: false,
	},
];

const containerVars = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};
const cardVars = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut" },
	},
};

function ArticleCard({
	article,
	big = false,
}: {
	article: (typeof articles)[0];
	big?: boolean;
}) {
	return (
		<motion.article
			variants={cardVars}
			whileHover={{ y: -6 }}
			style={{
				borderRadius: "1rem",
				overflow: "hidden",
				border: "1px solid rgba(168,85,247,0.12)",
				background: "var(--dark-2)",
				display: "flex",
				flexDirection: "column",
				transition: "border-color 0.3s ease, box-shadow 0.3s ease",
				cursor: "pointer",
			}}
			className='article-card'
		>
			{/* Image */}
			<div
				style={{
					position: "relative",
					height: big ? "300px" : "200px",
					overflow: "hidden",
				}}
			>
				<img
					src={article.image}
					alt={article.title}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						transition: "transform 0.5s ease",
					}}
					className='article-img'
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(0deg, rgba(10,10,15,0.7) 0%, transparent 60%)",
					}}
				/>
				{/* Category badge */}
				<div
					style={{
						position: "absolute",
						top: "1rem",
						left: "1rem",
					}}
				>
					<span className='badge badge-purple'>
						<Icon icon={article.categoryIcon} width={12} />
						{article.category}
					</span>
				</div>
			</div>

			{/* Content */}
			<div
				style={{
					padding: big ? "1.75rem" : "1.25rem",
					display: "flex",
					flexDirection: "column",
					gap: "0.75rem",
					flexGrow: 1,
				}}
			>
				<h3
					style={{
						fontFamily: "'Playfair Display', serif",
						fontSize: big ? "1.4rem" : "1.05rem",
						fontWeight: 700,
						color: "white",
						lineHeight: 1.35,
					}}
				>
					{article.title}
				</h3>
				<p
					style={{
						color: "#9b97b0",
						fontSize: "0.875rem",
						lineHeight: 1.7,
						fontFamily: "'Space Grotesk', sans-serif",
					}}
				>
					{article.excerpt}
				</p>

				{/* Footer */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginTop: "auto",
						paddingTop: "1rem",
						borderTop: "1px solid rgba(168,85,247,0.08)",
					}}
				>
					<div
						style={{
							display: "flex",
							gap: "1rem",
							alignItems: "center",
							color: "#9b97b0",
							fontSize: "0.78rem",
							fontFamily: "'Space Grotesk', sans-serif",
						}}
					>
						<span
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.3rem",
							}}
						>
							<Clock size={12} />
							{article.readTime}
						</span>
						<span>{article.date}</span>
					</div>
					<motion.div
						whileHover={{ scale: 1.2, rotate: 15 }}
						style={{
							color: "#a855f7",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<ArrowUpRight size={18} />
					</motion.div>
				</div>
			</div>
		</motion.article>
	);
}

export default function FeaturedArticles() {
	return (
		<section
			className='section-padding'
			style={{ background: "var(--black)" }}
		>
			<div className='container-custom'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					style={{ marginBottom: "3rem" }}
				>
					<div className='section-label'>Latest Coverage</div>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "space-between",
							flexWrap: "wrap",
							gap: "1.5rem",
						}}
					>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
								fontFamily: "'Playfair Display', serif",
								fontWeight: 700,
								color: "white",
							}}
						>
							Featured <span className='gradient-text'>Stories</span>
						</h2>
						<Link
							href='/blog'
							className='btn-outline'
							style={{
								padding: "0.6rem 1.4rem",
								fontSize: "0.875rem",
							}}
						>
							<span>View All Articles</span>
							<ArrowUpRight size={16} />
						</Link>
					</div>
				</motion.div>

				{/* Grid */}
				<motion.div
					variants={containerVars}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(300px, 1fr))",
						gridTemplateRows: "auto",
						gap: "1.5rem",
					}}
				>
					{/* Featured big card */}
					<div
						style={{
							gridColumn: "span 2",
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "1.5rem",
						}}
						className='featured-grid'
					>
						<ArticleCard article={articles[0]} big />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1.5rem",
							}}
						>
							<ArticleCard article={articles[1]} />
							<ArticleCard article={articles[2]} />
						</div>
					</div>

					{/* 4th card */}
					<div className='fourth-card'>
						<ArticleCard article={articles[3]} big />
					</div>
				</motion.div>
			</div>

			<style jsx global>{`
				.article-card:hover {
					border-color: rgba(168, 85, 247, 0.35) !important;
					box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4) !important;
				}
				.article-card:hover .article-img {
					transform: scale(1.06) !important;
				}
				@media (max-width: 768px) {
					.featured-grid {
						grid-column: span 1 !important;
						grid-template-columns: 1fr !important;
					}
					.fourth-card {
						grid-column: span 1 !important;
					}
				}
			`}</style>
		</section>
	);
}
