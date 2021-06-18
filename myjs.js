$(document).ready(function(){

// this is for displaying all registered members in database
    displayData();

  function displayData(){
      var handle = $("#result");
      handle.html("");

        $.ajax({
            method: "POST",
            url: "contact.php",
            data:"",
            success: function(data){
                
                var holder=JSON.parse(data);
                $.each(holder,function(key,val){
                 var row = $("<tr>"); 
                  row.html("<td>"+val.id+"</td>"
                    +"<td>"+val.name + "</td>"
                    +"<td>"+val.email +"</td>"
                    +"<td>"+val.password +"</td>"
                    +"<td>"+val.volunteer +"</td>"
                    +"<td>"+val.phone +"</td>"
                    +"<td>"+val.message +"</td>"

                handle.append(row);

                });
            }                    
         });

    }

 $("#regis").click(function(){
        
         var id = $("#id").val();
         var name = $("#name").val();
         var email = $("#email").val();
         var password = $("#password").val();
         var volunteer = $("#volunteer").val();
         var phone = $("#phone").val();
         var message = $("#message").val();
         
        $.ajax({
            type : "POST",
            url : "contact.php",
            data : {
                'done':1,
                'id':id,
                 'name':name,
                 'email':email,
                'password':password,
                'volunteer':volunteer,
                'phone':phone,
                'message':message,
            },
            
        });
    });

});