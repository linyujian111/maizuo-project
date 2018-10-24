module.exports={
	devServer:{
		proxy:{
			'/v4/api':{
				target:'http://m.maizuo.com',
				ws:true,
				changeOrigin:true
			},
		'/api': {
			 target: 'http://localhost:3000',
			 changeOrigin: true,
			 secure: false,
			 pathRewrite: {
			      '^/api': ''
			    }
			 }
			
		}
	}
}
