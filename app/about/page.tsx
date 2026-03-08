"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const team = [
	{
		name: "D.O",
		role: "CEO/Founder",
		bio: "10+ years in the retail industry.",
		image:
			"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop",
		socials: { twitter: "#", linkedin: "#" },
	},
	{
		name: "Benjamin",
		role: "Editor in chief",
		bio: "Former McKinsey consultant specialising in African consumer markets.",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
		socials: { twitter: "#", linkedin: "#" },
	},
	{
		name: "Fatima Osei",
		role: "Markets Reporter",
		bio: "Based in Nairobi, covering East African retail and e-commerce.",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
		socials: { twitter: "#", linkedin: "#" },
	},
	{
		name: "Emeka Nwosu",
		role: "West Africa Correspondent",
		bio: "Reporting from Lagos on Nigeria's booming consumer market.",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
		socials: { twitter: "#", linkedin: "#" },
	},
];

const values = [
	{
		icon: "ph:compass-bold",
		title: "Independence",
		desc: "Our editorial team operates with complete independence. No advertiser influences our reporting.",
	},
	{
		icon: "ph:eye-bold",
		title: "Accuracy",
		desc: "Every fact is verified. Every source is reliable. We stand behind every word we publish.",
	},
	{
		icon: "ph:globe-bold",
		title: "African Lens",
		desc: "We tell Africa's retail story through African eyes — with nuance, depth, and respect.",
	},
	{
		icon: "ph:lightning-bold",
		title: "Speed",
		desc: "Markets don't wait. Neither do we. Breaking news and analysis delivered at the speed of commerce.",
	},
];

const teamVars = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};
const memberVars = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
	return (
		<div style={{ background: "var(--black)" }}>
			{/* Hero */}
			<section
				style={{
					position: "relative",
					padding: "10rem 0 6rem",
					overflow: "hidden",
				}}
			>
				{/* BG image */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop)",
						backgroundSize: "cover",
						backgroundPosition: "center",
						opacity: 0.08,
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(180deg, var(--black) 0%, rgba(10,10,15,0.85) 50%, var(--black) 100%)",
					}}
				/>
				{/* Glow */}
				<div
					style={{
						position: "absolute",
						top: "30%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "800px",
						height: "400px",
						background:
							"radial-gradient(ellipse, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
						pointerEvents: "none",
					}}
				/>

				<div
					className='container-custom'
					style={{ position: "relative", zIndex: 2 }}
				>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						style={{
							maxWidth: "800px",
							margin: "0 auto",
							textAlign: "center",
						}}
					>
						<span
							className='badge badge-purple'
							style={{
								display: "inline-flex",
								marginBottom: "1.5rem",
							}}
						>
							<Icon icon='ph:newspaper-bold' width={12} />
							Our Story
						</span>
						<h1
							style={{
								fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
								fontFamily: "'Playfair Display', serif",
								fontWeight: 900,
								color: "white",
								marginBottom: "1.5rem",
								lineHeight: 1.1,
							}}
						>
							Defining the Voice of{" "}
							<span className='gradient-text'>African Retail</span>
						</h1>
						<p
							style={{
								fontSize: "clamp(1rem, 2vw, 1.2rem)",
								color: "rgba(255,255,255,0.65)",
								lineHeight: 1.8,
								fontFamily: "'Space Grotesk', sans-serif",
							}}
						>
							Africa Retail Business is the continent&apos;s most
							trusted news publication dedicated exclusively to the
							retail industry. We illuminate the forces shaping how
							1.4 billion Africans discover, purchase, and experience
							the world&apos;s fastest-growing consumer market.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Mission & Values */}
			<section className='section-padding'>
				<div className='container-custom'>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(300px, 1fr))",
							gap: "5rem",
							alignItems: "center",
						}}
					>
						{/* Text */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<div className='section-label'>Our Mission</div>
							<h2
								style={{
									fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
									fontWeight: 700,
									fontFamily: "'Playfair Display', serif",
									color: "white",
									marginBottom: "1.25rem",
								}}
							>
								Telling Africa&apos;s Retail Story With{" "}
								<span className='gradient-text'>Precision</span>
							</h2>
							<p
								style={{
									color: "rgba(255,255,255,0.65)",
									lineHeight: 1.8,
									fontFamily: "'Space Grotesk', sans-serif",
									marginBottom: "1.25rem",
								}}
							>
								We exist to bridge the information gap in
								Africa&apos;s retail sector — providing the data,
								analysis and insight that entrepreneurs, executives
								and investors need to make confident decisions.
							</p>
							<p
								style={{
									color: "rgba(255,255,255,0.5)",
									lineHeight: 1.8,
									fontFamily: "'Space Grotesk', sans-serif",
									marginBottom: "2rem",
								}}
							>
								Too often, Africa&apos;s economic narrative is defined
								by outsiders. We believe the continent&apos;s retail
								story — one of resilience, ingenuity and explosive
								growth — deserves to be told by people who live it.
							</p>
							<Link
								href='/contact'
								className='btn-primary'
								style={{ display: "inline-flex" }}
							>
								<span>Work With Us</span>
								<Icon icon='ph:arrow-right-bold' width={16} />
							</Link>
						</motion.div>

						{/* Image collage */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.15 }}
							style={{ position: "relative" }}
						>
							<div
								style={{
									borderRadius: "1rem",
									overflow: "hidden",
									height: "380px",
									position: "relative",
								}}
							>
								<img
									src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop'
									alt='Our editorial team at work'
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
								<div
									style={{
										position: "absolute",
										inset: 0,
										background:
											"linear-gradient(135deg, rgba(10,10,15,0.4), rgba(126,34,206,0.2))",
									}}
								/>
							</div>
							{/* Floating card */}
							<motion.div
								animate={{ y: [0, -8, 0] }}
								transition={{ duration: 4, repeat: Infinity }}
								style={{
									position: "absolute",
									bottom: "-1.5rem",
									left: "-1.5rem",
									background: "var(--dark-2)",
									border: "1px solid rgba(168,85,247,0.2)",
									borderRadius: "1rem",
									padding: "1.25rem 1.5rem",
								}}
							>
								<div
									className='section-label'
									style={{ marginBottom: "0.3rem" }}
								>
									Impact
								</div>
								<div
									style={{
										fontFamily: "'Playfair Display', serif",
										fontSize: "1.6rem",
										fontWeight: 900,
										color: "white",
									}}
								>
									#1
									<span
										style={{
											fontSize: "1rem",
											color: "#9b97b0",
											fontFamily: "'Space Grotesk', sans-serif",
										}}
									>
										{" "}
										Africa Retail Publication
									</span>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section
				style={{
					background: "var(--dark)",
					padding: "5rem 0",
					borderTop: "1px solid rgba(168,85,247,0.08)",
					borderBottom: "1px solid rgba(168,85,247,0.08)",
				}}
			>
				<div className='container-custom'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						style={{ textAlign: "center", marginBottom: "3rem" }}
					>
						<div className='section-label'>What Drives Us</div>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
								fontWeight: 700,
								fontFamily: "'Playfair Display', serif",
								color: "white",
							}}
						>
							Our Editorial{" "}
							<span className='gradient-text'>Values</span>
						</h2>
					</motion.div>

					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(240px, 1fr))",
							gap: "1.5rem",
						}}
					>
						{values.map((v, i) => (
							<motion.div
								key={v.title}
								initial={{ opacity: 0, y: 25 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								style={{
									padding: "2rem",
									borderRadius: "1rem",
									border: "1px solid rgba(168,85,247,0.1)",
									background: "rgba(255,255,255,0.02)",
								}}
							>
								<div
									style={{
										width: "48px",
										height: "48px",
										borderRadius: "10px",
										background: "rgba(168,85,247,0.12)",
										border: "1px solid rgba(168,85,247,0.2)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginBottom: "1rem",
									}}
								>
									<Icon icon={v.icon} width={24} color='#a855f7' />
								</div>
								<h3
									style={{
										fontFamily: "'Playfair Display', serif",
										fontWeight: 700,
										fontSize: "1.1rem",
										color: "white",
										marginBottom: "0.5rem",
									}}
								>
									{v.title}
								</h3>
								<p
									style={{
										color: "#9b97b0",
										fontSize: "0.875rem",
										lineHeight: 1.7,
										fontFamily: "'Space Grotesk', sans-serif",
									}}
								>
									{v.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className='section-padding'>
				<div className='container-custom'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						style={{ textAlign: "center", marginBottom: "3rem" }}
					>
						<div className='section-label'>
							The People Behind The Stories
						</div>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
								fontWeight: 700,
								fontFamily: "'Playfair Display', serif",
								color: "white",
							}}
						>
							Meet Our <span className='gradient-text'>Team</span>
						</h2>
					</motion.div>

					<motion.div
						variants={teamVars}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(240px, 1fr))",
							gap: "1.5rem",
						}}
					>
						{team.map((member) => (
							<motion.div
								key={member.name}
								variants={memberVars}
								whileHover={{ y: -6 }}
								style={{
									borderRadius: "1rem",
									overflow: "hidden",
									border: "1px solid rgba(168,85,247,0.12)",
									background: "var(--dark-2)",
									transition: "border-color 0.3s ease",
								}}
								className='member-card'
							>
								<div
									style={{
										position: "relative",
										height: "260px",
										overflow: "hidden",
									}}
								>
									<img
										src={member.image}
										alt={member.name}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
									<div
										style={{
											position: "absolute",
											inset: 0,
											background:
												"linear-gradient(0deg, rgba(10,10,15,0.8) 0%, transparent 60%)",
										}}
									/>
								</div>
								<div style={{ padding: "1.5rem" }}>
									<h3
										style={{
											fontFamily: "'Playfair Display', serif",
											fontWeight: 700,
											fontSize: "1.1rem",
											color: "white",
											marginBottom: "0.2rem",
										}}
									>
										{member.name}
									</h3>
									<div
										style={{
											color: "#a855f7",
											fontSize: "0.8rem",
											fontWeight: 600,
											fontFamily: "'Space Grotesk', sans-serif",
											letterSpacing: "0.05em",
											marginBottom: "0.75rem",
										}}
									>
										{member.role}
									</div>
									<p
										style={{
											color: "#9b97b0",
											fontSize: "0.85rem",
											lineHeight: 1.65,
											fontFamily: "'Space Grotesk', sans-serif",
										}}
									>
										{member.bio}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<style jsx global>{`
				.member-card:hover {
					border-color: rgba(168, 85, 247, 0.35) !important;
				}
			`}</style>
		</div>
	);
}
