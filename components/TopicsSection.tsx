"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const topics = [
	{
		icon: "ph:shopping-bag-bold",
		title: "Retail Markets",
		description:
			"Tracking growth across West, East, Central and Southern Africa's organized retail landscape.",
		color: "#9333ea",
	},
	{
		icon: "ph:device-mobile-bold",
		title: "E-Commerce & Fintech",
		description:
			"How digital platforms and mobile money are democratizing access to retail services.",
		color: "#7e22ce",
	},
	{
		icon: "ph:trend-up-bold",
		title: "Consumer Trends",
		description:
			"Unpacking the evolving preferences, habits and aspirations of Africa's 1.4 billion consumers.",
		color: "#a855f7",
	},
	{
		icon: "ph:factory-bold",
		title: "Supply Chain",
		description:
			"Infrastructure, logistics, and the challenges of getting products from factory to doorstep.",
		color: "#8b5cf6",
	},
	{
		icon: "ph:currency-circle-dollar-bold",
		title: "Investment & Capital",
		description:
			"Follow the money: VC, PE and institutional flows into Africa's retail and consumer sectors.",
		color: "#9333ea",
	},
	{
		icon: "ph:globe-hemisphere-east-bold",
		title: "Policy & Regulation",
		description:
			"Government policy, trade agreements and regulatory changes shaping the retail environment.",
		color: "#7c3aed",
	},
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
	hidden: { opacity: 0, scale: 0.95, y: 20 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

export default function TopicsSection() {
	return (
		<section
			className='section-padding'
			style={{
				background: "var(--dark)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Background accent */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					right: "-10%",
					transform: "translateY(-50%)",
					width: "500px",
					height: "500px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(126,34,206,0.12) 0%, transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<div className='container-custom'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					style={{ textAlign: "center", marginBottom: "3.5rem" }}
				>
					<div className='section-label'>What We Cover</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
							fontFamily: "'Playfair Display', serif",
							fontWeight: 700,
							color: "white",
							marginBottom: "1rem",
						}}
					>
						Intelligence Across Every{" "}
						<span className='gradient-text'>Sector</span>
					</h2>
					<p
						style={{
							color: "#9b97b0",
							maxWidth: "560px",
							margin: "0 auto",
							lineHeight: 1.7,
							fontFamily: "'Space Grotesk', sans-serif",
						}}
					>
						From grassroots markets to multinational retail chains —
						our coverage spans the entire African retail ecosystem.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(280px, 1fr))",
						gap: "1.5rem",
					}}
				>
					{topics.map((topic) => (
						<motion.div
							key={topic.title}
							variants={cardVariants}
							whileHover={{ y: -5, scale: 1.02 }}
							style={{
								padding: "2rem",
								borderRadius: "1rem",
								border: "1px solid rgba(168,85,247,0.12)",
								background: "rgba(255,255,255,0.02)",
								cursor: "pointer",
								position: "relative",
								overflow: "hidden",
								transition: "border-color 0.3s ease",
							}}
							className='topic-card'
						>
							{/* Hover glow */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: "50%",
									transform: "translateX(-50%)",
									width: "80%",
									height: "1px",
									background: `linear-gradient(90deg, transparent, ${topic.color}80, transparent)`,
								}}
							/>
							<div
								style={{
									width: "52px",
									height: "52px",
									borderRadius: "12px",
									background: `${topic.color}20`,
									border: `1px solid ${topic.color}40`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: "1.25rem",
								}}
							>
								<Icon
									icon={topic.icon}
									width={26}
									color={topic.color}
								/>
							</div>
							<h3
								style={{
									fontFamily: "'Playfair Display', serif",
									fontSize: "1.1rem",
									fontWeight: 700,
									color: "white",
									marginBottom: "0.6rem",
								}}
							>
								{topic.title}
							</h3>
							<p
								style={{
									color: "#9b97b0",
									fontSize: "0.875rem",
									lineHeight: 1.7,
									fontFamily: "'Space Grotesk', sans-serif",
								}}
							>
								{topic.description}
							</p>

							{/* Corner arrow */}
							<div
								style={{
									position: "absolute",
									bottom: "1.25rem",
									right: "1.25rem",
									color: topic.color,
									opacity: 0.4,
								}}
							>
								<Icon icon='ph:arrow-up-right-bold' width={20} />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			<style jsx global>{`
				.topic-card:hover {
					border-color: rgba(168, 85, 247, 0.35) !important;
				}
			`}</style>
		</section>
	);
}
