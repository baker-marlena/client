<<<<<<< HEAD
$(document).ready(function() {

  const API_URL = `https://littlehelpers.herokuapp.com/parent/`;

  $.ajax({
    url: `${API_URL}${localStorage.id}`,
    headers:{'Authorization': `Bearer ${localStorage.token}`},
    type: 'GET'
  })
  .then(function(data) {
    console.log(data)
=======
$(document).ready(function(){
  var apiUrl = `https://littlehelpers.herokuapp.com/parent/${localStorage.id}`;
  $.getJSON(apiUrl).then(function(data){
>>>>>>> mattsbranch
    var parentSource = $("#parent-template").html();
    var parentTemplate = Handlebars.compile(parentSource);
    var parentContext = {
      "parentName": data[0][0].name
    };
    $("#navbarSupportedContent").prepend(parentTemplate(parentContext))
    var childSource   = $("#child-template").html();
    var childTemplate = Handlebars.compile(childSource);
    for(var i=0; i < data.length; i++){
        var childContext = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points,
          "childURL": `https://little-helpers-b26e7.firebaseapp.com/child.html/?parent_id=${localStorage.id}&child_id=${data[1][i].id}`
        }
          $("#children").append(childTemplate(childContext))
    }
  });

  $("#addChild").click(function(){
    var childName = $("#childNameAdd").val();
<<<<<<< HEAD
    return   $.ajax({
        url: `${API_URL}${localStorage.id}`,
        headers:{'Authorization': `Bearer ${localStorage.token}`},
        type: 'POST',
        data: {childName}
      })
  });
=======
    let id = localStorage.id
    return $.post(`https://littlehelpers.herokuapp.com/parent/${id}/`, childName)
  })
>>>>>>> mattsbranch

  $("#deleteChild").click(function(){
    return   $.ajax({
        url: `${API_URL}${localStorage.id}/`,
        headers:{'Authorization': `Bearer ${localStorage.token}`},
        type: 'DELETE'
      })
    });
  });
});
