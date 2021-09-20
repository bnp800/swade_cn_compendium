Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'swade_cn_compendium',
			lang: 'cn',
			dir: 'compendium'
		});
	}
});
