import Layout from "../components/layout";

function IndexPage() {
	return (
		<Layout>
			<div className="flex flex-col items-center justify-center">
				<h2 className="p-3 my-8 text-lg font-bold bg-black text-white md:text-2xl">
					Welcome to your first Next.js site.
				</h2>
			</div>
		</Layout>
	);
}

export default IndexPage;
