const TresD = ({ planetID }) => { 
	const srcs = [
		'https://eyes.nasa.gov/apps/exo/#/system/TIC_172900988_Aa',
		'https://eyes.nasa.gov/apps/exo/#/planet/14_Her_b',
		'https://eyes.nasa.gov/apps/exo/#/planet/TOI-849_b',
		'https://eyes.nasa.gov/apps/exo/#/planet/TRAPPIST-1_e',
		'https://eyes.nasa.gov/apps/exo/#/planet/HD_23472_d'
	]
	return (
		// biome-ignore lint/style/useSelfClosingElements: <explanation>
		<iframe allowfullscreen="" frameborder="0" height="600px" id="exo_pioneer_module" src={srcs[planetID]} width="100%" title="helllo" data-gtm-yt-inspected-14="true"></iframe>
)
}

export default TresD
