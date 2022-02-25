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







