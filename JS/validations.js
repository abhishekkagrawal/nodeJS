'use strict';

function validateLoginFrom() {
	if (loginForm.associateId.value == "") {
		alert("Enter userName");
		return false;
	}
	else if (loginForm.password.value == "") {
		alert("Enter Password");
		return false;
	}
}

function validateRegistrationForm() {
	if (registerForm.firstName.value=="") {
		alert("Enter first name");
		return false;
	}
	else if (registerForm.lastName.value=="") {
		alert("Enter last name");
		return false;
	}
	else if (registerForm.emailId.value=="") {
		alert("Enter email id");
		return false;
	}
	else if (registerForm.department.value=="") {
		alert("Enter department");
		return false;
	}
	else if (registerForm.designation.value=="") {
		alert("Enter designation");
		return false;
	}
	else if (registerForm.pancard.value=="") {
		alert("Enter pancard number");
		return false;
	}
	else if (registerForm.yearlyInvestmentUnder8oC.value=="") {
		alert("Enter yearly investment");
		return false;
	}
	else if (registerForm.basicSalary.value=="") {
		alert("Enter basic salary");
		return false;
	}
	if (registerForm.bankName.value=="") {
		alert("Enter bank name");
		return false;
	}
	if (registerForm.accountNo.value=="") {
		alert("Enter account number");
		return false;
	}
	if (registerForm.ifscCode.value=="") {
		alert("Enter bank ifsc code");
		return false;
	}
}

function validateChangePwdFrom() {
	if (loginForm.associateId.value == "") {
		alert("Enter userName");
		return false;
	}
	else if (loginForm.opassword.value == "") {
		alert("Enter Old Password");
		return false;
	}
	else if (loginForm.npassword.value == "") {
		alert("Enter New Password");
		return false;
	} 
	else if (loginForm.cnpassword.value == "") {
		alert("Confirm New Password");
		return false;
	} 
}

function valid() {
	if (changePwdForm.npassword.value.length >= 6) {
		if(changePwdForm.npassword.value.search(/[0-9]/) != -1 && changePwdForm.npassword.value.search(/[A-Z]/) != -1 && changePwdForm.npassword.value.search(/[!@#$%^&*()_+]/) != -1) { 
			return true;
		}
		else {
			alert("password must contain atleast 1 number 1 uppercase letter and 1 special character");
			return false;
		}
	}
	else {
		alert("minimum of 6 charecters");
		return false;
	}
}
function same() {
	if(changePwdForm.npassword.value != changePwdForm.cnpassword.value) {
		alert("password and confirm password did not match");
		return false;
	}
}
