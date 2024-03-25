import { FC, useEffect } from 'react';
import Header from './components/Header';
import Pick from './components/Pick';
import Rules from './components/Rules';
import Game from './components/Game';

import { AnimatePresence } from 'framer-motion';
import { useStore } from './contextStore';
import { animated, useSpring } from '@react-spring/web';
const App: FC = () => {
	const { userPick, modalVisibility, showModal, result } = useStore((state) => state);
	// transition background to a red gradient if result is l, otherwise green, if draw yellow gradient

	const props = useSpring({
		background:
			result === 'l'
				? 'radial-gradient(ellipse at top, #3b1f1f, #261614'
				: result === 'w'
				? 'radial-gradient(ellipse at top, #1f3b2b, #142617)'
				: 'radial-gradient(ellipse at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
		config: { mass: 5, tension: 350, friction: 40 },
	});
	useEffect(() => {
		console.log('result ', result);
	}, [result]);

	return (
		<div className="fc h-screen w-screen overflow-hidden">
			<AnimatePresence mode="wait">{modalVisibility && <Rules />}</AnimatePresence>
			<animated.div style={props} className="fc font-barlow h-full w-full justify-evenly overflow-hidden pb-16 pt-20 text-white">
				<Header />
				<AnimatePresence mode="wait">{!userPick ? <Pick /> : <Game />}</AnimatePresence>
			</animated.div>
			<div className="fc sm:fr font-barlow absolute bottom-0 left-0 right-0 gap-3 sm:justify-end p-9 text-white">
				<button onClick={showModal} className="border-off-white rounded-lg border px-10 py-2 uppercase tracking-[.1em]">
					Rules
				</button>
				<a href="https://lemirq.github.io" target="blank">
					<button className="border-off-white fr gap-2 rounded-lg border px-5 py-2 uppercase tracking-[.1em]">
						Made by <img src="https://lemirq.github.io/images/logo-white.png" className="w-5" alt="" />
					</button>
				</a>
			</div>
		</div>
	);
};

export default App;
