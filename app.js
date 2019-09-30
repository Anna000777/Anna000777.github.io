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

/*let likeEl = document.querySelectorAll(".like");
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
	};*/

let likeButtons = document.querySelectorAll(".like");
console.log(likeButtons);

for (let i=0; i< likeButtons.length; i++){
	likeButtons[i].addEventListener("click", function(){
		if(likeButtons[i].classList.contains("liked")){
			likeButtons[i].classList.remove("liked")
		} else{
			likeButtons[i].classList.add("liked")
		}
	});
};

// change product count

let decrementButton = document.querySelector(".decrement-button");
let incrementButton = document.querySelector(".increment-button");
let quantityInput = document.querySelector(".quantity-input input");

console.log(decrementButton);



	let currentCount = +quantityInput.value;
	function toggleButtonState(count){
	decrementButton.disabled = count <= 1;
	incrementButton.disabled = count >= 5;
};

toggleButtonState(currentCount);

incrementButton.addEventListener("click", function(){
	let prevCount = +quantityInput.value;
	let nextCount = prevCount + 1;
	quantityInput.value = nextCount;

	toggleButtonState(nextCount);
});

decrementButton.addEventListener("click", function(){
	let prevCount = +quantityInput.value;
	let nextCount = prevCount - 1;
	quantityInput.value = nextCount;
	toggleButtonState(nextCount);
});




