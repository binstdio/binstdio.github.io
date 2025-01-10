import{_ as a,c as i,a0 as e,o as l}from"./chunks/framework.D5XSuxOt.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"osktools/install.md","filePath":"osktools/install.md"}'),n={name:"osktools/install.md"};function t(o,s,h,r,p,k){return l(),i("div",null,s[0]||(s[0]=[e(`<h2 id="osk-tools-安装方法" tabindex="-1">OSK Tools - 安装方法 <a class="header-anchor" href="#osk-tools-安装方法" aria-label="Permalink to &quot;OSK Tools - 安装方法&quot;">​</a></h2><p>由于我们的</p><h3 id="目标电脑没有-jre1-8-时-推荐安装方法" tabindex="-1">目标电脑没有 JRE1.8 时（推荐安装方法） <a class="header-anchor" href="#目标电脑没有-jre1-8-时-推荐安装方法" aria-label="Permalink to &quot;目标电脑没有 JRE1.8 时（推荐安装方法）&quot;">​</a></h3><h5 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-label="Permalink to &quot;手动安装&quot;">​</a></h5><p>在Release中，下载带有manual的zip，解压它。如果你认为太慢了的话（当然有能用来加速的还是用下吧）在更新说明可以找到网盘下载链接。<br><strong>注意：接下来的步骤需要你的账户有操作system32的权限，PE环境一般具有权限用于操作</strong> ，没有的可以提权。<br> 先到你的系统的system32文件夹（一般来说是C:\\Windows\\system32，目前osktools不支持运行该系统时系统盘非C盘盘符）里面，把osk.exe名称改为osk_bak.exe（ <strong>千万不要删掉它！</strong> ），然后回到你解压出来的文件夹内，把osk.exe放到system32里面。然后再把解压出来的文件夹里面的osktools文件夹整个复制到C:\\Program Files\\里面（32位的Program Files后面带有(x86)的）。复制完成后，重启就可以使用了。</p><h5 id="自动安装" tabindex="-1">自动安装 <a class="header-anchor" href="#自动安装" aria-label="Permalink to &quot;自动安装&quot;">​</a></h5><p>在Release中，下载带有Auto的压缩包，解压出来，里面有一个install.exe和files文件夹。确保当前账户有操作system32的权限，运行install.exe，输入要安装的系统的盘符，按下回车键，出现安装完成重启即可使用。<br> 可能会有以下指示（用户输入的内容前面带有 &gt; ）：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OSK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tools，版本XXX，自动安装程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">同样可以手动安装。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">检查文件完整性通过。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">键入需要安装系统的盘符（只需要一个字母即可，如C）：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> C</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">很好，将会安装在C盘中。按下Y继续。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">复制文件中...完成。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">进入锁屏界面以使用OSK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Tools。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">按下任意键退出程序</span></span></code></pre></div><h3 id="目标电脑包含-jre1-8-时" tabindex="-1">目标电脑包含 JRE1.8 时 <a class="header-anchor" href="#目标电脑包含-jre1-8-时" aria-label="Permalink to &quot;目标电脑包含 JRE1.8 时&quot;">​</a></h3>`,9)]))}const g=a(n,[["render",t]]);export{c as __pageData,g as default};