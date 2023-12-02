const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 프록시할 경로
    createProxyMiddleware({
      target: 'http://localhost:8080', // 백엔드 서버 주소
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 프록시 경로 제거
      },
      logLevel: 'debug', // 로깅 추가
      onError: (err, req, res) => {
        console.error(err);
        res.status(500).send('Proxy Error');
      },
      // 다양한 보안 고려사항을 추가할 수 있습니다.
    })
  );
};