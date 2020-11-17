// 绑定事件
var baseurl="http://localhost";
var param1={
    userCode:"",
    mobile:""
};
$(function (){
    $("#btn1").on('click',function (){
        initParam();
        $.ajax({
            url:baseurl+"/form/default",
            type:"post",
            contentType:"application/x-www-form-urlencoded",
            data:param1,
            success:function (data){
                if(data.status===1){
                    alert("提交成功！");
                }else{
                    alert("提交失败，"+data.msg);
                }
            }
        });
    });
    $("#btn2").on('click',function (){
        initParam();
        //var form=document.getElementById("testForm");//这里使用jquery不行
        //var formData=new FormData(form);
        var formData=new FormData();
        formData.append("userCode",$("#userCode").val());
        formData.append("mobile",$("#mobile").val());
        formData.append("file",$("#file").val());
        $.ajax({
            url:baseurl+"/form/formData",
            type:"post",
            //dataType: 'JSON',   //可有可无
            data:formData,
            dataType: 'JSON',
            cache: false,                      // 不缓存
            processData: false,                // jQuery不要去处理发送的数据
            contentType: false,
            success:function (data){
                if(data.status===1){
                    alert("提交成功！");
                }else{
                    alert("提交失败，"+data.msg);
                }
            }
        });
    });
    $("#btn3").on('click',function (){
        initParam();
        $.ajax({
            url:baseurl+"/form/json",
            type:"post",
            contentType:"application/json",
            data:JSON.stringify(param1),
            success:function (data){
                if(data.status===1){
                    alert("提交成功！");
                }else{
                    alert("提交失败，"+data.msg);
                }
            }
        });
    });
});

function initParam(){
    param1.userCode=$("#userCode").val();
    param1.mobile=$("#mobile").val();
}