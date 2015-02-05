## 工具集
### PhantomJS截图
1. clone到本地，切到````phantomjs/bin```` 目录下，
2. 下载[【PhantomJS】](http://phantomjs.org/download.html)，将phantomjs.exe放到bin目录下
3. 执行下面代码，会将截图输出到该目录下：
````
/*
  args[0] : 固定
  args[1] : url需要截图的网址
  args[2] : 图片格式 png/jpg
*/
phantomjs page.js http://www.baidu.com png
````


