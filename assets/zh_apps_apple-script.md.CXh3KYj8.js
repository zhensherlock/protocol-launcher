import{Ht as e,Qt as t,Yt as n,at as r,et as i,it as a,jt as o,lt as s,ot as c,st as l,tt as u,yt as d}from"./chunks/framework.Cr_r0rv7.js";import{r as f}from"./chunks/theme.BI-mnTya.js";import{i as p,n as m,r as h,t as g}from"./chunks/apple-script.5gbItf7s.js";import{t as _}from"./chunks/components.cjHZ1fMX.js";var v={class:`vp-code-block-title`},y={class:`language-ts`,dir:`ltr`},b={class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},x={class:`line`},S={style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},C={style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},w={class:`line`},T={style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},E={class:`flex justify-center`},D={class:`vp-code-block-title`},O={class:`language-ts`,dir:`ltr`},k={class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},A={class:`line`},j={style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},M={style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},N={class:`line`},P={style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},F={class:`flex justify-center`},I={class:`vp-code-block-title`},L={class:`language-ts`,dir:`ltr`},R={class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},z={class:`line`},B={style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},V={style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},H={class:`line`},U={style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},W={class:`flex justify-center`},G=JSON.parse(`{"title":"Apple Script Editor","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/apps/apple-script.md","filePath":"zh/apps/apple-script.md"}`),K=s({name:`zh/apps/apple-script.md`,setup(s){let G=e(`On-Demand`),K=i(()=>G.value===`On-Demand`?`protocol-launcher/apple-script`:`protocol-launcher`);return(e,i)=>(d(),a(`div`,null,[i[39]||=r(`<h1 id="apple-script-editor" tabindex="-1">Apple Script Editor <a class="header-anchor" href="#apple-script-editor" aria-label="Permalink to “Apple Script Editor”">​</a></h1><p>AppleScript 是由 Apple 创建的一种脚本语言，它允许您控制可编写脚本的 macOS 应用程序以及操作系统本身的部分功能。您可以编写脚本来自动执行重复性任务、组合来自不同应用程序的功能以及构建复杂的工作流程。<strong>Protocol Launcher</strong> 提供了生成和执行 AppleScript 的实用工具。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h2><p>提供两种使用方式：</p><ul><li>按需加载（通过子路径导入），支持 Tree Shaking，体积更小。</li><li>全量导入（从根包导入），使用简单，但会包含所有应用模块。</li></ul><p>生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。</p>`,6),l(n(_),{modelValue:G.value,"onUpdate:modelValue":i[0]||=e=>G.value=e},null,8,[`modelValue`]),i[40]||=u(`h3`,{id:`打开-apple-script-editor`,tabindex:`-1`},[c(`打开 Apple Script Editor `),u(`a`,{class:`header-anchor`,href:`#打开-apple-script-editor`,"aria-label":`Permalink to “打开 Apple Script Editor”`},`​`)],-1),u(`div`,v,[i[12]||=u(`div`,{class:`vp-code-block-title-bar`},[u(`span`,{class:`vp-code-block-title-text`,"data-title":`{{currentMethod}}`},`{{currentMethod}}`)],-1),u(`div`,y,[i[10]||=u(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`},null,-1),i[11]||=u(`span`,{class:`lang`},`ts`,-1),u(`pre`,b,[u(`code`,null,[u(`span`,x,[i[1]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`,-1),u(`span`,S,` { `+t(G.value===`On-Demand`?`open`:`appleScript`)+` } `,1),i[2]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`,-1),u(`span`,C,` '`+t(K.value)+`'`,1)]),i[7]||=c(`
`,-1),i[8]||=u(`span`,{class:`line`},null,-1),i[9]||=c(`
`,-1),u(`span`,w,[i[3]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`,-1),i[4]||=u(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` url`,-1),i[5]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`,-1),u(`span`,T,` `+t(G.value===`On-Demand`?``:`appleScript.`)+`open`,1),i[6]||=u(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()`,-1)])])])])]),u(`div`,E,[l(f,{href:n(p)(),target:`_self`},{default:o(()=>[...i[13]||=[c(` 打开 Apple Script Editor `,-1)]]),_:1},8,[`href`])]),i[41]||=u(`h3`,{id:`添加脚本`,tabindex:`-1`},[c(`添加脚本 `),u(`a`,{class:`header-anchor`,href:`#添加脚本`,"aria-label":`Permalink to “添加脚本”`},`​`)],-1),u(`div`,D,[i[26]||=u(`div`,{class:`vp-code-block-title-bar`},[u(`span`,{class:`vp-code-block-title-text`,"data-title":`{{currentMethod}}`},`{{currentMethod}}`)],-1),u(`div`,O,[i[24]||=u(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`},null,-1),i[25]||=u(`span`,{class:`lang`},`ts`,-1),u(`pre`,k,[u(`code`,null,[u(`span`,A,[i[14]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`,-1),u(`span`,j,` { `+t(G.value===`On-Demand`?`addScript`:`appleScript`)+` } `,1),i[15]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`,-1),u(`span`,M,` '`+t(K.value)+`'`,1)]),i[20]||=c(`
`,-1),i[21]||=u(`span`,{class:`line`},null,-1),i[22]||=c(`
`,-1),u(`span`,N,[i[16]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`,-1),i[17]||=u(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` url`,-1),i[18]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`,-1),u(`span`,P,` `+t(G.value===`On-Demand`?``:`appleScript.`)+`addScript`,1),i[19]||=u(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`,-1)]),i[23]||=r(`
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  script: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;display dialog &quot;Hello, World!&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>`,4)])])])]),u(`div`,F,[l(f,{href:n(h)(n(g)),target:`_self`},{default:o(()=>[...i[27]||=[c(` 在 Apple Script Editor 中打开 `,-1)]]),_:1},8,[`href`])]),i[42]||=u(`h3`,{id:`智能笔记捕捉器`,tabindex:`-1`},[c(`智能笔记捕捉器 `),u(`a`,{class:`header-anchor`,href:`#智能笔记捕捉器`,"aria-label":`Permalink to “智能笔记捕捉器”`},`​`)],-1),u(`div`,I,[i[37]||=u(`div`,{class:`vp-code-block-title-bar`},[u(`span`,{class:`vp-code-block-title-text`,"data-title":`{{currentMethod}}`},`{{currentMethod}}`)],-1),u(`div`,L,[i[35]||=u(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`},null,-1),i[36]||=u(`span`,{class:`lang`},`ts`,-1),u(`pre`,R,[u(`code`,null,[u(`span`,z,[i[28]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`,-1),u(`span`,B,` { `+t(G.value===`On-Demand`?`addScript`:`appleScript`)+` } `,1),i[29]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`,-1),u(`span`,V,` '`+t(K.value)+`'`,1)]),i[34]||=r(`
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> script</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`-- Smart Note Capture</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Get selected text (universal: copy from clipboard)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set oldClipboard to the clipboard</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tell application &quot;System Events&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	keystroke &quot;c&quot; using command down</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	delay 0.3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end tell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set selectedText to the clipboard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- If no text is selected</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if selectedText is &quot;&quot; then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	display dialog &quot;No selected text detected&quot; buttons {&quot;OK&quot;} default button 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	return</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end if</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Ask user for a note</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set userNote to text returned of (display dialog &quot;Enter your note:&quot; default answer &quot;&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Get current time</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set nowDate to current date</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set timeStr to (year of nowDate as string) &amp; &quot;-&quot; &amp; (month of nowDate as integer) &amp; &quot;-&quot; &amp; (day of nowDate as integer)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Get frontmost app name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tell application &quot;System Events&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	set frontApp to name of first application process whose frontmost is true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end tell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Generate Markdown content</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set mdContent to &quot;# Captured Note</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set mdContent to mdContent &amp; &quot;**Time:** &quot; &amp; timeStr &amp; &quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set mdContent to mdContent &amp; &quot;**Source App:** &quot; &amp; frontApp &amp; &quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set mdContent to mdContent &amp; &quot;## Selected Text</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt; &quot; &amp; selectedText &amp; &quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set mdContent to mdContent &amp; &quot;## My Note</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &amp; userNote &amp; &quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- File path (Desktop)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set fileName to &quot;note_&quot; &amp; (do shell script &quot;date +%s&quot;) &amp; &quot;.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set filePath to (path to desktop folder as text) &amp; fileName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Write file</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set posixPath to POSIX path of filePath</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">do shell script &quot;echo &quot; &amp; quoted form of mdContent &amp; &quot; &gt; &quot; &amp; quoted form of posixPath</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Open with Safari (simple preview)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tell application &quot;Safari&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	activate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	open location &quot;file://&quot; &amp; POSIX path of filePath</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">end tell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-- Restore clipboard</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">set the clipboard to oldClipboard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">display notification &quot;Note saved to Desktop&quot; with title &quot;Smart Capture&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"></span>
`,137),u(`span`,H,[i[30]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`,-1),i[31]||=u(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` url`,-1),i[32]||=u(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`,-1),u(`span`,U,` `+t(G.value===`On-Demand`?``:`appleScript.`)+`addScript`,1),i[33]||=u(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ script })`,-1)])])])])]),u(`div`,W,[l(f,{href:n(h)(n(m)),target:`_self`},{default:o(()=>[...i[38]||=[c(` 在 Apple Script Editor 中打开 `,-1)]]),_:1},8,[`href`])])]))}});export{G as __pageData,K as default};