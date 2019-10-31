$(document).ready(function(){
    $("#couponBtn").click(function(){
        if($("#couponCode").val()=="12345"){
            swal("coupon succeed",'You earned 50% off','success');
            $("#total2").text(($("#total2").text())/2+".00");
            $("#total1").text(($("#total1").text())/2+".00");
        }
        else{
            swal("wrong coupon",'','warning');
        }
    })
})