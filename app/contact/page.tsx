"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
	Send,
	CheckCircle2,
	Mail,
	Phone,
	MapPin,
	Clock,
} from "lucide-react";

const contactDetails = [
	{
		icon: Mail,
		label: "Editorial",
		value: "info@africaretailbusiness",
		desc: "Story tips & press releases",
	},
	{
		icon: Phone,
		label: "Advertising",
		value: "+234 800 ARB 0001",
		desc: "Media kit & partnerships",
	},
	{
		icon: MapPin,
		label: "Headquarters",
		value: "Lagos, Nigeria",
		desc: "With bureaus across Africa",
	},
	{
		icon: Clock,
		label: "Response Time",
		value: "Within 24 hours",
		desc: "Monday – Friday",
	},
];

const subjects = [
	"General Enquiry",
	"Editorial / Press",
	"Advertising & Media Kit",
	"Newsletter Subscription",
	"Partnership Opportunity",
	"Other",
];

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSubmitted(true);
		}, 1800);
	};

	return (
		<div style={{ background: "var(--black)" }}>
			{/* Hero */}
			<section
				style={{
					position: "relative",
					padding: "10rem 0 5rem",
					overflow: "hidden",
				}}
			>
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
							<Icon icon='ph:chat-dots-bold' width={12} />
							Get In Touch
						</span>
						<h1
							style={{
								fontSize: "clamp(2.5rem, 7vw, 4.8rem)",
								fontFamily: "'Playfair Display', serif",
								fontWeight: 900,
								color: "white",
								lineHeight: 1.1,
								marginBottom: "1rem",
							}}
						>
							Let&apos;s{" "}
							<span className='gradient-text'>Connect</span>
						</h1>
						<p
							style={{
								fontFamily: "'Space Grotesk', sans-serif",
								color: "rgba(255,255,255,0.55)",
								fontSize: "clamp(1rem, 2vw, 1.15rem)",
								maxWidth: "520px",
								margin: "0 auto",
								lineHeight: 1.75,
							}}
						>
							Whether you&apos;re a source, advertiser, subscriber or
							just curious — we&apos;d love to hear from you.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact info grid */}
			<div
				className='container-custom'
				style={{ marginBottom: "4rem" }}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(220px, 1fr))",
						gap: "1rem",
					}}
				>
					{contactDetails.map((item, i) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							style={{
								padding: "1.5rem",
								borderRadius: "1rem",
								border: "1px solid rgba(168,85,247,0.12)",
								background: "rgba(255,255,255,0.02)",
								display: "flex",
								gap: "1rem",
								alignItems: "flex-start",
							}}
						>
							<div
								style={{
									width: "42px",
									height: "42px",
									flexShrink: 0,
									borderRadius: "10px",
									background: "rgba(168,85,247,0.12)",
									border: "1px solid rgba(168,85,247,0.2)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<item.icon size={18} color='#a855f7' />
							</div>
							<div>
								<div
									style={{
										fontFamily: "'Space Grotesk', sans-serif",
										fontSize: "0.72rem",
										color: "#a855f7",
										fontWeight: 700,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										marginBottom: "0.2rem",
									}}
								>
									{item.label}
								</div>
								<div
									style={{
										fontFamily: "'Space Grotesk', sans-serif",
										color: "white",
										fontWeight: 600,
										fontSize: "0.875rem",
										marginBottom: "0.2rem",
									}}
								>
									{item.value}
								</div>
								<div
									style={{
										fontFamily: "'Space Grotesk', sans-serif",
										color: "#9b97b0",
										fontSize: "0.78rem",
									}}
								>
									{item.desc}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Form + sidebar */}
			<div
				className='container-custom'
				style={{ paddingBottom: "8rem" }}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1.6fr",
						gap: "3rem",
						alignItems: "start",
					}}
					className='contact-grid'
				>
					{/* Sidebar */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div
							style={{
								borderRadius: "1rem",
								overflow: "hidden",
								border: "1px solid rgba(168,85,247,0.15)",
								background: "var(--dark-2)",
							}}
						>
							<div style={{ position: "relative", height: "220px" }}>
								<img
									src='https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80&auto=format&fit=crop'
									alt='Africa Retail Business office'
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
											"linear-gradient(135deg, rgba(126,34,206,0.35), rgba(10,10,15,0.5))",
									}}
								/>
							</div>
							<div style={{ padding: "2rem" }}>
								<h3
									style={{
										fontFamily: "'Playfair Display', serif",
										fontWeight: 700,
										color: "white",
										fontSize: "1.25rem",
										marginBottom: "0.75rem",
									}}
								>
									Pitch a Story
								</h3>
								<p
									style={{
										fontFamily: "'Space Grotesk', sans-serif",
										color: "#9b97b0",
										fontSize: "0.875rem",
										lineHeight: 1.7,
										marginBottom: "1.5rem",
									}}
								>
									Have a tip, exclusive or story you think Africa
									Retail Business should cover? We want to hear from
									you.
								</p>
								<div
									className='divider'
									style={{ margin: "1.25rem 0" }}
								/>
								<h3
									style={{
										fontFamily: "'Playfair Display', serif",
										fontWeight: 700,
										color: "white",
										fontSize: "1.25rem",
										marginBottom: "0.75rem",
									}}
								>
									Advertise With Us
								</h3>
								<p
									style={{
										fontFamily: "'Space Grotesk', sans-serif",
										color: "#9b97b0",
										fontSize: "0.875rem",
										lineHeight: 1.7,
									}}
								>
									Reach 50,000+ retail professionals and industry
									decision-makers across Africa. Request our media kit
									today.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						{submitted ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								style={{
									textAlign: "center",
									padding: "5rem 2rem",
									borderRadius: "1rem",
									border: "1px solid rgba(168,85,247,0.2)",
									background: "rgba(168,85,247,0.05)",
								}}
							>
								<motion.div
									animate={{ scale: [1, 1.1, 1] }}
									transition={{ duration: 0.5 }}
									style={{ marginBottom: "1.5rem" }}
								>
									<CheckCircle2
										size={60}
										color='#a855f7'
										style={{ margin: "0 auto" }}
									/>
								</motion.div>
								<h3
									style={{
										fontFamily: "'Playfair Display', serif",
										fontSize: "1.8rem",
										fontWeight: 700,
										color: "white",
										marginBottom: "0.75rem",
									}}
								>
									Message Sent!
								</h3>
								<p
									style={{
										color: "#9b97b0",
										fontFamily: "'Space Grotesk', sans-serif",
									}}
								>
									Thank you for reaching out. Our team will get back
									to you within 24 hours.
								</p>
							</motion.div>
						) : (
							<form
								onSubmit={handleSubmit}
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "1.25rem",
									background: "var(--dark-2)",
									borderRadius: "1rem",
									padding: "2.5rem",
									border: "1px solid rgba(168,85,247,0.12)",
								}}
							>
								<div
									className='section-label'
									style={{ marginBottom: "0.25rem" }}
								>
									Send us a message
								</div>
								<h2
									style={{
										fontFamily: "'Playfair Display', serif",
										fontSize: "1.6rem",
										color: "white",
										fontWeight: 700,
										marginBottom: "0.5rem",
									}}
								>
									How Can We Help?
								</h2>

								{/* Name row */}
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "1fr 1fr",
										gap: "1rem",
									}}
									className='name-grid'
								>
									{["First Name", "Last Name"].map((label) => (
										<div key={label}>
											<label
												style={{
													display: "block",
													fontFamily: "'Space Grotesk', sans-serif",
													fontSize: "0.8rem",
													fontWeight: 600,
													color: "#9b97b0",
													marginBottom: "0.4rem",
													letterSpacing: "0.05em",
												}}
											>
												{label}
											</label>
											<input
												type='text'
												required
												id={`contact-${label.toLowerCase().replace(" ", "-")}`}
												placeholder={
													label === "First Name" ? "Amara" : "Diallo"
												}
												style={{
													width: "100%",
													padding: "0.75rem 1rem",
													background: "rgba(255,255,255,0.05)",
													border: "1px solid rgba(168,85,247,0.2)",
													borderRadius: "0.5rem",
													color: "white",
													fontFamily: "'Space Grotesk', sans-serif",
													fontSize: "0.9rem",
													outline: "none",
													transition: "border-color 0.2s ease",
												}}
												className='contact-input'
											/>
										</div>
									))}
								</div>

								{/* Email */}
								<div>
									<label
										style={{
											display: "block",
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.8rem",
											fontWeight: 600,
											color: "#9b97b0",
											marginBottom: "0.4rem",
											letterSpacing: "0.05em",
										}}
									>
										Email Address
									</label>
									<input
										type='email'
										required
										id='contact-email'
										placeholder='amara@company.com'
										style={{
											width: "100%",
											padding: "0.75rem 1rem",
											background: "rgba(255,255,255,0.05)",
											border: "1px solid rgba(168,85,247,0.2)",
											borderRadius: "0.5rem",
											color: "white",
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.9rem",
											outline: "none",
										}}
										className='contact-input'
									/>
								</div>

								{/* Subject */}
								<div>
									<label
										style={{
											display: "block",
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.8rem",
											fontWeight: 600,
											color: "#9b97b0",
											marginBottom: "0.4rem",
											letterSpacing: "0.05em",
										}}
									>
										Subject
									</label>
									<select
										required
										id='contact-subject'
										style={{
											width: "100%",
											padding: "0.75rem 1rem",
											background: "rgba(21, 21, 30, 0.95)",
											border: "1px solid rgba(168,85,247,0.2)",
											borderRadius: "0.5rem",
											color: "white",
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.9rem",
											outline: "none",
											appearance: "none",
											cursor: "pointer",
										}}
										className='contact-input'
									>
										<option
											value=''
											style={{ background: "#1a1a24" }}
										>
											Select a subject...
										</option>
										{subjects.map((s) => (
											<option
												key={s}
												value={s}
												style={{ background: "#1a1a24" }}
											>
												{s}
											</option>
										))}
									</select>
								</div>

								{/* Message */}
								<div>
									<label
										style={{
											display: "block",
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.8rem",
											fontWeight: 600,
											color: "#9b97b0",
											marginBottom: "0.4rem",
											letterSpacing: "0.05em",
										}}
									>
										Message
									</label>
									<textarea
										required
										id='contact-message'
										rows={5}
										placeholder="Tell us what's on your mind..."
										style={{
											width: "100%",
											padding: "0.75rem 1rem",
											background: "rgba(255,255,255,0.05)",
											border: "1px solid rgba(168,85,247,0.2)",
											borderRadius: "0.5rem",
											color: "white",
											fontFamily: "'Space Grotesk', sans-serif",
											fontSize: "0.9rem",
											outline: "none",
											resize: "vertical",
											lineHeight: 1.6,
										}}
										className='contact-input'
									/>
								</div>

								<motion.button
									type='submit'
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className='btn-primary'
									id='contact-submit'
									disabled={loading}
									style={{
										justifyContent: "center",
										opacity: loading ? 0.8 : 1,
									}}
								>
									{loading ? (
										<>
											<motion.div
												animate={{ rotate: 360 }}
												transition={{
													duration: 1,
													repeat: Infinity,
													ease: "linear",
												}}
											>
												<Icon icon='ph:spinner-gap-bold' width={18} />
											</motion.div>
											<span>Sending...</span>
										</>
									) : (
										<>
											<span>Send Message</span>
											<Send size={16} />
										</>
									)}
								</motion.button>
							</form>
						)}
					</motion.div>
				</div>
			</div>

			<style jsx global>{`
				.contact-input:focus {
					border-color: rgba(168, 85, 247, 0.5) !important;
				}
				@media (max-width: 768px) {
					.contact-grid {
						grid-template-columns: 1fr !important;
					}
					.name-grid {
						grid-template-columns: 1fr !important;
					}
				}
			`}</style>
		</div>
	);
}
