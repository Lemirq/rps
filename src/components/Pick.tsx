import Button from './Button';
import { motion } from 'framer-motion';

const Pick = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="fc mt-20 gap-5 bg-[url('/images/bg-triangle.svg')] bg-center bg-no-repeat sm-m:bg-contain"
		>
			<div className="fr gap-20 -translate-y-7 sm:translate-y-0">
				<Button type="p" />
				<Button type="s" />
			</div>
			<div className="fr">
				<Button type="r" />
			</div>
		</motion.div>
	);
};

export default Pick;
