Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'swade-cn-compendium',
			lang: 'cn',
			dir: 'compendium'
		});
	}
});
