#### 可能会出现的问题
1.登录后操作一些功能还是显示未登录
> 因某些接口有相应的缓存，需要退出小程序重新进入一次即可

2.页面无数据
> 短时间无显示，因服务器比较低配，响应时间会较长，等待一会即可
> 长时间无显示，请求出错或者服务器未响应等原因，退出页面尝试重新进入一次

3.播放时播放的动画效果和时长异常
> 因播放的数据是通过其他接口返回的歌曲id值再请求播放歌曲的链接和信息的接口，响应会比较慢，等待一会，或者先暂停片刻再播放即可

4.对于服务器接口响应缓慢
> 可自己将接口clone到本地，在本地起服务，同时需要修改一下service/config.js中的baseURL值，将其改为 **'http://localhost（或本地ip）:3000'** 即可
```
git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git

npm install / cnpm install 前提是已安装了cnpm(npm install -g cnpm --registry=https://registry.npm.taobao.org)

node app.js
```

#### 项目展示
![home](https://img-blog.csdnimg.cn/20200112194738398.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lfeXl5eW0=,size_16,color_FFFFFF,t_70)
![yuncun](https://img-blog.csdnimg.cn/20200112194755927.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lfeXl5eW0=,size_16,color_FFFFFF,t_70)
![search](https://img-blog.csdnimg.cn/2020011219505398.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lfeXl5eW0=,size_16,color_FFFFFF,t_70)
![play](https://img-blog.csdnimg.cn/20200112195134316.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lfeXl5eW0=,size_16,color_FFFFFF,t_70)
![profile](https://img-blog.csdnimg.cn/20200112195154720.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lfeXl5eW0=,size_16,color_FFFFFF,t_70)
![login](https://img-blog.csdnimg.cn/20200112195221685.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lfeXl5eW0=,size_16,color_FFFFFF,t_70)