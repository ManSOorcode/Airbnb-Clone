import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const search = ({ fetchedData }) => {
	const router = useRouter();
	const { location, noOfGuest, startDate, endDate } = router.query;
	console.log(startDate);
	console.log(endDate);

	const startDateFormat = format(new Date(startDate), "dd MMM yyyy");

	console.log(startDateFormat);
	const endDateFormat = format(new Date(endDate), "dd MMM yyyy");

	const range = `${startDateFormat} - ${endDateFormat}`;

	const Map = dynamic(
		() => import("../components/Map"), // replace '@components/map' with your component's location
		{ ssr: false } // This line is important. It's what prevents server-side render
	);

	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noOfGuest} guests `} />
			<main className="flex pb-6">
				<section className="flex-grow px-6 pt-14">
					<p className="text-xs">
						Stay {range} for {noOfGuest} number of guest
					</p>
					<h1 className="mt-2 mb-6 text-3xl font-semibold">
						Stay in {location}
					</h1>
					<div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms & Bed</p>
						<p className="button">More Filter</p>
					</div>
					<div className="flex flex-col gap-4">
						{fetchedData.map(
							({ img, location, title, description, star, price, total }) => (
								<InfoCard
									key={img}
									img={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							)
						)}
					</div>
				</section>

				<section className="hidden lg:grid grid-rows-[repeat(10,1fr)]  min-w-[600px] z-20 pr-6  ">
					<div className="row-start-2  row-end-[9] ">
						<Map data={fetchedData} />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default search;

export const getServerSideProps = async () => {
	const data = [
		{
			img: "https://links.papareact.com/xqj",
			location: "Private room in center of London",
			title: "Stay at this spacious Edwardian House",
			description:
				"1 guest ?? 1 bedroom ?? 1 bed ?? 1.5 shared bthrooms ?? Wifi ?? Kitchen ?? Free parking ?? Washing Machine",
			star: 4.73,
			price: "??30 / night",
			total: "??117 total",
			long: -0.0022275,
			lat: 51.5421655,
		},
		{
			img: "https://links.papareact.com/hz2",
			location: "Private room in center of London",
			title: "Independant luxury studio apartment",
			description:
				"2 guest ?? 3 bedroom ?? 1 bed ?? 1.5 shared bthrooms ?? Wifi ?? Kitchen",
			star: 4.3,
			price: "??40 / night",
			total: "??157 total",
			long: -0.095091,
			lat: 51.48695,
		},
		{
			img: "https://links.papareact.com/uz7",
			location: "Private room in center of London",
			title: "London Studio Apartments",
			description:
				"4 guest ?? 4 bedroom ?? 4 bed ?? 2 bathrooms ?? Free parking ?? Washing Machine",
			star: 3.8,
			price: "??35 / night",
			total: "??207 total",
			long: -0.135638,
			lat: 51.521916,
		},
		{
			img: "https://links.papareact.com/6as",
			location: "Private room in center of London",
			title: "30 mins to Oxford Street, Excel London",
			description:
				"1 guest ?? 1 bedroom ?? 1 bed ?? 1.5 shared bthrooms ?? Wifi ?? Kitchen ?? Free parking ?? Washing Machine",
			star: 4.1,
			price: "??55 / night",
			total: "??320 total",
			long: -0.069961,
			lat: 51.472618,
		},
		{
			img: "https://links.papareact.com/xhc",
			location: "Private room in center of London",
			title: "Spacious Peaceful Modern Bedroom",
			description:
				"3 guest ?? 1 bedroom ?? 1 bed ?? 1.5 shared bthrooms ?? Wifi ?? Free parking ?? Dry Cleaning",
			star: 5.0,
			price: "??60 / night",
			total: "??450 total",
			long: -0.08472,
			lat: 51.510794,
		},
		{
			img: "https://links.papareact.com/pro",
			location: "Private room in center of London",
			title: "The Blue Room In London",
			description:
				"2 guest ?? 1 bedroom ?? 1 bed ?? 1.5 shared bthrooms ?? Wifi ?? Washing Machine",
			star: 4.23,
			price: "??65 / night",
			total: "??480 total",
			long: -0.094116,
			lat: 51.51401,
		},
		{
			img: "https://links.papareact.com/8w2",
			location: "Private room in center of London",
			title: "5 Star Luxury Apartment",
			description:
				"3 guest ?? 1 bedroom ?? 1 bed ?? 1.5 shared bthrooms ?? Wifi ?? Kitchen ?? Free parking ?? Washing Machine",
			star: 3.85,
			price: "??90 / night",
			total: "??650 total",
			long: -0.109889,
			lat: 51.521245,
		},
	];
	return {
		props: {
			fetchedData: data,
		},
	};
};
