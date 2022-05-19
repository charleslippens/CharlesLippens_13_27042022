import featuresData from "../datas/dataFeatures.jsx";
import Banner from "../components/banner.jsx";
import Features from "../components/feature.jsx";

function Home() {
	return (
		<main>
			<Banner />
			<section className="features">
				<h2 className="sr-only">Features</h2>
				{featuresData.map((feature, index) => (
					<Features
						key={index}
						img={feature.img}
						alt={feature.alt}
						title={feature.title}
						text={feature.text}
					/>
				))}
			</section>{" "}
		</main>
	);
}

export default Home;
