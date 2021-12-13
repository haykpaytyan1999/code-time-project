window.onload = function(){
	let arr1 = [  `image.png`, `slide.png`];
	document.getElementById('logo_hov').style.backgroundImage = `url(${arr1[0]})`;
	document.getElementById('logo_hov').style.backgroundSize = 'cover';
	let i1 = 0;
	document.getElementById('dzaxx').onclick = function(){
		i1++;
		if (i1 == arr1.length){
			i1 = 0;
		}
		document.getElementById('logo_hov').style.backgroundImage = `url(${arr1[i1]})`;
		document.getElementById('logo_hov').style.backgroundSize = 'cover';
	}
	document.getElementById('ach').onclick = function(){
		if (i1 == 0) {
			i1 = arr1.length;
		}
		i1--;
		document.getElementById('logo_hov').style.backgroundImage = `url(${arr1[i1]})`;
		document.getElementById('logo_hov').style.backgroundSize = 'cover';
	}



	let arr = [ `slide.png`, `3.png`];
	document.getElementById('div_for_slide').style.backgroundImage = `url(${arr[0]})`;
	document.getElementById('div_for_slide').style.backgroundSize = 'cover';
	let i = 0;
	document.getElementById('dzax').onclick = function(){
		i++;
		if (i == arr.length){
			i = 0;
		}
		document.getElementById('div_for_slide').style.backgroundImage = `url(${arr[i]})`;
		document.getElementById('div_for_slide').style.backgroundSize = 'cover';
	}
	document.getElementById('aj').onclick = function(){
		if (i == 0) {
			i = arr.length;
		}
		i--;
		document.getElementById('div_for_slide').style.backgroundImage = `url(${arr[i]})`;
		document.getElementById('div_for_slide').style.backgroundSize = 'cover';
	}



	let arr2 = [ `interv.png`, `metric.png` ];
	document.getElementById('div_nkk').style.backgroundImage = `url(${arr2[0]})`;
	document.getElementById('div_nkk').style.backgroundSize = 'cover';
	let i3 = 0;
	document.getElementById('ddzax').onclick = function(){
		i3++;
		if (i3 == arr2.length){
			i3 = 0;
		}
		document.getElementById('div_nkk').style.backgroundImage = `url(${arr2[i3]})`;
		document.getElementById('div_nkk').style.backgroundSize = 'cover';
	}
	document.getElementById('aach').onclick = function(){
		if (i3 == 0) {
			i3 = arr2.length;
		}
		i3--;
		document.getElementById('div_nkk').style.backgroundImage = `url(${arr2[i3]})`;
		document.getElementById('div_nkk').style.backgroundSize = 'cover';
	}
}



let arr4 = [ `book_boxx`, `book_boxx1`];
	document.getElementById('div_her').style.backgroundImage = `url(${arr4[0]})`;
	document.getElementById('div_her').style.backgroundSize = 'cover';
	let i4 = 0;
	document.getElementById('dzaax').onclick = function(){
		i4++;
		if (i4 == arr4.length){
			i4 = 0;
		}
		document.getElementById('div_her').style.backgroundImage = `url(${arr4[i4]})`;
		document.getElementById('div_her').style.backgroundSize = 'cover';
	}
	document.getElementById('achh').onclick = function(){
		if (i4 == 0) {
			i4 = arr4.length;
		}
		i4--;
		document.getElementById('div_her').style.backgroundImage = `url(${arr4[i4]})`;
		document.getElementById('div_her').style.backgroundSize = 'cover';
	}

