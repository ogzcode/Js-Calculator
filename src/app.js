const clearBtn = document.querySelector("button");
const result = document.querySelector(".result");

const buttons = document.querySelectorAll("span");
const commit = document.querySelector(".commit");

let firstNum = "";
let secondNum = "";
let operator = "";


for (let button of buttons){
	button.addEventListener("click", () => {
		calculate(button.innerText);
	});
}

clearBtn.addEventListener("click", () => {
	commitChange("CLEAR");
	resetValue();
});

function isOperator(value){
	return (value == "+" || value == "-" || value == "*" || value == "/");
}

function isEqual(value){
	return value == "=";
}

function aritmeticProcess(value1, key, value2){
	if (key == "+"){
		return Number.parseInt(value1) + Number.parseInt(value2);
	}
	else if (key == "-"){
		return Number.parseInt(value1) - Number.parseInt(value2);
	}
	else if (key == "*"){
		return Number.parseInt(value1) * Number.parseInt(value2);
	}
	else if (key == "/"){
		return Number.parseInt(value1) / Number.parseInt(value2);
	}
}

function commitChange(text){
	result.innerText = 0;
	
	commit.innerText = text;
	commit.classList.add("active");
	
	setTimeout(() => {
		commit.classList.remove("active");
	}, 1000);
}

function resetValue(){
	firstNum = "";
	secondNum = "";
	operator = "";
}

function calculate(value){
	if (isOperator(value)){
		if (firstNum == "" || operator != ""){
			commitChange("ERROR");
			resetValue();
			return;
		}
		operator = value;
		result. innerText = operator;
	}
	else if (isEqual(value)){
		if (firstNum == "" || secondNum == ""){
			commitChange("ERROR");
			resetValue();
			return;
		}
		let res = aritmeticProcess(firstNum, operator, secondNum);
			
		result.innerText = res;
			
		resetValue();
	}
	else {
		if (operator == ""){
			firstNum += value;
			result.innerText = firstNum;
		}
		else {
			secondNum += value;
			result.innerText = secondNum;
		}
	}
}