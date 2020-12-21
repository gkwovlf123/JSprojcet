let ranarray = new Array();
let telarray = new Array();
let numArray = new Array();
$(document).ready(function() {
    $("#btn1").click(function() {
        let r = Math.floor(Math.random() * 100+1);
        r *= 1000;
        let Random = r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let ran = document.getElementById("Randomnum");
        ran.value = Random;
    });
    $(".numpad").click(function() {
        let num = this.innerHTML;
        let input = document.getElementById("telnum");
        input.value += num;
        if(input.value.length==3) /*3자리 입력했을떄 "-"  */
        {
            input.value += '-';
            
        }
        else if(input.value.length==8) /*8자리 입력했을떄 "-"  */
        {
            input.value += '-';
        }
        
    });
    $("#numX").click(function() {
        let input = document.getElementById("telnum");
        input.value = input.value.slice(0,-1);
    });
    $("#numC").click(function() {
        let input = document.getElementById("telnum");
        input.value = "";
    });
    $("#save").click(function() {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();
        let date = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let setdate = month+1 + "/" + date + "\u00A0" + hours + "시" + minutes + "분" + seconds + "초";
        let telnum = document.getElementById("telnum");
        let ran = document.getElementById("Randomnum");
        $("#save").attr({"title":year+"/"+month+"/"+date+"\u00A0"+hours+"시"+minutes+"분"+seconds+"초"+"\n"+"전화번호 : "+telnum.value+"\n"+"마일리지 : "+ran.value+"포인트가 적립되었습니다"});
        let space2 = JSON.parse(localStorage.getItem(telnum.value));
        let space = {};
        let sumResult = 0;
        if(ran.value == "")
        {
            alert("금액을 설정해주세요");
        }
        else if(telnum.value == "")
        {
            alert("전화번호를 설정해주세요");
        }
        else
        {
            if(space2 == null)
            {
                space.amount = [parseInt(ran.value.replace(/,/g,""))];
                space.count = 1;
                space.date = [setdate];
                localStorage.setItem(telnum.value,JSON.stringify(space));
                space2=space;
            }
            else
            {
                space2.amount.push(parseInt(ran.value.replace(/,/g,"")));
                space2.count++;
                space2.date.push(setdate);
                localStorage.setItem(telnum.value,JSON.stringify(space2));
            }
            
            for(let i of space2.amount)
            {
                sumResult+=i;
            }
            localStorage.setItem(telnum.value+"의 마일리지 합",sumResult);
            let myTbody = document.getElementById("table2body");
            let newRow = myTbody.insertRow(myTbody.rowNumber);
            let celltel = newRow.insertCell(0);
            let cellmile = newRow.insertCell(1);
            let cellcount= newRow.insertCell(2);
            let cellsumResult= newRow.insertCell(3);
            celltel.innerHTML = telnum.value;
            cellmile.innerHTML = setdate+"\n"+ran.value;
            cellcount.innerHTML = space2.count;
            cellsumResult.innerHTML = sumResult;
        }
        
    });
    $(".empstorage").click(function()
    {
       localStorage.clear(); 
    });
    $(".emptable").click(function()
    {
        let rowIndex = this.parentNode.rowIndex;
        document.getElementById("table2body").deleteRow(rowIndex - 1);
    });
    
});