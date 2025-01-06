// 获取原始响应体
let body = $response.body; 
// 解析 JSON 字符串为对象
let obj = JSON.parse(body);

// 修改到期时间
if (obj && obj.data) {
  obj.data.deadlineEndTime = "2099-12-31 23:59:59"; // 自定义延长时间
  obj.data.levelName = "星耀直通卡【永久】"; // 可选：修改会员名称
}

// 转换回字符串并返回
$done({ body: JSON.stringify(obj) });