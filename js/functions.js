$(function(){
    // Functions click and close

    openWindow();
    verifyClickClose();

    function openWindow(){
        $('.btn').on('click',function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }
    function verifyClickClose(){
        var el = $('body, .closeBtn');
        el.on('click',function(){
            $('.bg').fadeOut();
        });
        $('.form').on('click',function(e){
            e.stopPropagation();
        });
    }

    // Form events

    $('input[type=text]').focus(function(){
        resetInvalidField($(this));
    })
    $('input[name=tel]').focus(function(){
        $('input[name=tel]').attr('placeholder','(xx)xxxxx-xxxx');
    });
    
    $('form#form1').submit(function(){
        var name = $('input[name=name]').val();
        var tel = $('input[name=tel]').val();
        var email = $('input[name=email]').val();

        if(verifyName(name) == false){
            applyInvalid($('input[name=name]'));
            return false;
        }else if(verifyTel(tel) == false){
            applyInvalid($('input[name=tel]'));
            return false;
        }else if(verifyEmail(email) == false){
            applyInvalid($('input[name=email]'));
            return false;
        }else{
            alert("Form succesfully sent!");
        }
       
    });

    // Functions to stilyze fields

    function applyInvalid(el){
        el.css('color','red');
        el.css('border','2px solid red');
        // el.data('invalid','true');
        el.val('Invalid Field');
    }

    function resetInvalidField(el){
        el.css('color','grey');
        el.css('border','1px solid #ccc');
        el.val('')
    }

    // Functions to verify fields

    function verifyName(name){
        if(name  == ''){
            return false;
        }

        var amount = name.split(' ').length;
        var splitStr = name.split(' ');

        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                if(splitStr[i].match(/^[A-Z-À-ÖØ]{1}[A-Za-zÀ-ÖØ-öø-ÿ]{1,}$/)){
                    console.log('Complete name matched');
                }else{
                    return false;
                }
            }
        }else{
            return false;
        }
    }
    function verifyTel(tel){
        if(tel == ''){
            return false;
        }
        if(tel.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
            return false;
        }
    }
    function verifyEmail(email){
        if(email == ''){
            return false;
        }
        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
            return false;
        }
    }
});