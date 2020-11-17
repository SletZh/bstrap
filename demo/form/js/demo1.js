$(document).on('ready', function () {
    $("[data-toggle='tooltip']").tooltip();//开启所有提示工具
});
/** 验证文件是否导入成功  */
$("#itsupport").ajaxForm(function (data) {
    if (data.status === 0) {
        layer.msg(data.data);
        setTimeout("location.reload();", 3000);
    } else {
        layer.msg(data.statusText);
    }
});