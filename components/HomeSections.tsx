"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const marqueeItems = [
	"West Africa Retail Growth",
	"E-Commerce Innovation",
	"Supply Chain Intelligence",
	"Consumer Market Analysis",
	"Fintech & Payments",
	"Investment Opportunities",
	"Policy & Regulation",
	"Shopping Centre Development",
];

export default function MarqueeSection() {
	return (
		<div
			style={{
				overflow: "hidden",
				borderTop: "1px solid rgba(168,85,247,0.08)",
				borderBottom: "1px solid rgba(168,85,247,0.08)",
				background: "rgba(255,255,255,0.01)",
				padding: "1.25rem 0",
				position: "relative",
			}}
		>
			{/* Fade edges */}
			<div
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					bottom: 0,
					width: "120px",
					background:
						"linear-gradient(90deg, var(--black), transparent)",
					zIndex: 2,
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					right: 0,
					top: 0,
					bottom: 0,
					width: "120px",
					background:
						"linear-gradient(270deg, var(--black), transparent)",
					zIndex: 2,
					pointerEvents: "none",
				}}
			/>
			<motion.div
				animate={{ x: ["0%", "-50%"] }}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "linear",
				}}
				style={{ display: "flex", gap: "3rem", width: "max-content" }}
			>
				{[...marqueeItems, ...marqueeItems].map((item, i) => (
					<span
						key={i}
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.75rem",
							fontFamily: "'Space Grotesk', sans-serif",
							fontWeight: 600,
							fontSize: "0.85rem",
							color: i % 3 === 0 ? "#c084fc" : "#9b97b0",
							letterSpacing: "0.05em",
							textTransform: "uppercase",
							whiteSpace: "nowrap",
						}}
					>
						<span
							style={{
								width: "5px",
								height: "5px",
								borderRadius: "50%",
								background: "rgba(168,85,247,0.6)",
								flexShrink: 0,
							}}
						/>
						{item}
					</span>
				))}
			</motion.div>
		</div>
	);
}

export function NewsletterSection() {
	return (
		<section
			style={{
				position: "relative",
				padding: "6rem 0",
				overflow: "hidden",
			}}
		>
			{/* Background */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					backgroundImage:
						"url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.07,
				}}
			/>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(135deg, rgba(126,34,206,0.25) 0%, rgba(10,10,15,0.95) 100%)",
				}}
			/>

			{/* Glows */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "20%",
					transform: "translate(-50%, -50%)",
					width: "400px",
					height: "400px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(126,34,206,0.25) 0%, transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			<div
				className='container-custom'
				style={{ position: "relative", zIndex: 2 }}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					style={{
						maxWidth: "700px",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					<div
						style={{
							width: "60px",
							height: "60px",
							borderRadius: "50%",
							background: "rgba(168,85,247,0.15)",
							border: "1px solid rgba(168,85,247,0.3)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							margin: "0 auto 1.5rem",
						}}
					>
						<Icon
							icon='ph:envelope-bold'
							width={28}
							color='#a855f7'
						/>
					</div>

					<div
						className='section-label'
						style={{ marginBottom: "1rem" }}
					>
						Newsletter
					</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 5vw, 3rem)",
							fontFamily: "'Playfair Display', serif",
							fontWeight: 900,
							color: "white",
							marginBottom: "1rem",
							lineHeight: 1.2,
						}}
					>
						Africa&apos;s Retail Intelligence,{" "}
						<span className='gradient-text'>Delivered Daily</span>
					</h2>
					<p
						style={{
							color: "rgba(255,255,255,0.6)",
							lineHeight: 1.8,
							marginBottom: "2rem",
							fontFamily: "'Space Grotesk', sans-serif",
						}}
					>
						Join 50,000+ retail leaders, investors and entrepreneurs
						who start their day with our Africa Retail Daily briefing.
					</p>

					<div
						style={{
							display: "flex",
							gap: "0.75rem",
							justifyContent: "center",
							flexWrap: "wrap",
						}}
					>
						<input
							type='email'
							placeholder='Enter your email address'
							id='cta-email-input'
							style={{
								flex: "1 1 240px",
								maxWidth: "360px",
								padding: "0.9rem 1.25rem",
								background: "rgba(255,255,255,0.07)",
								border: "1px solid rgba(168,85,247,0.25)",
								borderRadius: "0.5rem",
								color: "white",
								fontFamily: "'Space Grotesk', sans-serif",
								fontSize: "0.95rem",
								outline: "none",
							}}
						/>
						<button
							className='btn-primary'
							id='cta-subscribe-btn'
							style={{ flexShrink: 0 }}
						>
							<span>Subscribe Free</span>
							<Icon icon='ph:arrow-right-bold' width={16} />
						</button>
					</div>

					<p
						style={{
							marginTop: "1rem",
							color: "rgba(255,255,255,0.3)",
							fontSize: "0.78rem",
							fontFamily: "'Space Grotesk', sans-serif",
						}}
					>
						No spam. Unsubscribe anytime. 100% free.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export function TestimonialsSection() {
	const testimonials = [
		{
			quote:
				"Africa Retail Business is my morning ritual. The depth of market intelligence they provide is unmatched anywhere on the continent.",
			author: "Chisom Okafor",
			role: "Retail Director, MTN Commerce",
			avatar:
				"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80&auto=format&fit=crop&crop=faces",
		},
		{
			quote:
				"An indispensable resource for anyone making investment decisions in African consumer markets. Essential reading.",
			author: "James Mensah",
			role: "Partner, African Growth Capital",
			avatar:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=faces",
		},
		{
			quote:
				"No one covers the African retail ecosystem with the same rigour and nuance. A truly world-class publication.",
			author: "Dr. Aisha Kamara",
			role: "Chief Economist, AfCFTA Secretariat",
			avatar:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format&fit=crop&crop=faces",
		},
	];

	return (
		<section
			style={{
				background: "var(--dark)",
				padding: "5rem 0",
				borderTop: "1px solid rgba(168,85,247,0.08)",
			}}
		>
			<div className='container-custom'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					style={{ textAlign: "center", marginBottom: "3rem" }}
				>
					<div className='section-label'>Trusted By Leaders</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
							fontFamily: "'Playfair Display', serif",
							fontWeight: 700,
							color: "white",
						}}
					>
						What Our{" "}
						<span className='gradient-text'>Readers Say</span>
					</h2>
				</motion.div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(280px, 1fr))",
						gap: "1.5rem",
					}}
				>
					{testimonials.map((t, i) => (
						<motion.div
							key={t.author}
							initial={{ opacity: 0, y: 25 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.12 }}
							style={{
								padding: "2rem",
								borderRadius: "1rem",
								border: "1px solid rgba(168,85,247,0.12)",
								background: "rgba(255,255,255,0.02)",
								display: "flex",
								flexDirection: "column",
								gap: "1.25rem",
							}}
						>
							{/* Stars */}
							<div style={{ display: "flex", gap: "0.25rem" }}>
								{[...Array(5)].map((_, si) => (
									<Icon
										key={si}
										icon='ph:star-fill'
										width={16}
										color='#a855f7'
									/>
								))}
							</div>

							<p
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									color: "rgba(255,255,255,0.75)",
									fontSize: "0.925rem",
									lineHeight: 1.75,
									fontStyle: "italic",
									flexGrow: 1,
								}}
							>
								&ldquo;{t.quote}&rdquo;
							</p>

							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.75rem",
								}}
							>
								<img
									src={t.avatar}
									alt={t.author}
									style={{
										width: "42px",
										height: "42px",
										borderRadius: "50%",
										objectFit: "cover",
										border: "2px solid rgba(168,85,247,0.3)",
									}}
								/>
								<div>
									<div
										style={{
											fontFamily: "'Space Grotesk', sans-serif",
											fontWeight: 700,
											color: "white",
											fontSize: "0.9rem",
										}}
									>
										{t.author}
									</div>
									<div
										style={{
											fontFamily: "'Space Grotesk', sans-serif",
											color: "#9b97b0",
											fontSize: "0.78rem",
										}}
									>
										{t.role}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export function CTABanner() {
	return (
		<section
			style={{
				padding: "5rem 0",
				background:
					"linear-gradient(135deg, var(--dark-2), rgba(126,34,206,0.08), var(--dark-2))",
				borderTop: "1px solid rgba(168,85,247,0.1)",
			}}
		>
			<div className='container-custom'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					style={{
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "2rem",
					}}
				>
					<div style={{ maxWidth: "500px" }}>
						<div
							className='section-label'
							style={{ marginBottom: "0.75rem" }}
						>
							Ready to Stay Informed?
						</div>
						<h2
							style={{
								fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
								fontFamily: "'Playfair Display', serif",
								fontWeight: 700,
								color: "white",
								marginBottom: "0.75rem",
							}}
						>
							Start Reading Africa&apos;s Most Trusted Retail
							Publication
						</h2>
						<p
							style={{
								color: "#9b97b0",
								fontFamily: "'Space Grotesk', sans-serif",
								fontSize: "0.95rem",
								lineHeight: 1.7,
							}}
						>
							Free access to breaking news, analysis, and the weekly
							Africa Retail Digest.
						</p>
					</div>
					<div
						style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
					>
						<Link href='/contact' className='btn-primary'>
							<span>Subscribe Now</span>
							<Icon icon='ph:arrow-right-bold' width={16} />
						</Link>
						<Link href='/about' className='btn-outline'>
							<span>Learn More</span>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
