const btnLogin = document.getElementsByClassName("header-btn")[0];
const modal = document.getElementById('loginModal');
const close = document.getElementsByClassName('close')[0];

btnLogin.onclick = function(){
	modal.style.display = 'block';
}
close.onclick = function(){
	modal.style.display = 'none';
}

let interval = setInterval(function examination(){

	let login = document.getElementById('login');
	let password = document.getElementById('Password');
	let signBtn = document.getElementById('btn');

	if(login.value !== "" && password.value !== "") signBtn.disabled = false;
}, 1000)

document.getElementById('login').addEventListener('keyup', insert);
document.getElementById('Password').addEventListener('keyup', insert);

function insert(){
	this.value = this.value.replace(/[^\dA-Za-z0-9]/g, '');	
};

const slderItem = document.querySelectorAll(".slider-item");
slderItem.forEach(function(item){
	item.addEventListener("click", function(){
		let sliderNum = item.children[0];

		slderItem.forEach(function(item){
			item.children[0].classList.remove('active');
		});

		sliderNum.classList.add('active');
	});
});
