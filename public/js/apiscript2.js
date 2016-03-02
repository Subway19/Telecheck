
$(document).ready(function(){




$("#btnGetTV").click(function(){
				var html2 = '';
				var requestEpisodes = $('#usr').val();
				var resultElementEp = $('#resultDiv');
				var url2 = 'http://api.tvmaze.com/singlesearch/shows?q=' + requestEpisodes + 
				'&embed=episodes';


				var getvalue = requestEpisodes + "&embed=episodes";

				$.ajax({
					url : url2,
					method:'get',
					data: {},
					dataType : 'json',
					success : function(data){

						console.log(data.name);

						var episodelist = data._embedded.episodes;
						//$('#resultDiv').html(data._embedded.episodes[0].name);

						$.each(episodelist,function(i,item){


							html2 += 
							'<div class="jumbotron top-space">'+
							'<div class="row">'+
							'<div class="col-sm-4">' +

								'<h3>'+ item.name + '</h3>' + '<br>'+
								'<img src ='+ item.image.original +'>'+ '<hr>' + 
									
							'</div>' +
							'<div class="col-sm-8">'+

								'<h4>Season: '  + item.season+ '</h4>' +
								'<h4>Episode number: ' + item.number + '</h4>' + 
								'<h4>Airdate: ' + item.airdate + '</h4>' + '<br>'+
								'<h4>Summary:</h4>' + item.summary + '<hr>'+
							'</div>' +



							'</div>' +
							'</div>' +
							'</div>';


							$('#resultDiv').html(html2);

								
						});

						

						}

				});


			});

});