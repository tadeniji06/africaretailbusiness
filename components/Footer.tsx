"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
	Twitter,
	Linkedin,
	Instagram,
	Youtube,
	Facebook,
} from "lucide-react";

const footerLinks = {
	Publication: [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{ label: "Blog", href: "/blog" },
		{ label: "Contact", href: "/contact" },
	],
	"Focus Areas": [
		{ label: "Retail Markets", href: "/blog" },
		{ label: "E-Commerce", href: "/blog" },
		{ label: "Consumer Trends", href: "/blog" },
		{ label: "Market Reports", href: "/blog" },
	],
	Resources: [
		{ label: "Newsletter", href: "/contact" },
		{ label: "Advertise", href: "/contact" },
		{ label: "Media Kit", href: "/contact" },
		{ label: "Partner With Us", href: "/contact" },
	],
};

const socials = [
	{ icon: Twitter, label: "Twitter", href: "#" },
	{ icon: Linkedin, label: "LinkedIn", href: "#" },
	{ icon: Instagram, label: "Instagram", href: "#" },
	{ icon: Facebook, label: "Facebook", href: "#" },
	{ icon: Youtube, label: "YouTube", href: "#" },
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
	return (
		<footer
			style={{
				background: "var(--dark)",
				borderTop: "1px solid rgba(168, 85, 247, 0.12)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Gradient glow top */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: "50%",
					transform: "translateX(-50%)",
					width: "600px",
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)",
				}}
			/>

			{/* Newsletter banner */}
			<div
				style={{
					background:
						"linear-gradient(135deg, rgba(126, 34, 206, 0.2), rgba(168, 85, 247, 0.08))",
					borderBottom: "1px solid rgba(168, 85, 247, 0.1)",
					padding: "3rem 0",
				}}
			>
				<div className='container-custom'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						style={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "2rem",
						}}
					>
						<div>
							<div className='section-label'>Stay Informed</div>
							<h3
								style={{
									fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
									fontFamily: "'Playfair Display', serif",
									color: "white",
									marginBottom: "0.5rem",
								}}
							>
								Join 50,000+ Retail Leaders
							</h3>
							<p
								style={{
									color: "#9b97b0",
									fontFamily: "'Space Grotesk', sans-serif",
									fontSize: "0.95rem",
								}}
							>
								Get the latest Africa retail news delivered to your
								inbox.
							</p>
						</div>
						<div
							style={{
								display: "flex",
								gap: "0.75rem",
								flexWrap: "wrap",
							}}
						>
							<input
								type='email'
								placeholder='your@email.com'
								id='footer-email-input'
								style={{
									background: "rgba(255,255,255,0.06)",
									border: "1px solid rgba(168, 85, 247, 0.25)",
									borderRadius: "0.5rem",
									padding: "0.75rem 1.25rem",
									color: "white",
									fontSize: "0.925rem",
									minWidth: "240px",
									outline: "none",
								}}
							/>
							<button
								className='btn-primary'
								style={{ padding: "0.75rem 1.5rem" }}
							>
								<span>Subscribe</span>
								<Icon icon='ph:paper-plane-tilt-bold' width={16} />
							</button>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Main footer */}
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='container-custom'
				style={{ padding: "4rem 1.5rem 3rem" }}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(180px, 1fr))",
						gap: "3rem",
					}}
				>
					{/* Brand */}
					<motion.div
						variants={itemVariants}
						style={{ gridColumn: "span 1" }}
					>
						<Link
							href='/'
							style={{
								textDecoration: "none",
								display: "inline-flex",
								alignItems: "center",
								gap: "0.5rem",
								marginBottom: "1.25rem",
							}}
						>
							<div
								style={{
									width: "36px",
									height: "36px",
									background:
										"linear-gradient(135deg, #7e22ce, #a855f7)",
									borderRadius: "8px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Icon
									icon='ph:storefront-bold'
									width={20}
									color='white'
								/>
							</div>
							<div>
								<div
									style={{
										fontFamily: "'Playfair Display', serif",
										fontWeight: 700,
										fontSize: "1.05rem",
										color: "white",
									}}
								>
									Africa Retail
								</div>
								<div
									style={{
										fontFamily: "'Space Grotesk', sans-serif",
										fontSize: "0.6rem",
										color: "#a855f7",
										letterSpacing: "0.15em",
										textTransform: "uppercase",
									}}
								>
									Business
								</div>
							</div>
						</Link>
						<p
							style={{
								color: "#9b97b0",
								fontSize: "0.875rem",
								lineHeight: 1.8,
								fontFamily: "'Space Grotesk', sans-serif",
								marginBottom: "1.5rem",
							}}
						>
							Africa&apos;s definitive source for retail industry
							intelligence, market trends, and business insight.
						</p>
						{/* Socials */}
						<div style={{ display: "flex", gap: "0.75rem" }}>
							{socials.map((s) => (
								<motion.a
									key={s.label}
									href={s.href}
									whileHover={{ scale: 1.15, y: -2 }}
									aria-label={s.label}
									style={{
										width: "36px",
										height: "36px",
										borderRadius: "50%",
										border: "1px solid rgba(168,85,247,0.2)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#9b97b0",
										transition: "all 0.2s ease",
										textDecoration: "none",
									}}
									className='social-icon'
								>
									<s.icon size={16} />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Links sections */}
					{Object.entries(footerLinks).map(([title, links]) => (
						<motion.div key={title} variants={itemVariants}>
							<h4
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontWeight: 700,
									fontSize: "0.8rem",
									letterSpacing: "0.12em",
									textTransform: "uppercase",
									color: "white",
									marginBottom: "1.25rem",
								}}
							>
								{title}
							</h4>
							<ul
								style={{
									listStyle: "none",
									display: "flex",
									flexDirection: "column",
									gap: "0.75rem",
								}}
							>
								{links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											style={{
												fontFamily: "'Space Grotesk', sans-serif",
												color: "#9b97b0",
												textDecoration: "none",
												fontSize: "0.9rem",
												transition: "color 0.2s ease",
											}}
											className='footer-link'
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Bottom bar */}
			<div
				style={{
					borderTop: "1px solid rgba(168, 85, 247, 0.08)",
					padding: "1.5rem 0",
				}}
			>
				<div
					className='container-custom'
					style={{
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "1rem",
					}}
				>
					<p
						style={{
							color: "#9b97b0",
							fontSize: "0.8rem",
							fontFamily: "'Space Grotesk', sans-serif",
						}}
					>
						© {new Date().getFullYear()} Africa Retail Business. All
						rights reserved.
					</p>
					<div style={{ display: "flex", gap: "1.5rem" }}>
						{["Privacy Policy", "Terms of Use", "Cookie Policy"].map(
							(item) => (
								<Link
									key={item}
									href='#'
									style={{
										color: "#9b97b0",
										fontSize: "0.8rem",
										textDecoration: "none",
										fontFamily: "'Space Grotesk', sans-serif",
										transition: "color 0.2s ease",
									}}
									className='footer-link'
								>
									{item}
								</Link>
							),
						)}
					</div>
				</div>
			</div>

			<style jsx global>{`
				.footer-link:hover {
					color: #c084fc !important;
				}
				.social-icon:hover {
					color: #c084fc !important;
					border-color: rgba(168, 85, 247, 0.5) !important;
					background: rgba(168, 85, 247, 0.1);
				}
			`}</style>
		</footer>
	);
}
