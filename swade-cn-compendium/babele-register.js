Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'swade-cn-compendium',
			lang: 'cn',
			dir: 'compendium'
		});
	}
});
Babele.get().registerConverters({
    "fromPack": Converters.fromPack({
        "description": "data.description",
        "notes": "data.notes",
        "actions": "data.actions"
    })
});