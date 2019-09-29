let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		let prevProductCount = +productsCountEl.textContent;
		console.log(prevProductCount);
		productsCountEl.textContent = prevProductCount + 1;
	});
};


 $('.slider').slick({
   	dots: true
 });

let likeEl = document.querySelectorAll(".like");
let countPress = 0;

for (let i=0; i < likeEl.length; i++){
	likeEl[i].addEventListener("click", function(){
		countPress = countPress + 1;
		console.log(countPress);
		if (countPress == 1){
			console.log("liked");

		} else if (countPress == 2){
			console.log ("disliked");
			countPress = 0;
		}
		});
	};

	/*likeEl[countPress].addEventListener("click", function(){
		countPress++;
		if (countPress ==1){
		console.log("liked");
		document.bgColor = 'red';
	} else if(countPress==2){
		console.log("disliked");
		document.bgColor = 'green';
		countPress = 1;
	}
	});*/


/*let countPress = 0;
 
function setBg() {
    countPress++;
    if (countPress == 1) {document.bgColor = 'red';}
    if (countPress == 2) {document.bgColor = 'green';countPress = 1;}
}*/