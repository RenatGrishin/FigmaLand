function onEntry (entry, getClass){
	entry.forEach( (change)=>{
		if(change.isIntersecting) {
			change.target.classList.remove(getClass);
			change.target.classList.add('animated');
		}
	} )
}
function startAnimation(getClass) {
	for(let elem of $(`.${getClass}`)){
		let observer = new IntersectionObserver((e)=>{
			onEntry(e, getClass)
		}, {threshold:[0.3]});
		observer.observe( elem )
	}
}

startAnimation('animShow-downToUp');
startAnimation('animShow-upToDown');
startAnimation('animShow-leftToRight');
startAnimation('animShow-rightToLeft');
startAnimation('animShow-justShow');