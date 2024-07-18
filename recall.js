/*
中華民國現行的罷免制度為分二階段徵求選民連署，通過之後再進行選民投票決定罷免結果。

第一階段：提議 （1% 選舉區選民簽署）
第二階段：連署 （10% 選舉區選民簽署）
第三階段：投票 （有效同意票數大於不同意票數，且同意票數達原選舉區選舉人總數四分之一（25%）以上，即為通過。）

桃園縣第三選舉區 301,213 
2

結果：
距離第 n 階段還差 n 票
*/

function recall(){
    let totals = document.getElementById("total_people").value;
    let votes = document.getElementById("votes").value;
    let msg="";
    var phase1,phase2,phase3=0;
    phase1 = parseInt(totals * .01);
    phase2 = parseInt(totals * .1);
    phase3 = parseInt(totals * .25);

    msg += "第一階段："+phase1+" 人";
    msg += "第二階段："+phase2+" 人";
    msg += "第三階段："+phase3+" 人";
    
    if(votes < phase1)
    {
        msg +="距離第一階段還差："+(phase1 - votes)+" 人";
    }else if(votes < phase2){
        msg +="距離第二階段還差："+(phase2 - votes)+" 人";
    }else{
        msg +="距離第三階段還差："+(phase3 - votes)+" 人";
    }
    
    document.getElementsByTagName("div")[0].innerHTML = msg;

}
