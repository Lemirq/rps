import { useStore } from '../contextStore';

const Header = () => {
	const { score } = useStore((state) => state);
	return (
		<div className="absolute top-8 px-5 mb-20 w-full max-w-3xl">
			<div className="border-4 px-7 fr rounded-2xl py-5 w-full border-header-outline">
				<div className="fc items-start text-xl sm:text-4xl uppercase leading-none w-full">
					<p>Rock</p>
					<p>Paper</p>
					<p>Scissors</p>
				</div>
				<div className="bg-white aspect-square px-5 py-2 sm:px-10 sm:py-4 fc gap-2 rounded-xl">
					<p className="uppercase text-sm text-score-text tracking-[0.1em]">Score</p>
					<p className="text-4xl sm:text-6xl text-dark-text">{score}</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
