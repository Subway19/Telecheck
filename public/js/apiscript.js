
	$(document).ready(function(){
			$("#btnGetTV").click(function(){

				var html = '';
				var requestData = $('#usr').val();

				var resultElement = $('#resultDiv');


			$.ajax({
					url : 'http://api.tvmaze.com/search/shows',
					method:'get',
					data: {q:requestData},
					dataType : 'json',
					success : function(data){

						if(data.message != null)
						{
							alert(data.message);
						}

						$.each(data,function(i,item){

							html +=	
							'<div class="jumbotron top-space">' +
							'<div class="row">'+
							'<div class="col-sm-4">' +

							'<br>' + 
									'<h3>'+ item.show.name + '</h3>' + '<br>'+
									'<img src='+ 
											item.show.image.medium +
											'>' + '<hr>'+
							'</div>'+
							'<div class="col-sm-8">'+
								'<h4>'+ 'Genres: </h4>' + item.show.genres  + '<br>'+
								'<h4>Summary:</h4> '+ item.show.summary + '<br>' +
								'<h4>Rating:</h4>' + item.show.rating.average+ '<br>'+
								'<h4>Premiered on and Status:</h4>' + item.show.premiered +
										 ', '+ item.show.status + '<br>' +
								'<h4>Airs at</h4> ' + item.show.schedule.time +' on ' + item.show.schedule.days+ ' '+
								'<br> <hr>' +
							'</div>' +
							'</div>' +

							'</div>';
							
						/*
							if(item.show.network.name !== "null")
							{	
					        html += '<h2>Network:</h2>' + item.show.network.name;
		                    	$('#resultDiv').html(html);


							}
							else
								{	
					        html += '<h2>Network:</h2>' + item.show.webChannel.name;
		                    	$('#resultDiv').html(html);


							}
							*/
							
			
							$('#resultDiv').html(html);
							

						});
						
					
						}

				});


			});


		});
