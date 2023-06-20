const submitBtn = document.querySelector("#submitBtn");
const password = document.querySelector("#password");
const studId = document.querySelector("#studId");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (e)=>{
	if(studId.value === "" && password.value === ""){
		let error = document.createElement("div");
		error.textContent = "Login anay dzae, may lakat ka gad! hahaha joke "
		error.classList.add("errorClass");
		form.appendChild(error);
		studId.style.border = "1px solid red";
		password.style.border = "1px solid red";
		setTimeout(()=>{
			form.removeChild(error);
		}, 2000)
	}else if(studId.value === ""){
		let error = document.createElement("div");
		error.textContent = "ID anay dzae!"
		error.classList.add("errorClass");
		form.appendChild(error);
		studId.style.border = "1px solid red";
		setTimeout(()=>{
			form.removeChild(error);
		}, 2000)
	}else if(password.value === ""){
		let error = document.createElement("div");
		error.textContent = "Password pa dzae!"
		error.classList.add("errorClass");
		form.appendChild(error);
		password.style.border = "1px solid red";
		setTimeout(()=>{
			form.removeChild(error);
		}, 2000)
	}else{
		location.href="dashboard.html";
	}
})

studId.addEventListener("input", (e)=>{
	if(studId.value.length > 0){
		studId.style.border = "1px solid green";
	}
})
password.addEventListener("input", (e)=>{
	if(password.value.length > 0){
		password.style.border = "1px solid green";
	}
})