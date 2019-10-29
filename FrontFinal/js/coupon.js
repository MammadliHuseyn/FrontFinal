$(document).ready(function(){
    $("#couponBtn").click(function(){
        if($("#couponCode").val()=="12345"){
            swal("coupon succeed",'','success');
        }
        else{
            swal("wrong coupon",'','warning');
        }
    })
})