
$(document).ready(function () {
    $(".main-side .addTocart").click(function () {
        $("#numOfitems").text(parseInt($("#numOfitems").text())+1)
        let itemPrice = $(this).next().next().text();
        let imgofproduct = $(this).prev().attr("src");
        let nameofproduct = $(this).next().text();
        localStorage.setItem("name_Of_Product", nameofproduct);
        localStorage.setItem("imgofProduct", imgofproduct);
        localStorage.setItem("itemPrice", itemPrice);
        console.log(localStorage);
        let imgof = localStorage.getItem("imgofProduct");
        let nameof = localStorage.getItem("name_Of_Product");
        let itemprice = localStorage.getItem('itemPrice');
        $('#item-name').text(nameof);
        $('#item-img').attr("src", imgof);
        let bucket = document.getElementById("bucket");
        let col = document.createElement('div');
        col.className = "col-12";
        bucket.appendChild(col);
        let img = document.createElement('img');
        img.setAttribute("src", imgof);
        let nameItem = document.createElement('a');
        nameItem.setAttribute('href', '#')
        nameItem.classList = "ml-3"
        col.appendChild(img);
        col.appendChild(nameItem);
        nameItem.innerText = nameof;
        let xBtn = document.createElement('button');
        xBtn.innerText = "X";
        col.appendChild(xBtn);
        xBtn.classList = "btn ml-3 text-right"
        xBtn.style.border = "1px solid black"
        $(xBtn).click(function () {
            $("#numOfitems").text(parseInt($("#numOfitems").text())-1)
            $(this).parent().remove();
           localStorage.clear();
        })
        swal(nameof, "is added to cart !", "success");
        $("#price").text(itemprice);

    })
})

$(document).ready(function () {
    $('.owl-carousel').on('click', '.item .addTocart', function () {  
       $("#numOfitems").text(parseInt($("#numOfitems").text())+1)
        let itemPrice = $(this).next().next().next().text();
        let imgofproduct = $(this).prev().attr("src");
        let nameofproduct = $(this).next().text();
        localStorage.setItem("name_Of_Product", nameofproduct);
        localStorage.setItem("imgofProduct", imgofproduct);
        localStorage.setItem("itemPrice", itemPrice);
        console.log(localStorage);
        let imgof = localStorage.getItem("imgofProduct");
        let nameof = localStorage.getItem("name_Of_Product");
        let itemprice = localStorage.getItem('itemPrice');
        let bucket = document.getElementById("bucket");
        let col = document.createElement('div');
        col.className = "col-12";
        bucket.appendChild(col);
        let img = document.createElement('img');
        img.setAttribute("src", imgof);
        let nameItem = document.createElement('a');
        nameItem.setAttribute('href', '#')
        nameItem.classList = "ml-3"
        col.appendChild(img);
        col.appendChild(nameItem);
        nameItem.innerText = nameof;
        let xBtn = document.createElement('button');
        xBtn.innerText = "X";
        col.appendChild(xBtn);
        xBtn.classList = "btn ml-3 text-right";
        xBtn.style.border = "1px solid black";
        $("#totalPrice").text(itemPrice);
        $(xBtn).click(function () {
            $("#numOfitems").text(parseInt($("#numOfitems").text())-1)
            $(this).parent().remove();
           localStorage.clear();
           $("#totalPrice").text(0);
        })
        swal(nameof, "is added to cart !", "success");
        $("#price").text(itemprice);    
    })
})

let sweetalert = (function () {
    for (let f in $('.addTocart')) {
        $(".addTocart").click(function () {
            swal(nameof, "is added to cart !", "success");
        })
    }
})





$(document).ready(function () {
    $("#view-cart").click(function () {
        window.location.replace("cart.html");
    })
    $("#bucket-icon").click(function () {
        let menu = $("#bucket-menu");
        menu.toggleClass("d-block");

    })
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
        $("#topheader").slideUp();
        $("#scrollTop").fadeIn();


    }
    if ($(window).scrollTop() == 0 && $(window).width() >= 992) {
        $("#topheader").slideDown();
        $("#scrollTop").fadeOut();

    }
})

$(document).ready(function(){
    $("#scrollTop").click(function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
})

$(".main-side img").hover(function () {
    $(this).next().toggleClass("animated fadeInUp d-block");
})
$(".main-side img").mouseout(function () {
    $(this).next().toggleClass("animated fadeOutDown d-block delay-1s");
})

$(document).ready(function () {
    $("#btn-decrease1").click(function () {
        let num = parseInt($("#input1").val());
        if (num != 0) {
            num--;
        }
        $("#input1").val(num);
        let total = parseInt($("#total1").text());
        if (total != 0) {
            total -= 36;
        }
        $("#total1").text($("#input1").val() * 36 + ".00");
        console.log(total)
    })
    $("#btn-increase1").click(function () {
        let num = parseInt($("#input1").val());
        num++;
        $("#input1").val(num);
        let total = parseInt($("#total1").text());
        total += 36;
        $("#total1").text($("#input1").val() * 36 + ".00");
        console.log(total)
    })
    $("#btn-decrease2").click(function () {
        let num = parseInt($("#input2").val());
        if (num != 0) {
            num--;
        }
        $("#input2").val(num);
        let total = parseInt($("#total2").text());
        if (total != 0) {
            total -= 16;
        }
        $("#total2").text($("#input2").val() * 16 + ".00");
        console.log(total)
    })
    $("#btn-increase2").click(function () {
        let num = parseInt($("#input2").val());
        num++;
        $("#input2").val(num);
        let total = parseInt($("#total2").text());
        total += 16;
        $("#total2").text($("#input2").val() * 16 + ".00");
        console.log(total)
    })

})

$(document).ready(function(){
    $("#remove-icon").click(function(){
        $("#for-sale-header").toggleClass('d-none')
    })
})

$(document).ready(function(){
    $("#Best-seller").click(function(){
        $(".best-seller-items").addClass('d-block');
        $(".best-seller-items").removeClass("d-none");
        $(".Featured-items").addClass('d-none');
        $(".Featured-items").removeClass('d-block');
        $(".Sale-items").removeClass("d-block");
        $(".Top-Rate").removeClass("d-block");
        $(".Top-Rate").addClass('d-none');
    })
    $("#Featured").click(function(){
        $(".best-seller-items").addClass("d-none");
        $(".best-seller-items").removeClass("d-block");
        $(".Featured-items").addClass("d-block");
        $(".Sale-items").addClass("d-none");
        $(".Featured-items").removeClass("d-none");
        $(".Sale-items").removeClass("d-block");
        $(".Top-Rate").removeClass("d-block");

    })
    $("#Sale").click(function(){
        $(".best-seller-items").addClass("d-none");
        $(".Featured-items").addClass('d-none');
        $(".Sale-items").removeClass("d-none");
        $(".best-seller-items").removeClass("d-block");
        $(".Featured-items").removeClass("d-block");
        $(".Sale-items").addClass('d-block');
        $(".Top-Rate").removeClass("d-block");
    })
    $("#Top-Rate").click(function(){
        $(".best-seller-items").addClass("d-none");
        $(".Featured-items").addClass('d-none');
        $(".Sale-items").removeClass("d-none");
        $(".best-seller-items").removeClass("d-block");
        $(".Featured-items").removeClass("d-block");
        $(".Sale-items").removeClass("d-block");
        $(".Top-Rate").addClass('d-block');
    })
})

$(document).ready(function(){
    $("#play-video").click(function(){
       $("iframe").toggleClass("d-block");
       $("#scrollTop").click(function(){
        $("iframe").addClass('d-none');
       })
    })
})