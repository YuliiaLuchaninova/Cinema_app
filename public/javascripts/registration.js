$(function () {
    $("#form").validate({
        rules: {
            login: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 8
            }
        },
        messages: {
            login: "Enter you login",
            password: {
                required: "Enter your password",
                minlength: "Minimum password length is 5",
                maxlength: "Maximum password length is 8"
            },
            email: "Enter you email"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});


