# unocss-custom-to-rem

## unocss配置自定义转化rem值

## 安装
使用 npm:
```shell
  npm install unocss-custom-to-rem -D
```

```
  // uno.config.ts
  import { defineConfig } from 'unocss'
  import unocssCustomToRem from 'unocss-custom-to-rem'

  export default defineConfig({
    // ...UnoCSS options
    presets: [
      unocssCustomToRem({
        rule: 0.01
      }),
      // ...other presets
    ],
  })
```

用法
```
  <div class="w-200 h-200 font-size-24"></div>
```
编译后
```
  .w-200{
    width: 0.2rem;
  }
  .h-200{
    height: 0.2rem;
  }
  .font-size-24{
    font-size: 0.24rem;
  }
```
Options
* rule: <code style="background:rgba(142, 150, 170, .14);color:#00a98e">number</code>
* Default: <code style="background:rgba(142, 150, 170, .14);color:#00a98e">1</code>
原unocss的rem值*4之后在乘以rule的值(rem * 4 * rule).



[MIT](LICENSE)