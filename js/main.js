// $(function() {
//     var ids = [110, 111, 112, 113, 114, 115, 116, 117, 118]
//     $('#Id').autocomplete({
//         source:ids,
//         minLength: 2
//     })
// })
$(document).ready(function(e) {
    $(':disabled').addClass('border-red-500')
    function toggleEnable(before, after) {
        if($(`#${before}`).val()) {
            $(`#${after}`).removeAttr('disabled').addClass('border-yellow-500').removeClass('border-red-500')
        } else {
            $(`#${after}`).attr('disabled', true).addClass('border-red-500').removeClass('border-yellow-500')
        }
    }
    function getPrice() {
        let amount = $('#amount').val()
        let retail = $('#retail').val() || 0
        $('#price').val(amount * retail)
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
    $('#check').click(function() {
        if($(this).is(':checked')) {
            $('#discount').removeAttr('disabled').addClass('border-yellow-500').removeClass('border-red-500')
        } else  {
            $('#discount').attr('disabled', true).addClass('border-red-500').removeClass('border-yellow-500')
        }
    })
    $('#check1').click(function() {
        if($(this).is(':checked')) {
            $('#jer').removeAttr('disabled').addClass('border-yellow-500').removeClass('border-red-500')
        } else  {
            $('#jer').attr('disabled', true).addClass('border-red-500').removeClass('border-yellow-500')
        }
    })
    $('#getPrice').click(function() {
        console.log("Hello")
    })
    $('#retail').keyup(function() {
        getPrice()
    })
    $('#amount').keyup(function() {
        getPrice()
    })
    $('#product_list td').dblclick(function() {
        let id = $(this).data('value')
        $(this).attr('id', id)
        $(this).html(`<input type="number" id='x' class="w-12 text-black">`)
        console.log($(`#x`).val())
        $(`#x`).keyup(function(e) {
            if(e.key === "Enter") {
                $(`#${id}`).text($(`#x`).val())
            }
        })
    })
    $('.customer_table td button').click(function() {
        let id = $(this).data('value')
        console.log(id)
        $('.store-form').attr('id', id)
        $(`#${id}`).toggle(400)
    })
    $('.fa-xmark').click(function() {
        $('.store-form').hide(400)
    })
   
})