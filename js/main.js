$(document).ready(function() {
    let id = 1
    $(':disabled').addClass('border-red-500')
    function toggleEnable(before, after) {
        if($(`#${before}`).val()) {
            $(`#${after}`).removeAttr('disabled').addClass('border-yellow-500').removeClass('border-red-500')
        } else {
            $(`#${after}`).attr('disabled', true).addClass('border-red-500').removeClass('border-yellow-500')
        }
    }
    $('#product').keyup(function() {
        toggleEnable('product', 'amount')
    })
    $('#amount').keyup(function() {
        toggleEnable('amount', 'retail')
    })
    $('#retail').keyup(function() {
        toggleEnable('retail', 'price')
    })
    // $('.fa-plus').click(() => {
    //     let table = ""
    //     let product = $('#product').val()
    //     let amount = $('#amount').val()
    //     let retail = $('#retail').val()
    //     let price = $('#price').val()
    //     let unit = $('#unit').val() ? $('#unit').val() : "Kg"
    //     let tr = `<tr class="">
    //         <td>${id}</td><td>${product}</td><td>${amount}${unit}</td><td>${retail}</td>
    //         <td>${price}</td><td><i data-value="${price}" id="getPrice" class="fa-solid fa-check cursor-pointer border-2 border-green-300 p-1 text-green-300"></i></td>
    //     </tr>`
    //     $('#product').val(null);$('#amount').val(null);$('#retail').val(null);$('#price').val(null)
    //     toggleEnable('product', 'amount');toggleEnable('amount', 'retail');toggleEnable('retail', 'price')
    //     $('#product_list tbody').append(tr)
    //     id++
    // })
    $('#check').click(function() {
        if($(this).is(':checked')) {
            $('#discount').removeAttr('disabled').addClass('border-yellow-500').removeClass('border-red-500')
        } else  {
            $('#discount').attr('disabled', true).addClass('border-red-500').removeClass('border-yellow-500')
        }
    })
    $('#getPrice').click(function() {
        console.log("Hello")
    })
})