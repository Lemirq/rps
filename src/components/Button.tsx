import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../contextStore';

interface Props {
	type: 'r' | 'p' | 's' | null;
	disabled?: boolean;
	empty?: boolean;
}

const Button: FC<Props> = ({ type, disabled, empty }) => {
	const { setUserPick } = useStore((state) => state);

	const handleClick = () => {
		if (type) setUserPick(type);
	};

	const getGradient = () => {
		return type === 'r'
			? 'from-rock-gradient to-rock-gradient-to border-b-rock-shadow'
			: type === 's'
			? 'from-scissors-gradient to-scissors-gradient-to border-b-scissors-shadow'
			: 'from-paper-gradient to-paper-gradient-to border-b-paper-shadow';
	};

	const getImg = () => {
		return type === 'r' ? '/images/icon-rock.svg' : type === 's' ? '/images/icon-scissors.svg' : '/images/icon-paper.svg';
	};
	return (
		<AnimatePresence>
			{!disabled && !empty ? (
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className={`to-paper-gradient-to cursor-pointer rounded-full border-b-8 bg-gradient-to-b p-2 sm:p-7 ${getGradient()}`}
					onClick={handleClick}
				>
					<div className="fc border-t-off-white/70 aspect-square rounded-full border-t-8 bg-white px-6 sm:px-12">
						<img className="w-10 sm:w-20" src={getImg()} alt="" />
					</div>
				</motion.div>
			) : disabled && empty ? (
				<motion.div className={`bg-dark-text rounded-full p-2 sm:p-7`}>
					<div className="fc bg-dark-text aspect-square animate-ping rounded-full px-6 sm:px-12">
						<img className="w-10 sm:w-20" src={getImg()} alt="" />
					</div>
				</motion.div>
			) : disabled ? (
				<div className={`to-paper-gradient-to rounded-full border-b-8 bg-gradient-to-b p-2 sm:p-7 ${getGradient()}`}>
					<div className="fc border-t-off-white/70 aspect-square rounded-full border-t-8 bg-white px-6 sm:px-12">
						<img className="w-10 sm:w-20" src={getImg()} alt="" />
					</div>
				</div>
			) : null}
		</AnimatePresence>
	);
};

export default Button;
