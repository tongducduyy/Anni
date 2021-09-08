// ---------------------------------------------------------------
// --------------------------Count Down-------------------------------
// -------------------------------------------------------------------



function Pos_x(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function Pos_y(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(
    function () {
        $('.hint').click(
            function () {
                x = Pos_x(10,210);
                y = Pos_y(170,690);
                $('.hint').css({ "left": x });
                $('.hint').css({ "top": y });
                $('.main label').css('opacity', '0');
                document.getElementById('pw-input').value = '';
            }
        )

        $('.enter').click(
            function () {
                $a= document.getElementById("pw-input").value;
                if ($a != '')
                {
                    if ($a == '_thuwboo_'){
                        window.location="main.html";
                        
                    }
                    else{
                        $('label').css('opacity', '1');
                    }
                }
                
            }
        )

        $('.support').click(
            function () {
                window.location="hint.html";
            }
        )
    }
)


