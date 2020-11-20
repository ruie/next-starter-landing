function Footer() {
	return (
		<footer className="bg-black text-black">
			<ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
				<li>
					By{" "}
					<a
						href="https://ruie.dev"
						target="_blank"
						className="font-bold"
					>
						Ruie Dela Peña
					</a>
				</li>

				<li>
					<a
						href="https://github.com/ruie/next-landing-starter"
						target="_blank"
						className="font-bold"
					>
						GitHub
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
