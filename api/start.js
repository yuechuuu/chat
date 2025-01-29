// 使用Vercel官方推荐的写法
const { createServer } = require('http');
const { parse } = require('url');
const plotElements = require('../plot-elements'); // 你的剧本数据

module.exports = async (req, res) => {
  // 处理POST请求
  if (req.method === 'POST') {
    const sessionId = Math.random().toString(36).substr(2, 9);
    const plot = generateInitialPlot(); // 你的剧本生成逻辑
    
    // 返回JSON响应
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      sessionId,
      initialPlot: plot,
      choices: generateChoices(plot)
    }));
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
};

// 你的生成逻辑函数...
function generateInitialPlot() {
  // 同之前的剧本生成代码
}