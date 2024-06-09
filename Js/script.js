



    function validateForm() {
        var name1 = document.getElementById("name1").value;
        var email1 = document.getElementById('email').value;
        var phone1 = document.getElementById('phone').value;
        var message1 = document.getElementById('message').value;
        
        alert();
        Email.send({
            SecureToken : "d6e3213e-deca-44b2-b5f3-1dac0bdde648",
            To : 'yvelito@gmail.com',
            From : "yvelito@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body. the name:" + name1
        }).then(
          message => alert(message)
        );
    }

   