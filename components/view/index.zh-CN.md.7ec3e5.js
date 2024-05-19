(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[4833],{15179:n=>{n.exports={content:["article",["p","更安全的View基础组件"],["h2","规则"],["ul",["li",["p","支持 ",["code","string"],"/",["code","number"]," 类型的ReactNode"]]],["h2","API"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","children"],["td","子组件"],["td",["code","React.ReactNode"]," ","|"," ",["code","React.ReactText"]],["td","-"]],["tr",["td","style"],["td","样式"],["td",["code","StyleProp<ViewStyle>"]," ","|"," ",["code","StyleProp<TextStyle>"]],["td","-"]]]],["blockquote",["p","更多 react-native ",["code","View"]," 属性请参考 react-native View (",["a",{title:null,href:"http://facebook.github.io/react-native/docs/view.html"},"http://facebook.github.io/react-native/docs/view.html"],")"]],["h2","FAQ"],["h3","它和React Native内置组件View、Text有什么区别？"],["p","React Native View不支持 ",["code","string"]," / ",["code","number"]," 类型的children，一旦误传会导致手机崩溃，且无法定位到代码行数，"],["p",["strong","此组件可以做一次错误兜底，优先保证设备不崩溃。"]],["p","常见的错误："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>length <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\n<span class="token comment" spellcheck="true">// 当length=0 时，实际渲染的是</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n  <span class="token number">0</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>'},["code","const length = arr.length;\n\n<View>\n  {length && <Component />}\n</View>\n\n// 当length=0 时，实际渲染的是\n<View>\n  0\n</View>"]],["p","注意，只能做到一层保护，即使",["code","<React.Fragment>"],"内的children类型出错时也无法得到保护："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>View<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* still crash */</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n    <span class="token number">0</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n\n  <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* still crash */</span><span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">></span><span class="token string">\'\'</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>'},["code","import {View} from '@ant-design/react-native'\n\n<View>\n  {/* still crash */}\n  <React.Fragment>\n    0\n  </React.Fragment>\n\n  {/* still crash */}\n  <>''</>\n</View>"]]],meta:{category:"Components",type:"Layout",title:"View",subtitle:"基础组件",filename:"components/view/index.zh-CN.md"}}}}]);