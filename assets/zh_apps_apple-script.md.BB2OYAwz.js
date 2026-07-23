import{Dt as e,Kt as t,Lt as n,Ut as r,X as i,Z as a,at as o,et as s,ht as c,nt as l,rt as u,tt as d}from"./chunks/framework.Dgr574tv.js";import{n as f}from"./chunks/theme.zrE1_HIV.js";import{t as p}from"./chunks/components.bM6VzUeZ.js";import{i as m,n as h,r as g,t as _}from"./chunks/apple-script.5gbItf7s.js";var v={class:`vp-code-block-title`},y={class:`vp-code-block-title-bar`},b={class:`vp-code-block-title-text`,"data-title":`{{currentMethod}}`},x={class:`language-ts`},S={class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},C={class:`line`},w={style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},T={style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},E={class:`line`},D={style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},O={class:`flex justify-center`},k={class:`vp-code-block-title`},A={class:`vp-code-block-title-bar`},j={class:`vp-code-block-title-text`,"data-title":`{{currentMethod}}`},M={class:`language-ts`},N={class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},P={class:`line`},F={style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},I={style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},L={class:`line`},R={style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},z={class:`flex justify-center`},B={class:`vp-code-block-title`},V={class:`vp-code-block-title-bar`},H={class:`vp-code-block-title-text`,"data-title":`{{currentMethod}}`},U={class:`language-ts`},W={class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},G={class:`line`},K={style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},q={style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},J={class:`line`},Y={style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},X={class:`flex justify-center`},Z=JSON.parse(`{"title":"Apple Script Editor","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/apps/apple-script.md","filePath":"zh/apps/apple-script.md"}`),Q=o({name:`zh/apps/apple-script.md`,setup(o){let Z=n(`On-Demand`),Q=i(()=>Z.value===`On-Demand`?`protocol-launcher/apple-script`:`protocol-launcher`);return(n,i)=>(c(),s(`div`,null,[i[36]||=d(`<div style="display:none;" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /protocol-launcher/zh/apps/apple-script.md for this page in Markdown format</div><h1 id="apple-script-editor" tabindex="-1">Apple Script Editor <a class="header-anchor" href="#apple-script-editor" aria-label="Permalink to “Apple Script Editor”">​</a></h1><p>AppleScript 是由 Apple 创建的一种脚本语言，它允许您控制可编写脚本的 macOS 应用程序以及操作系统本身的部分功能。您可以编写脚本来自动执行重复性任务、组合来自不同应用程序的功能以及构建复杂的工作流程。<strong>Protocol Launcher</strong> 提供了生成和执行 AppleScript 的实用工具。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h2><p>提供两种使用方式：</p><ul><li>按需加载（通过子路径导入），支持 Tree Shaking，体积更小。</li><li>全量导入（从根包导入），使用简单，但会包含所有应用模块。</li></ul><p>生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。</p>`,7),u(r(p),{modelValue:Z.value,"onUpdate:modelValue":i[0]||=e=>Z.value=e},null,8,[`modelValue`]),i[37]||=a(`h3`,{id:`打开-apple-script-editor`,tabindex:`-1`},[l(`打开 Apple Script Editor `),a(`a`,{class:`header-anchor`,href:`#打开-apple-script-editor`,"aria-label":`Permalink to “打开 Apple Script Editor”`},`​`)],-1),a(`div`,v,[a(`div`,y,[a(`span`,b,t(Z.value),1)]),a(`div`,x,[i[10]||=a(`button`,{title:`Copy Code`,class:`copy`},null,-1),i[11]||=a(`span`,{class:`lang`},`ts`,-1),a(`pre`,S,[a(`code`,null,[a(`span`,C,[i[1]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`,-1),a(`span`,w,` { `+t(Z.value===`On-Demand`?`open`:`appleScript`)+` } `,1),i[2]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`,-1),a(`span`,T,` '`+t(Q.value)+`'`,1)]),i[7]||=l(`
`,-1),i[8]||=a(`span`,{class:`line`},null,-1),i[9]||=l(`
`,-1),a(`span`,E,[i[3]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`,-1),i[4]||=a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` url`,-1),i[5]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`,-1),a(`span`,D,` `+t(Z.value===`On-Demand`?``:`appleScript.`)+`open`,1),i[6]||=a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()`,-1)])])])])]),a(`div`,O,[u(f,{href:r(m)(),target:`_self`},{default:e(()=>[...i[12]||=[l(` 打开 Apple Script Editor `,-1)]]),_:1},8,[`href`])]),i[38]||=a(`h3`,{id:`添加脚本`,tabindex:`-1`},[l(`添加脚本 `),a(`a`,{class:`header-anchor`,href:`#添加脚本`,"aria-label":`Permalink to “添加脚本”`},`​`)],-1),a(`div`,k,[a(`div`,A,[a(`span`,j,t(Z.value),1)]),a(`div`,M,[i[23]||=a(`button`,{title:`Copy Code`,class:`copy`},null,-1),i[24]||=a(`span`,{class:`lang`},`ts`,-1),a(`pre`,N,[a(`code`,null,[a(`span`,P,[i[13]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`,-1),a(`span`,F,` { `+t(Z.value===`On-Demand`?`addScript`:`appleScript`)+` } `,1),i[14]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`,-1),a(`span`,I,` '`+t(Q.value)+`'`,1)]),i[19]||=l(`
`,-1),i[20]||=a(`span`,{class:`line`},null,-1),i[21]||=l(`
`,-1),a(`span`,L,[i[15]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`,-1),i[16]||=a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` url`,-1),i[17]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`,-1),a(`span`,R,` `+t(Z.value===`On-Demand`?``:`appleScript.`)+`addScript`,1),i[18]||=a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`,-1)]),i[22]||=d(`
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  script: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;display dialog &quot;Hello, World!&quot;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>`,4)])])])]),a(`div`,z,[u(f,{href:r(g)(r(_)),target:`_self`},{default:e(()=>[...i[25]||=[l(` 在 Apple Script Editor 中打开 `,-1)]]),_:1},8,[`href`])]),i[39]||=a(`h3`,{id:`智能笔记捕捉器`,tabindex:`-1`},[l(`智能笔记捕捉器 `),a(`a`,{class:`header-anchor`,href:`#智能笔记捕捉器`,"aria-label":`Permalink to “智能笔记捕捉器”`},`​`)],-1),a(`div`,B,[a(`div`,V,[a(`span`,H,t(Z.value),1)]),a(`div`,U,[i[33]||=a(`button`,{title:`Copy Code`,class:`copy`},null,-1),i[34]||=a(`span`,{class:`lang`},`ts`,-1),a(`pre`,W,[a(`code`,null,[a(`span`,G,[i[26]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`,-1),a(`span`,K,` { `+t(Z.value===`On-Demand`?`addScript`:`appleScript`)+` } `,1),i[27]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`,-1),a(`span`,q,` '`+t(Q.value)+`'`,1)]),i[32]||=d(`
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
`,137),a(`span`,J,[i[28]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`,-1),i[29]||=a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` url`,-1),i[30]||=a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`,-1),a(`span`,Y,` `+t(Z.value===`On-Demand`?``:`appleScript.`)+`addScript`,1),i[31]||=a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ script })`,-1)])])])])]),a(`div`,X,[u(f,{href:r(g)(r(h)),target:`_self`},{default:e(()=>[...i[35]||=[l(` 在 Apple Script Editor 中打开 `,-1)]]),_:1},8,[`href`])])]))}});export{Z as __pageData,Q as default};