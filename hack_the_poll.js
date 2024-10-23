


//website : 
// https://fast-poll.com/poll/08c7e1bf
// https://fast-poll.com/poll/results/08c7e1bf 
//paste it in a console of inspect element

//more than 100 votes from a same ip addr is not possible
// delete the cokkie and vote again

			$(".gdpr-cookie-message-wrapper").hide();

			$("#poll-form").on("submit", function (e) {
		 		 e.preventDefault();
 			    var dataString = $(this).serialize();
				$.ajax({
   			 	  type: "POST",
   			 	  url: "https://fast-poll.com/poll/08c7e1bf",
   			 	  data: dataString,
    			   success: function () {
             	 // Display message back to the user here
           			   console.log(count+ " vote submitted");
  			 	   }
    		   });
			 });
			
			$("#item_one_08d5e84e-dbc7-11eb-b0a2-020055").trigger("click");
			
			var count=0;
			let repeat = setTimeout(
				function change() {
					if (count<30) {
					$("[title='Submit your vote']").trigger("click");
					count++;


					repeat = setTimeout(change , 1500);
				    }
				}
			 ,1500);








