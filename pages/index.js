import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />

			<main className="px-8 mx-auto max-w-7xl sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pd-5">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{props.exploreData?.map((item) => (
							<SmallCard
								key={item.img}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-x-scroll overflow-y-hidden ">
						{props.cardsData?.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>

				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb"
					buttonText="Get Inspired"
				/>
			</main>
			<Footer footerData={props.footerData} />
		</>
	);
}

export async function getStaticProps() {
	const exploreData = [
		{
			img: "https://links.papareact.com/5j2",
			location: "London",
			distance: "45-minute drive",
		},
		{
			img: "https://links.papareact.com/1to",
			location: "Manchester",
			distance: "4.5-hour drive",
		},
		{
			img: "https://links.papareact.com/40m",
			location: "Liverpool",
			distance: "4.5-hour drive",
		},
		{
			img: "https://links.papareact.com/msp",
			location: "York",
			distance: "4-hour drive",
		},
		{
			img: "https://links.papareact.com/2k3",
			location: "Cardiff",
			distance: "45-minute drive",
		},
		{
			img: "https://links.papareact.com/ynx",
			location: "Birkenhead",
			distance: "4.5-hour drive",
		},
		{
			img: "https://links.papareact.com/kji",
			location: "Newquay",
			distance: "6-hour drive",
		},
		{
			img: "https://links.papareact.com/41m",
			location: "Hove",
			distance: "2-hour drive",
		},
	];
	const cardsData = [
		{ img: "https://links.papareact.com/2io", title: "Outdoor getaways" },
		{ img: "https://links.papareact.com/q7j", title: "Unique stays" },
		{ img: "https://links.papareact.com/s03", title: "Entire homes" },
		{ img: "https://links.papareact.com/8ix", title: "Pet allowed" },
		{ img: "https://links.papareact.com/2io", title: "Outdoor getaways" },
		{ img: "https://links.papareact.com/q7j", title: "Unique stays" },
		{ img: "https://links.papareact.com/s03", title: "Entire homes" },
		{ img: "https://links.papareact.com/8ix", title: "Pet allowed" },
	];
	const footerData = [
		{
			heading: "ABOUT",
			subTopic1: "How Airbnb works",
			subTopic2: "Newsroom",
			subTopic3: "Investors",
			subTopic4: "Airbnb Plus",
			subTopic5: "Airbnb Luxe",
		},
		{
			heading: "COMMUNITY",
			subTopic1: "Accessibility",
			subTopic2: "This is not a real site",
			subTopic3: "Its pretty awesome clone",
			subTopic4: "Referrals accepted",
			subTopic5: "papafam",
		},
		{
			heading: "HOST",
			subTopic1: "Papa React",
			subTopic2: "Presents",
			subTopic3: "Zero to Full Stack Hero",
			subTopic4: "Hundreds of students",
			subTopic5: "Join Now",
		},
		{
			heading: "SUPPORT",
			subTopic1: "Help Center",
			subTopic2: "Ttrust & Safety",
			subTopic3: "Say Hi YouTube",
			subTopic4: "Easter Eggs",
			subTopic5: "For the Win",
		},
	];
	return {
		props: {
			exploreData,
			cardsData,
			footerData,
		},
	};
}
