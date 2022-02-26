---
sidebar: auto
---

## 基本
### 基本版本
> webGL2.0现在版本基于OPENGL ES 2.0 迭代而来。

### 兼容性
> webGL 2的浏览器兼容性: Firefox 4+, Google Chrome 9+, Opera 12+, Safari 5.1+, Internet Explorer 11+和Microsoft Edge build 10240+；然而, WebGL一些特性也需要用户的硬件设备支持。


## 开始
> 从一些基本例子开始.

- 初次使用着色器绘制一个矩形点。

```js
      // 核心代码
      // 着色器使用流程
      // 1.编译 2.链接 3.使用 4.绘图
      // 顶点着色器
      let VSHADER_SOURCE =
        "void main() {\n" +
        "gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n" + // 设置坐标
        "gl_PointSize = 10.0;\n" + // 设置尺寸
        "}\n";

      // 片元着色器, 为顶点着色器设置颜色
      let FSHADER_SOURCE =
        "void main() {\n" +
        "gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);\n" + // 设置颜色
        "}\n";

      function main() {
        let canvas = document.getElementById("glwebgl");
        let gl = canvas.getContext("webgl");

        if (!gl) {
          console.warn("浏览器不支持webgl");
          return;
        }

        // 编译
        let vShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vShader, VSHADER_SOURCE);
        gl.compileShader(vShader);

        if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
          console.error(
            "----->>>vShader 编译错误:",
            gl.getShaderInfoLog(vShader)
          );
        }
        //片元着色器
        let fShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fShader, FSHADER_SOURCE);
        gl.compileShader(fShader);

        if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) {
          console.error(
            "----->>>fShader 编译错误:",
            gl.getShaderInfoLog(fShader)
          );
        }

        // 连接
        // 每一个shader必须和webgl的program连接。
        const shaderProgram = gl.createProgram();
        // 添加预先存在的着色器
        gl.attachShader(shaderProgram, vShader);
        gl.attachShader(shaderProgram, fShader);

        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
          console.error(
            "------>>>着色器链接失败: " + gl.getProgramInfoLog(shaderProgram)
          );
        }

        // 使用
        gl.useProgram(shaderProgram);

        // 绘图
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, 1);
      }
```

::: tip 提示
和canvas的2d画布不同，webgl中绘制矩形，需要使用着色器，来进行绘制。着色器本身提供了灵活且强大的二维和三维图形绘制功能。
:::

::: warning 提示
WebGLProgram 是 WebGL API 的一部分，它由两个WebGLShaders （webgl 着色器）组成，分别为顶点着色器和片元着色器（两种着色器都是采用 GLSL 语言编写的）。创建一个 WebGLProgram 需要调用 GL 上下文的createProgram() 方法，然后调用attachShader()方法附加上着色器，之后你才能将它们连接到一个可用的程序。

:::

::: tip 注意
要使用webgl绘图需要使用着色器
:::

### 着色器基本
> 要使用webgl绘图依赖着色器. webgl着色器分类: 顶点着色器和片元着色器.

#### 顶点着色器(Vertex shader)
> 顶点着色器用来描述顶点特性（如位置和颜色等)的程序。顶点是指二维和三维空间中的一个点，比如二维和三维图形的端点和交点。

#### 片元着色器(Fragment shader)
> 进行逐片元处理过程如光照的程序。片元是一个webGL术语，可以理解为像素（也是可以理解为图像的像素单元）

::: tip 提示
着色器能够处理三维场景中的图形绘制和颜色处理。同时也能够处理光照变化对应的图形透过视角的颜色状态，以及观察者视野变化时的视角变化。
:::


**webgl中图形绘制流程**
<img src="http://assets.processon.com/chart_image/621905b85653bb07564f66d1.png" />`


::: tip 提示
着色器使用类似于c语言的OpenGL ES 着色器语言

:::


**WebGL程序流程**

<img src="http://assets.processon.com/chart_image/5e9b1cf01e085369d0d11fc0.png" />



### 着色器运行过程
> 着色器语言使用GLEL ES 语言编写。在js语言中使用字符串形式声明。此时的着色器语言只是字符串。需要通过webgl系统进行编译才能用于三维场景的绘图。

流程:
1. 着色器声明
2. 编译
3. 链接
4. 使用

> 上面的示列中，着色器在被初始化之前都是空白的，需要将字符串形式的着色器代码从js传给Webgl系统，并建立着色器。
> 两个着色器在通过webgl处理时，首先是将顶点着色器的位置和size传入到片元着色器，然后再是执行片元着色器。片元着色器接收到的是经过光栅化处理后的片元值。

::: warning 注意
着色器运行在webgl系统中，而不是在js程序中。
::: 

::: tip 提示
webgl程序包括运行在浏览器中的js和运行在webgl系统中的着色器两部分
:::
#### 顶点着色器
> 顶点着色器控制点的大小和位置,片元控制器控制点的颜色。
##### GLSL ES 简单语法示列

```GLSLES
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0) 
    gl_PointSize = 10.0;
}
```
**分析:**

1. 这里的位置变量存储了点的位置三维坐标，是一个三维矢量。在GLSLES中，该变量的类型是vec4类型（其实是有三个基本的浮点型量组合而成的), vec4是着色器提供的内置函数，用来创建齐次坐标。上面的坐标变量中，第四个分量*1.0*的加入，就创建了齐次坐标。

2. 如果vec4的第四个分量传入1那么这个齐次坐标是等价于三维坐标的
> 齐次坐标(x, y, z, w)等价于(x/w, y/w, z/w)

3. 注意第四个分量不能等于零。可以是趋近于零的数，这时齐次坐标就有了无穷量的概念。

4. 齐次坐标想表示三维坐标点，可以将vec4第四个分量的值改为1.0即可。


**齐次坐标的应用**
> 齐次坐标的存在，使得用矩阵乘法来描述顶点变成可能，三维图形系统在计算过程中，通常使用齐次坐标来表示顶点的三维坐标。

#### 片元着色器
> 片元着色器设置点的颜色

```js
var FSHADER_SOURCE = 
'void main() {\n' + 
' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + 
'}\n'
```
**分析:**
> 着色器程序代码如同顶点着色器一样，被分配到程序中。其中，gl_FragColor是webgl内置程序变量用来设置存储片元的颜色。

gl_FragColor: 此变量和顶点着色器的位置变量是一样的，为Vec4类型。带有四个浮点类型分量.

|类型|变量名|描述|
|----|-----|-----|
|vec4|gl_FragColor| 指定片元的颜色(RGBA格式)|

### 绘制操作
> 建立着色器过后，然后是进行绘制操作。在进行绘制之前，需要清空canvas.最后调用gl.drawArrays进行绘制。


**gl.drawArrays介绍**
> gl.drawArrays(mode, first, count)，该函数用来绘制各种图形

|参数|说明|返回值|错误|
|---|---|---|----|
|mode|指定绘制方式，可接收常量：gl.POINTS, gl.LINES, gl.LINES_STRIP, gl.LINE_LOOP,gl.TRIANGLES, gl.TRIANGLES_STRIP, gl.TRIANGLES_FAN|
|first|指定从哪一个顶点开始绘制,整形（int）|
|count|指定需要用到多少个顶点，整形（int）|
|--|--|无|参数first和count是负数|

### WebGL坐标系统
> webgl处理的是三维图形，应用三维坐标系统（笛卡尔坐标系），具有x轴，y轴，z轴.坐标系各轴方向，以计算机屏幕正方向观察角度讲解，x轴的方向为正方向向右，y轴为正方向向下，z轴为正方向朝向屏幕外。关于此坐标系，也可以参考右手的拇指，食指，中指撑开表示，因此此坐标系也称之为webgl的右手坐标系。webgl默认使用右手坐标系（暂时这样认为，真是情况远比这复杂）。

#### webgl坐标和canvas二维坐标映射
> 两者坐标系，前者建立在三维空间，后者建立在二维平面。需要将前者转换为后者。

默认情况，两者坐标系对应关系

1. canvas中心点:(0.0, 0.0, 0.0)
2. canvas的上边缘和下边缘: (-1.0, 0.0, 0.0)和(1.0, 0.0, 0.0)
3. canvas的左边缘和右边缘: (0.0, -1.0, 0.0)和(0.0, 1.0, 0.0)



::: tip 提示
OpenGL 需要交换颜色缓冲区，而在webgl系统中不需要交换颜色缓冲区.
:::


### js程序与着色器数据传输
> 本节仍然是通过示列1的列子来进行演示。示列1绘制一个点，然而顶点着色器部分是通过硬编码的方式声明在js中的，包括顶点坐标数据等，都是字符串硬编码方式，使得如果想通过外部传入顶点数据到着色器变得困难，或者说根本无法实现。导致程序可扩展变得困难。现在使用attribute关键字来实现，外部程序向着色器传输数据。

**使用attribute**
> 目标: 传输位置信息到顶点着色器，两种实现方式。分别是：attribute和uniform变量。选择的那种方式取决于需要传递的数据本身。

- attribute变量用来传输与顶点相关的数据
- uniform用来传输与顶点无关的数据（或者对于所有顶点数据相同的数据）。此列使用attribute变量，取决于不同的顶点具有不同的坐标。

**向顶点着色器传输数据的两种方式**

<img src="http://assets.processon.com/chart_image/5e9b1cf01e085369d0d11fc0.png">



::: tip 提示
attribute 是一种GLSL ES变量，被用来从外部向顶点着色器内部传输数据，只有顶点着色器能够使用。
:::

**声明attribute变量**

```js
let VSHADER_SOURCE =
    "attribute vec4 a_Position;\n" +
    "void main() {\n" +
    "gl_Position = a_Position;\n" + // 复制attribute变量给gl_Position
    "gl_PointSize = 10.0;\n" + // 设置尺寸
    "}\n";
```

**分析:**

```js attribute vec4 a_Position```

1.关键字attribute称之为存储限定符，表示接下来的一个变量是一个attribute变量,且attribute变量需要声明成全局变量。 数据从着色器外部传给该变量

2. attribute声明格式: attribute [类型] variable_name

此时，就可以从外部向着色器传输变量

**获取attribute变量的存储位置**
> 要获取声明在webgl程序内部着色器内部的变量，需要调用getAttribLocation函数。


**gl.getAttribLocation分析**

|参数|描述|
|----|----|
|program|指定包括顶点和片元着色器的程序对象(program object)|
|name|需要获取的attribute变量的名字|
|返回值|大于等于零，是attributet变量的内存地址;-1, 表示该变量不存在，或者是变量标识符有gl_或webgl_前缀|
|错误|INVALID_OPERATION, 程序对象未能成功连接; INVALID_VALUE,name长度大于attribute变量名的最大长度限制（默认256字节）|


**向attribute变量赋值**
```js
gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
```

**gl.vertexAttrib3f规范**

|参数|描述|
|----|----|
|location|attribute变量存储位置|
|v0|需要修改的attribute变量的第一个分量值|
|v1||需要修改的attribute变量的第二个分量值|
|v2|需要修改的attribute变量的第三个分量值|
|返回值|无|
|错误|INVALID_OPERATION: 没有当前program对象;INVALID_VALUE: location大于等于attribute变量的最大数目|

::: tip 提示
由于attribute变量和gl_Position变量的类型都是vec4，而使用外部位置数据传入到着色器时，只有三个分量数据。少了一个齐次坐标补齐的数据。这种情况下，vertexAttrib3f函数默认会将第四个分量w设置为1.0. 而齐次坐标中w等于1.0的话，是等价于三维坐标的，因此这是一个安全的第四分量。
:::

**getAttribute3f同族函数**

```
gl.vertexAttrib1f(location, v0)
gl.vertexAttrib2f(location, v0, v1)
gl.vertexAttrib3f(location, v0, v1, v2)
gl.vertexAttrib4f(location, v0, v1, v2, v3);
```
说明：这些函数都是给location参数指定的attribute变量传输数据。gl.vertexAttrib1f仅传输一个值，这个值将被填充到attribute变量的第一个分量中，第2，3个分量将被设置为0.0，第四个分量将被设置为1.0. 其他同族函数，以此类推。


::: tip 提示
vertexAttrib[n]fv传入分量参数时，也可以使用矢量。他们以vector结尾。并接受类型数组作为参数。函数名字中数字表示这些分量元素个数。vertexAttrib4f,表示分量有四个元素
:::




### 实践demo

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webgl-修改点的尺寸</title>
  </head>
  <body onload="main()">
    <canvas id="glwebgl" width="400" height="400"> </canvas>
    <script src="../../js//helper/helper.js"></script>
    <script>
      // 着色器使用流程
      // 1.编译 2.链接 3.使用 4.绘图
      // 顶点着色器
      // 添加 attribute- a_PointSize
      /**
       *  1. 顶点着色器中，声明attribute变量;
       *  2. 将attribute变量复制给gl_PointSize变量
       *  3. 向attribute变量传输数据
       */
      let VSHADER_SOURCE =
        "attribute vec4 a_Position;\n" +
        "attribute float a_PointSize;\n" +
        "void main() {\n" +
        "gl_Position = a_Position;\n" + // 赋值attribute变量给gl_Position
        "gl_PointSize = a_PointSize;\n" + // 赋值attribute变量到gl_PointSize
        "}\n";

      // 片元着色器, 为顶点着色器设置颜色
      let FSHADER_SOURCE =
        "void main() {\n" +
        "gl_FragColor = vec4(0.0, 1.0, 0.0, 0.5);\n" + // 设置颜色
        "}\n";

      function main() {
        let canvas = document.getElementById("glwebgl");
        let gl = canvas.getContext("webgl");

        if (!gl) {
          console.warn("浏览器不支持webgl");
          return false;
        }

        // 初始化着色器
        if (!initShader(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
          console.erro("着色器初始化失败");
          return false;
        }

        // 获取attribute-a_Position
        let a_Position = gl.getAttribLocation(gl.program, "a_Position");
        console.log(a_Position); // 0

        if (a_Position < 0) {
          console.log("获取本地attribute变量-a_Position失败");
          return;
        }
        // 获取attribute-a_PointSize
        let a_PointSize = gl.getAttribLocation(gl.program, "a_PointSize");
        console.log(a_PointSize); // 1

        if (a_PointSize < 0) {
          console.log("获取本地attribute变量-a_PointSize失败");
          return;
        }

        // 传输顶点数据到attribute-a_Position
        // 修改vertexAttrib3f，测试同族函数vertexAttrib[1234]f
        gl.vertexAttrib3f(a_Position, 0.0, 0.5, 0.0); // 修改顶点y轴坐标到0.5
        gl.vertexAttrib1f(a_Position, 0.0); // 绘制在中心（0.0， 0.0， 0.0）
        gl.vertexAttrib2f(a_Position, 0.0, 0.5); // 绘制在(0.0, 0.5, 0.0)
        gl.vertexAttrib4f(a_Position, 0.0, 1.0, 0.0, 1.0); // (0.0, 1.0, 0.0, 1.0)

        // 使用矢量
        let position = new Float32Array([0.0]); // [0.0, 0.0, 0.0, 1.0]
        gl.vertexAttrib1fv(a_Position, position);

        let positionv1 = new Float32Array([0.0, 0.5]); // [0.0, 0.5, 0.0, 1.0]
        gl.vertexAttrib2fv(a_Position, positionv1);

        let positionv2 = new Float32Array([0.0, 0.5, 0.5]); // [0.0, 0.5, 0.5, 1.0]
        gl.vertexAttrib3fv(a_Position, positionv2);

        let positionv3 = new Float32Array([0.0, 0.0, 0.0, 1.0]); // [0.0, 0.0, 0.0, 1.0]
        gl.vertexAttrib4fv(a_Position, positionv3);

        // 传输顶点尺寸数据到attribute-a_PointSize
        let size = new Float32Array([100.0]);
        gl.vertexAttrib1fv(a_PointSize, size);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // 4. 绘图
        gl.drawArrays(gl.POINTS, 0, 1);

        console.log(gl);
      }
    </script>
  </body>
</html>
```


