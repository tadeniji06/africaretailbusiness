"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
	{
		id: 1,
		badge: "Market Intelligence",
		title: "Africa's Retail Revolution",
		subtitle: "How Digital Commerce Is Reshaping the Continent",
		description:
			"From Lagos to Nairobi, a new wave of retail innovation is transforming how 1.4 billion Africans shop, pay, and do business.",
		image:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80&auto=format&fit=crop",
		cta: { label: "Read More", href: "/blog" },
		accent: "#9333ea",
	},
	{
		id: 2,
		badge: "E-Commerce Spotlight",
		title: "The Rise of African Super-Apps",
		subtitle: "One Platform. Millions of Consumers.",
		description:
			"African tech startups are building multi-service platforms that combine retail, payments and logistics into one seamless experience.",
		image:
			"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80&auto=format&fit=crop",
		cta: { label: "Explore Insights", href: "/blog" },
		accent: "#7e22ce",
	},
	{
		id: 3,
		badge: "Consumer Trends",
		title: "The New African Consumer",
		subtitle: "Young, Mobile-First & Aspirational",
		description:
			"With a median age of 19, Africa's retail boom is fuelled by a young generation demanding quality, convenience and authenticity.",
		image:
			"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1600&q=80&auto=format&fit=crop",
		cta: { label: "View Reports", href: "/blog" },
		accent: "#6b21a8",
	},
	{
		id: 4,
		badge: "Market Report",
		title: "West Africa Retail Index 2025",
		subtitle: "Record Growth Across Key Markets",
		description:
			"Nigeria, Ghana and Senegal are leading the way as organised retail penetration hits new highs, attracting global investor interest.",
		image:
			"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80&auto=format&fit=crop",
		cta: { label: "Download Report", href: "/blog" },
		accent: "#9333ea",
	},
];

const variants = {
	enter: (dir: number) => ({
		x: dir > 0 ? "100%" : "-100%",
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
	},
	exit: (dir: number) => ({
		x: dir < 0 ? "100%" : "-100%",
		opacity: 0,
		transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
	}),
};

export default function HeroCarousel() {
	const [[current, direction], setCurrent] = useState([0, 0]);
	const [isPlaying, setIsPlaying] = useState(true);

	const paginate = useCallback((dir: number) => {
		setCurrent(([prev]) => [
			(prev + dir + slides.length) % slides.length,
			dir,
		]);
	}, []);

	useEffect(() => {
		if (!isPlaying) return;
		const timer = setInterval(() => paginate(1), 5500);
		return () => clearInterval(timer);
	}, [isPlaying, paginate]);

	const slide = slides[current];

	return (
		<section
			id='hero-carousel'
			style={{
				position: "relative",
				width: "100%",
				height: "100svh",
				minHeight: "600px",
				overflow: "hidden",
				background: "var(--black)",
			}}
			onMouseEnter={() => setIsPlaying(false)}
			onMouseLeave={() => setIsPlaying(true)}
		>
			{/* Slide images */}
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={slide.id}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					style={{
						position: "absolute",
						inset: 0,
					}}
				>
					{/* Background image */}
					<div
						style={{
							position: "absolute",
							inset: 0,
							backgroundImage: `url(${slide.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					{/* Overlay gradients */}
					<div
						style={{
							position: "absolute",
							inset: 0,
							background:
								"linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.6) 50%, rgba(10,10,15,0.4) 100%)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							inset: 0,
							background:
								"linear-gradient(0deg, rgba(10,10,15,1) 0%, transparent 40%)",
						}}
					/>
					{/* Purple accent glow */}
					<div
						style={{
							position: "absolute",
							bottom: "20%",
							left: "5%",
							width: "400px",
							height: "400px",
							borderRadius: "50%",
							background: `radial-gradient(circle, ${slide.accent}33 0%, transparent 70%)`,
							filter: "blur(60px)",
							pointerEvents: "none",
						}}
					/>
				</motion.div>
			</AnimatePresence>

			{/* Content */}
			<div
				className='container-custom'
				style={{
					position: "relative",
					zIndex: 10,
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					paddingTop: "80px",
				}}
			>
				<AnimatePresence mode='wait'>
					<motion.div
						key={`content-${slide.id}`}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}
						transition={{ duration: 0.55, ease: "easeOut" }}
						style={{ maxWidth: "720px" }}
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1 }}
						>
							<span
								className='badge badge-purple'
								style={{
									marginBottom: "1.5rem",
									display: "inline-flex",
								}}
							>
								<Icon icon='ph:pulse-bold' width={12} />
								{slide.badge}
							</span>
						</motion.div>

						{/* Title */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.18 }}
							style={{
								fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
								fontWeight: 900,
								fontFamily: "'Playfair Display', serif",
								color: "white",
								lineHeight: 1.1,
								marginBottom: "0.75rem",
							}}
						>
							{slide.title}
						</motion.h1>

						{/* Subtitle */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.26 }}
							style={{
								fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
								color: "#c084fc",
								fontFamily: "'Space Grotesk', sans-serif",
								fontWeight: 500,
								marginBottom: "1.25rem",
								fontStyle: "italic",
							}}
						>
							{slide.subtitle}
						</motion.p>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.33 }}
							style={{
								fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
								color: "rgba(255,255,255,0.7)",
								lineHeight: 1.75,
								marginBottom: "2.5rem",
								maxWidth: "580px",
								fontFamily: "'Space Grotesk', sans-serif",
							}}
						>
							{slide.description}
						</motion.p>

						{/* CTAs */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							style={{
								display: "flex",
								gap: "1rem",
								flexWrap: "wrap",
							}}
						>
							<Link href={slide.cta.href} className='btn-primary'>
								<span>{slide.cta.label}</span>
								<Icon icon='ph:arrow-right-bold' width={16} />
							</Link>
							<Link href='/about' className='btn-outline'>
								<span>About Us</span>
							</Link>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Bottom controls bar */}
			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 20,
					padding: "0 0 2.5rem",
				}}
			>
				<div
					className='container-custom'
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexWrap: "wrap",
						gap: "1.5rem",
					}}
				>
					{/* Dot indicators */}
					<div
						style={{
							display: "flex",
							gap: "0.6rem",
							alignItems: "center",
						}}
					>
						{slides.map((_, i) => (
							<button
								key={i}
								id={`carousel-dot-${i}`}
								onClick={() => setCurrent([i, i > current ? 1 : -1])}
								style={{
									width: i === current ? "2.5rem" : "0.5rem",
									height: "0.5rem",
									borderRadius: "999px",
									border: "none",
									cursor: "pointer",
									background:
										i === current
											? "linear-gradient(90deg, #9333ea, #c084fc)"
											: "rgba(255,255,255,0.25)",
									transition: "all 0.4s ease",
									padding: 0,
								}}
							/>
						))}
					</div>

					{/* Prev / Next */}
					<div style={{ display: "flex", gap: "0.75rem" }}>
						<motion.button
							id='carousel-prev'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => paginate(-1)}
							style={{
								width: "48px",
								height: "48px",
								borderRadius: "50%",
								border: "1px solid rgba(168,85,247,0.35)",
								background: "rgba(255,255,255,0.05)",
								backdropFilter: "blur(10px)",
								color: "white",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<ChevronLeft size={20} />
						</motion.button>
						<motion.button
							id='carousel-next'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => paginate(1)}
							style={{
								width: "48px",
								height: "48px",
								borderRadius: "50%",
								border: "1px solid rgba(168,85,247,0.35)",
								background: "rgba(168,85,247,0.15)",
								backdropFilter: "blur(10px)",
								color: "white",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<ChevronRight size={20} />
						</motion.button>
					</div>

					{/* Slide counter */}
					<div
						style={{
							fontFamily: "'Space Grotesk', sans-serif",
							fontSize: "0.8rem",
							color: "rgba(255,255,255,0.45)",
							letterSpacing: "0.1em",
						}}
					>
						<span style={{ color: "#c084fc", fontWeight: 700 }}>
							{String(current + 1).padStart(2, "0")}
						</span>{" "}
						/ {String(slides.length).padStart(2, "0")}
					</div>
				</div>

				{/* Progress bar */}
				<AnimatePresence>
					{isPlaying && (
						<motion.div
							key={`progress-${current}`}
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 5.5, ease: "linear" }}
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								height: "3px",
								background:
									"linear-gradient(90deg, #7e22ce, #c084fc)",
								transformOrigin: "left",
							}}
						/>
					)}
				</AnimatePresence>
			</div>

			{/* Scroll indicator */}
			<motion.div
				animate={{ y: [0, 8, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				style={{
					position: "absolute",
					bottom: "5rem",
					right: "2rem",
					zIndex: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "0.4rem",
					opacity: 0.5,
				}}
			>
				<div
					style={{
						width: "1px",
						height: "50px",
						background:
							"linear-gradient(180deg, transparent, #a855f7)",
					}}
				/>
				<span
					style={{
						fontFamily: "'Space Grotesk', sans-serif",
						fontSize: "0.65rem",
						color: "#9b97b0",
						letterSpacing: "0.15em",
						textTransform: "uppercase",
						writingMode: "vertical-rl",
					}}
				>
					Scroll
				</span>
			</motion.div>
		</section>
	);
}
