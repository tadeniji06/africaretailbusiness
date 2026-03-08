"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<>
			<motion.nav
				initial={{ y: -80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 1000,
					transition: "all 0.4s ease",
					background: isScrolled
						? "rgba(10, 10, 15, 0.92)"
						: "transparent",
					backdropFilter: isScrolled ? "blur(20px)" : "none",
					borderBottom: isScrolled
						? "1px solid rgba(168, 85, 247, 0.12)"
						: "1px solid transparent",
				}}
			>
				<div
					className='container-custom'
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						height: "72px",
					}}
				>
					{/* Logo */}
					<Link href='/' style={{ textDecoration: "none" }}>
						<motion.div
							whileHover={{ scale: 1.02 }}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
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
									flexShrink: 0,
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
										lineHeight: 1.1,
										letterSpacing: "-0.01em",
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
										fontWeight: 600,
									}}
								>
									Business
								</div>
							</div>
						</motion.div>
					</Link>

					{/* Desktop Nav */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "2rem",
						}}
						className='desktop-nav'
					>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontWeight: 500,
									fontSize: "0.95rem",
									color:
										pathname === link.href ? "#c084fc" : "#9b97b0",
									textDecoration: "none",
									position: "relative",
									padding: "0.25rem 0",
									transition: "color 0.2s ease",
								}}
								className='nav-link'
							>
								{link.label}
								{pathname === link.href && (
									<motion.span
										layoutId='navUnderline'
										style={{
											position: "absolute",
											bottom: -2,
											left: 0,
											right: 0,
											height: "2px",
											background:
												"linear-gradient(90deg, #9333ea, #c084fc)",
											borderRadius: "1px",
										}}
									/>
								)}
							</Link>
						))}

						<Link
							href='/contact'
							className='btn-primary'
							style={{
								padding: "0.6rem 1.4rem",
								fontSize: "0.875rem",
							}}
						>
							<span>Subscribe</span>
							<Icon icon='ph:arrow-right-bold' width={16} />
						</Link>
					</div>

					{/* Mobile Hamburger */}
					<button
						id='mobile-menu-btn'
						onClick={() => setMenuOpen(!menuOpen)}
						className='mobile-menu-btn'
						style={{
							background: "transparent",
							border: "none",
							color: "white",
							cursor: "pointer",
							padding: "0.5rem",
							display: "none",
						}}
					>
						<AnimatePresence mode='wait'>
							{menuOpen ? (
								<motion.div
									key='close'
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X size={24} />
								</motion.div>
							) : (
								<motion.div
									key='menu'
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu size={24} />
								</motion.div>
							)}
						</AnimatePresence>
					</button>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						key='mobile-menu'
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{
							type: "spring",
							damping: 30,
							stiffness: 300,
						}}
						style={{
							position: "fixed",
							inset: 0,
							zIndex: 999,
							background: "rgba(10, 10, 15, 0.98)",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "2rem",
						}}
					>
						{navLinks.map((link, i) => (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 + i * 0.07 }}
							>
								<Link
									href={link.href}
									style={{
										fontFamily: "'Playfair Display', serif",
										fontSize: "2.5rem",
										fontWeight: 700,
										color:
											pathname === link.href ? "#c084fc" : "white",
										textDecoration: "none",
										display: "block",
										textAlign: "center",
									}}
								>
									{link.label}
								</Link>
							</motion.div>
						))}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							style={{ marginTop: "1rem" }}
						>
							<Link href='/contact' className='btn-primary'>
								<span>Subscribe Now</span>
								<Icon icon='ph:arrow-right-bold' width={16} />
							</Link>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<style jsx global>{`
				@media (max-width: 768px) {
					.desktop-nav {
						display: none !important;
					}
					.mobile-menu-btn {
						display: flex !important;
					}
				}
				.nav-link:hover {
					color: #c084fc !important;
				}
			`}</style>
		</>
	);
}
