"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { BookOpen, PenLine, Clock } from "lucide-react";

export default function BlogPage() {
	return (
		<div style={{ background: "var(--black)", minHeight: "100svh" }}>
			{/* Page header */}
			<section
				style={{
					position: "relative",
					padding: "10rem 0 5rem",
					overflow: "hidden",
				}}
			>
				{/* Animated bg glow */}
				<div
					style={{
						position: "absolute",
						top: "40%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "700px",
						height: "400px",
						background:
							"radial-gradient(ellipse, rgba(147,51,234,0.18) 0%, transparent 70%)",
						pointerEvents: "none",
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80&auto=format&fit=crop)",
						backgroundSize: "cover",
						backgroundPosition: "center",
						opacity: 0.05,
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(180deg, transparent, var(--black) 100%)",
					}}
				/>

				<div
					className='container-custom'
					style={{
						position: "relative",
						zIndex: 2,
						textAlign: "center",
					}}
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<span
							className='badge badge-purple'
							style={{
								display: "inline-flex",
								marginBottom: "1.5rem",
							}}
						>
							<Icon icon='ph:newspaper-bold' width={12} />
							Publication
						</span>
						<h1
							style={{
								fontSize: "clamp(2.5rem, 7vw, 5rem)",
								fontFamily: "'Playfair Display', serif",
								fontWeight: 900,
								color: "white",
								lineHeight: 1.1,
								marginBottom: "1rem",
							}}
						>
							The <span className='gradient-text'>Blog</span>
						</h1>
						<p
							style={{
								fontFamily: "'Space Grotesk', sans-serif",
								color: "rgba(255,255,255,0.55)",
								fontSize: "clamp(1rem, 2vw, 1.15rem)",
								maxWidth: "540px",
								margin: "0 auto",
								lineHeight: 1.75,
							}}
						>
							In-depth analysis, market reports and expert commentary
							on Africa&apos;s retail landscape.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Category filters */}
			<div
				style={{
					borderTop: "1px solid rgba(168,85,247,0.1)",
					borderBottom: "1px solid rgba(168,85,247,0.1)",
					background: "rgba(255,255,255,0.01)",
					padding: "1.25rem 0",
					position: "sticky",
					top: "72px",
					zIndex: 50,
					backdropFilter: "blur(20px)",
				}}
			>
				<div
					className='container-custom'
					style={{
						display: "flex",
						gap: "0.75rem",
						overflowX: "auto",
						scrollbarWidth: "none",
						flexWrap: "wrap",
					}}
				>
					{[
						"All",
						"E-Commerce",
						"Consumer Trends",
						"Fintech",
						"Supply Chain",
						"Markets",
						"Investment",
						"Policy",
					].map((cat, i) => (
						<motion.button
							key={cat}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.05 }}
							id={`category-${cat.toLowerCase().replace(" ", "-")}`}
							style={{
								padding: "0.45rem 1rem",
								borderRadius: "999px",
								border:
									i === 0
										? "1px solid rgba(168,85,247,0.5)"
										: "1px solid rgba(168,85,247,0.15)",
								background:
									i === 0 ? "rgba(168,85,247,0.15)" : "transparent",
								color: i === 0 ? "#c084fc" : "#9b97b0",
								fontFamily: "'Space Grotesk', sans-serif",
								fontSize: "0.82rem",
								fontWeight: 500,
								cursor: "pointer",
								whiteSpace: "nowrap",
								transition: "all 0.2s ease",
							}}
						>
							{cat}
						</motion.button>
					))}
				</div>
			</div>

			{/* Empty state */}
			<section
				style={{
					padding: "6rem 0 10rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<div className='container-custom'>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						style={{
							maxWidth: "580px",
							margin: "0 auto",
						}}
					>
						{/* Animated illustration */}
						<motion.div
							animate={{ y: [0, -12, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							style={{
								width: "140px",
								height: "140px",
								margin: "0 auto 2.5rem",
								borderRadius: "50%",
								background:
									"radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(147,51,234,0.05) 70%)",
								border: "1.5px solid rgba(168,85,247,0.25)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
							}}
						>
							{/* Orbiting dots */}
							{[0, 1, 2].map((i) => (
								<motion.div
									key={i}
									animate={{ rotate: 360 }}
									transition={{
										duration: 6 + i * 2,
										repeat: Infinity,
										ease: "linear",
										delay: i * 1.5,
									}}
									style={{
										position: "absolute",
										inset: `-${10 + i * 14}px`,
										borderRadius: "50%",
										border: `1px dashed rgba(168,85,247,${0.15 - i * 0.03})`,
									}}
								/>
							))}
							<Icon
								icon='ph:newspaper-bold'
								width={56}
								color='#a855f7'
							/>
						</motion.div>

						<h2
							style={{
								fontFamily: "'Playfair Display', serif",
								fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
								fontWeight: 700,
								color: "white",
								marginBottom: "1rem",
								lineHeight: 1.2,
							}}
						>
							Our First Story Is{" "}
							<span className='gradient-text'>Being Written</span>
						</h2>
						<p
							style={{
								fontFamily: "'Space Grotesk', sans-serif",
								color: "rgba(255,255,255,0.5)",
								lineHeight: 1.8,
								fontSize: "1rem",
								marginBottom: "2.5rem",
							}}
						>
							Our editorial team is hard at work crafting in-depth,
							authoritative coverage of Africa&apos;s retail industry.
							Subscribe to be the first to read our debut publication.
						</p>

						{/* Feature previews */}
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "1rem",
								marginBottom: "2.5rem",
							}}
							className='preview-grid'
						>
							{[
								{
									icon: <BookOpen size={18} />,
									label: "In-Depth Reports",
								},
								{
									icon: <PenLine size={18} />,
									label: "Expert Analysis",
								},
								{ icon: <Clock size={18} />, label: "Breaking News" },
							].map((item) => (
								<div
									key={item.label}
									style={{
										padding: "1rem",
										borderRadius: "0.75rem",
										border: "1px solid rgba(168,85,247,0.12)",
										background: "rgba(255,255,255,0.02)",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: "0.5rem",
									}}
								>
									<span style={{ color: "#a855f7" }}>
										{item.icon}
									</span>
									<span
										style={{
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.78rem",
											color: "#9b97b0",
											fontWeight: 500,
										}}
									>
										{item.label}
									</span>
								</div>
							))}
						</div>

						{/* Email subscribe */}
						<div
							style={{
								background: "rgba(168,85,247,0.06)",
								border: "1px solid rgba(168,85,247,0.18)",
								borderRadius: "1rem",
								padding: "2rem",
							}}
						>
							<div
								className='section-label'
								style={{
									marginBottom: "0.75rem",
									textAlign: "center",
								}}
							>
								Be the First to Read
							</div>
							<p
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									color: "#9b97b0",
									fontSize: "0.875rem",
									marginBottom: "1.25rem",
								}}
							>
								Enter your email and we&apos;ll notify you the moment
								we publish.
							</p>
							<div
								style={{
									display: "flex",
									gap: "0.75rem",
									flexWrap: "wrap",
									justifyContent: "center",
								}}
							>
								<input
									type='email'
									placeholder='your@email.com'
									id='blog-notify-email'
									style={{
										flex: 1,
										minWidth: "200px",
										padding: "0.75rem 1.25rem",
										background: "rgba(255,255,255,0.05)",
										border: "1px solid rgba(168,85,247,0.25)",
										borderRadius: "0.5rem",
										color: "white",
										fontFamily: "'Space Grotesk', sans-serif",
										fontSize: "0.9rem",
										outline: "none",
									}}
								/>
								<button className='btn-primary' id='blog-notify-btn'>
									<span>Notify Me</span>
									<Icon icon='ph:bell-bold' width={16} />
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<style jsx global>{`
				@media (max-width: 500px) {
					.preview-grid {
						grid-template-columns: 1fr !important;
					}
				}
			`}</style>
		</div>
	);
}
