$(document).ready(function(){

	$("#button").click(function(){
		var firstName = $("#firstName").val();
		var email = $("#emailAddress").val();
		var phone = $("#phoneNumber").val();
		var street = $("#street").val();
		var city = $("#city").val();
		var state = $("#state").val();
		var zipCode = $("#zipCode").val();
		var country = $("#country").val();
		console.log(firstName);
		console.log(email);
		console.log(phone);
		console.log(street);
		console.log(city);
		console.log(state);
		console.log(zipCode);
		console.log(country);
		$("#nameList").append("<h4 class='nameFormat'>" + firstName + "<div class='hidden textFormat'> <div>" + "<span class='classFont'> Email: </span>" + email + "</div> <div>" + "<span class='classFont'> Phone Number: </span>" + phone + "</div> <div>" + "<span class='classFont'> Street: </span>" + street + "</div> <div>" + "<span class='classFont'> City: </span>" + city + "</div> <div>" + "<span class='classFont'> State: </span>" + state + "</div> <div>" + "<span class='classFont'> Country: </span>" + country + "</div></div></h4>");
		$("#firstName").remove();
		$("#one").append("<input id='firstName' placeholder='Your name' type='text' autofocus>");
		$("#emailAddress").remove();
		$("#two").append("<input id='emailAddress' placeholder='Your Email Address' type='email'>");
		$("#phoneNumber").remove();
		$("#three").append("<input id='phoneNumber' placeholder='Your Phone Number' type='tel'>");
		$("#street").remove();
		$("#four").append("<input id='street' placeholder='Street'>");
		$("#city").remove();
		$("#state").remove();
		$("#zipCode").remove();
		$("#five").append("<input id='city' placeholder='City'> <input id='state' placeholder='State'><input id='zipCode' class='zipTwo' placeholder='Zipcode'>");
		$("#country").remove();
		$("#six").addClass("downBoy").append("<input id='country' placeholder='Country' type='text'>");
		$(".delete").remove();
	});

	$(document).on('click', '.nameFormat', function(){
		event.preventDefault();
		$(this).children().toggle('show');
		console.log("clicked");
	});

	$(document).on('click', '#plusThree', function(){
		$("#six").append("<h4 class='delete'>Address</h4><fieldset class='delete'> <input id='street' placeholder='Street'> </fieldset><fieldset class='delete'> <input id='city' placeholder='City'> <input id='state' placeholder='State'> <input id='zipCode' class='zipCode' placeholder='Zipcode'> </fieldset> <fieldset class='delete'> <input id='country' placeholder='Country'> </fieldset>");
	});

});







