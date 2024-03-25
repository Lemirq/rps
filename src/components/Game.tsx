import { motion } from 'framer-motion';
import Button from './Button';
import { reset, useStore } from '../contextStore';
import { useEffect } from 'react';
import { cn } from '../utils/cn';

const Game = () => {
	const { userPick, computerPick, setComputerPick, result, setResult, setScore, score } = useStore((state) => state);

	const comparePicks = () => {
		const picks: Array<'r' | 'p' | 's'> = ['r', 'p', 's'];
		const computerPick: 'r' | 'p' | 's' = picks[Math.floor(Math.random() * picks.length)];
		setComputerPick(computerPick);
		setTimeout(() => {
			console.log(userPick, computerPick);
			if (userPick && computerPick) {
				if (userPick === computerPick) {
					setResult('d');
				} else if (userPick === 'r' && computerPick === 's') {
					setResult('w');
					setScore(score + 1);
				} else if (userPick === 'p' && computerPick === 'r') {
					setResult('w');
					setScore(score + 1);
				} else if (userPick === 's' && computerPick === 'p') {
					setResult('w');
					setScore(score + 1);
				} else {
					setResult('l');
				}
			}
		}, 500);
	};

	useEffect(() => {
		comparePicks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fc gap-10">
			<div className="fr gap-10 items-end sm:items-center sm:gap-20 px-5">
				<div className="fc gap-10 flex-1">
					<p className="text-center text-2xl uppercase tracking-widest text-white">You Picked</p>
					<Button disabled type={userPick} />
				</div>
				<motion.div
					className="fc gap-2 overflow-hidden hidden sm:flex"
					initial={{ opacity: 0, width: 0 }}
					animate={{ opacity: 1, width: 'auto' }}
					transition={{ delay: 0.7 }}
				>
					<p className="text-nowrap text-center text-4xl uppercase tracking-widest text-white">
						{result === 'w' ? 'You Win' : result === 'l' ? 'You Lose' : 'Draw'}
					</p>
					<button
						onClick={reset}
						className={cn('font-barlow text-dark-text text-nowrap rounded-2xl bg-white px-10 py-3 uppercase tracking-widest', {
							'text-green-500': result === 'w',
							'text-red-500': result === 'l',
							'text-dark-text': result === 'd',
						})}
					>
						Play Again
					</button>
				</motion.div>
				<div className="fc gap-10 flex-1">
					<p className="text-center text-2xl uppercase tracking-widest text-white">The House Picked</p>
					<Button disabled empty={!result} type={computerPick} />
				</div>
			</div>
			<motion.div
				className="fc gap-2 overflow-hidden sm:hidden"
				initial={{ opacity: 0, width: 0 }}
				animate={{ opacity: 1, width: 'auto' }}
				transition={{ delay: 0.7 }}
			>
				<p className="text-nowrap text-center text-4xl uppercase tracking-widest text-white">
					{result === 'w' ? 'You Win' : result === 'l' ? 'You Lose' : 'Draw'}
				</p>
				<button
					onClick={reset}
					className={cn('font-barlow text-dark-text text-nowrap rounded-2xl bg-white px-10 py-3 uppercase tracking-widest', {
						'text-green-500': result === 'w',
						'text-red-500': result === 'l',
						'text-dark-text': result === 'd',
					})}
				>
					Play Again
				</button>
			</motion.div>
		</motion.div>
	);
};

export default Game;
