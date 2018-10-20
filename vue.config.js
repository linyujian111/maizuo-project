module.exports={
	devServer:{
		proxy:{
			'/v4/api':{
				target:'http://m.maizuo.com',
				ws:true,
				changeOrigin:true
			}
		}
	}
}

//module.exports= {
//dev: {
//  proxyTable: {
//    '/somepath': {
//      target: 'http://a.b.com',
//      changeOrigin: true,
//      pathRewrite: {
//        '^/somepath': '/otherpath'
//      }
//    }
//  }
//}
//}