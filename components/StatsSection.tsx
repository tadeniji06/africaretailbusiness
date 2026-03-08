"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";

const stats = [
	{
		icon: "ph:storefront-bold",
		value: 2.4,
		suffix: "T",
		prefix: "$",
		label: "Retail Market Size",
		desc: "Africa's projected retail market by 2030",
	},
	{
		icon: "ph:users-bold",
		value: 1.4,
		suffix: "B+",
		prefix: "",
		label: "Consumers",
		desc: "Total addressable population",
	},
	{
		icon: "ph:trend-up-bold",
		value: 12,
		suffix: "%",
		prefix: "",
		label: "Annual Growth Rate",
		desc: "Fastest growing retail markets globally",
	},
	{
		icon: "ph:device-mobile-bold",
		value: 70,
		suffix: "%",
		prefix: "",
		label: "Mobile Commerce",
		desc: "Of transactions via mobile devices",
	},
];

function CountUp({
	target,
	prefix,
	suffix,
	active,
}: {
	target: number;
	prefix: string;
	suffix: string;
	active: boolean;
}) {
	const [val, setVal] = useState(0);

	useEffect(() => {
		if (!active) return;
		const duration = 2000;
		const steps = 60;
		const step = target / steps;
		let current = 0;
		const interval = setInterval(() => {
			current += step;
			if (current >= target) {
				setVal(target);
				clearInterval(interval);
			} else {
				setVal(parseFloat(current.toFixed(1)));
			}
		}, duration / steps);
		return () => clearInterval(interval);
	}, [active, target]);

	return (
		<span className='gradient-text'>
			{prefix}
			{val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)}
			{suffix}
		</span>
	);
}

export default function StatsSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			style={{
				padding: "5rem 0",
				background:
					"linear-gradient(135deg, rgba(126,34,206,0.08) 0%, transparent 50%, rgba(126,34,206,0.06) 100%)",
				borderTop: "1px solid rgba(168,85,247,0.08)",
				borderBottom: "1px solid rgba(168,85,247,0.08)",
			}}
		>
			<div className='container-custom'>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(220px, 1fr))",
						gap: "2rem",
					}}
				>
					{stats.map((stat, i) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							style={{
								textAlign: "center",
								padding: "2rem 1.5rem",
								borderRadius: "1rem",
								border: "1px solid rgba(168,85,247,0.1)",
								background: "rgba(255,255,255,0.02)",
								position: "relative",
								overflow: "hidden",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: "50%",
									transform: "translateX(-50%)",
									width: "80%",
									height: "1px",
									background:
										"linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
								}}
							/>
							<div
								style={{
									width: "52px",
									height: "52px",
									borderRadius: "12px",
									background: "rgba(168,85,247,0.12)",
									border: "1px solid rgba(168,85,247,0.2)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "0 auto 1.25rem",
								}}
							>
								<Icon icon={stat.icon} width={24} color='#a855f7' />
							</div>
							<div
								style={{
									fontSize: "clamp(2rem, 4vw, 2.8rem)",
									fontFamily: "'Playfair Display', serif",
									fontWeight: 900,
									marginBottom: "0.35rem",
									lineHeight: 1,
								}}
							>
								<CountUp
									target={stat.value}
									prefix={stat.prefix}
									suffix={stat.suffix}
									active={inView}
								/>
							</div>
							<div
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									fontWeight: 700,
									color: "white",
									fontSize: "0.95rem",
									marginBottom: "0.25rem",
								}}
							>
								{stat.label}
							</div>
							<div
								style={{
									fontFamily: "'Space Grotesk', sans-serif",
									color: "#9b97b0",
									fontSize: "0.8rem",
								}}
							>
								{stat.desc}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
