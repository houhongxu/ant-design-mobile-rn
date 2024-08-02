(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[7351],{9640:t=>{t.exports={content:["article",["p","A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes."],["h3","Rules"],["ul",["li",["p","Toast with Icon, 4-6 words is recommended; Toast without Icon, the number of words should not exceed 14."]]],["h2","API"],["p",["code","Toast"]," only supports Imperative calls. The argument type is ",["code","string | ToastProps"],"."],["ul",["li",["p",["code","Toast.show(props)"]," - New in ",["code","5.2.1"]]],["li",["p",["code","Toast.success(props)"]]],["li",["p",["code","Toast.fail(props)"]]],["li",["p",["code","Toast.info(props)"]]],["li",["p",["code","Toast.loading(props)"]]],["li",["p",["code","Toast.offline(props)"]]]],["p",["code","Toast.show(string)"],"'s default config is ",["code","{duration:1.5, mask: false}"],". Another method is to specify a shortcut to the ",["code","icon"],"."],["p","ToastProps has these fields:"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Required"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","content"],["td","Toast content"],["td",["code","String | React.ReactNode"]],["td","Yes"],["td","-"],["td"]],["tr",["td","duration"],["td","Delay time to close, which units is second"],["td","number"],["td","No"],["td","3"],["td"]],["tr",["td","icon"],["td","Toast icon"],["td",["code","'success' | 'fail' | 'offline' | 'loading' | React.ReactNode"]],["td","No"],["td","-"],["td",["code","5.2.1"]]],["tr",["td","mask"],["td","Whether to show a transparent mask, which will prevent touch event of the whole page"],["td","Boolean"],["td","No"],["td","true"],["td"]],["tr",["td","onClose"],["td","A callback function Triggered when the Toast is closed"],["td","Function"],["td","No"],["td","-"],["td"]],["tr",["td","position"],["td","Vertical display position"],["td",["code","'top' | 'bottom' | 'center'"]],["td","No"],["td",["code","'center'"]],["td",["code","5.2.1"]]],["tr",["td","stackable"],["td","Whether to allow toast overlay"],["td","Boolean"],["td","No"],["td","true"],["td"]],["tr",["td","styles"],["td","Semantic DOM style"],["td",["a",{title:null,href:"#toaststyle-interface"},"ToastStyle"]],["td","No"],["td","-"],["td",["code","5.2.1"]]]]],["blockquote",["p",["strong","Notice："]," OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it."]],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> key <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nToast<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Toast } from '@ant-design/react-native';\n\nconst key = Toast.loading('message');\nToast.remove(key);"]],["h3","Toast.removeAll"],["p","Turn off ",["code","Toast"]," in all displays."],["pre",{lang:"ts",highlighted:'Toast<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>'},["code","Toast.removeAll()"]],["h3","Toast.config"],["p","Methods for global configuration. Support ",["code","duration"],"、",["code","mask"],"、",["code","onClose"],"、",["code","position"],"、",["code","stackable"]," and ",["code","style"],". The configuration method is as follows:"],["pre",{lang:"ts",highlighted:'Toast<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> position<span class="token punctuation">:</span> <span class="token string">\'top\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true">// get current config</span>\nToast<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>'},["code","Toast.config({ duration: 1, position: 'top' })\n\n// get current config\nToast.getConfig()"]],["h3","InputStyle interface"],["pre",{lang:"typescript",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">ToastStyle</span> <span class="token punctuation">{</span>\n  container<span class="token punctuation">:</span> ViewStyle\n  innerContainer<span class="token punctuation">:</span> ViewStyle\n  innerWrap<span class="token punctuation">:</span> ViewStyle\n  iconToast<span class="token punctuation">:</span> ViewStyle\n  textToast<span class="token punctuation">:</span> ViewStyle\n  content<span class="token punctuation">:</span> TextStyle\n  image<span class="token punctuation">:</span> TextStyle\n  centering<span class="token punctuation">:</span> ViewStyle\n<span class="token punctuation">}</span>'},["code","interface ToastStyle {\n  container: ViewStyle\n  innerContainer: ViewStyle\n  innerWrap: ViewStyle\n  iconToast: ViewStyle\n  textToast: ViewStyle\n  content: TextStyle\n  image: TextStyle\n  centering: ViewStyle\n}"]]],meta:{category:"Components",type:"Feedback",title:"Toast",version:"update",filename:"components/toast/index.en-US.md"}}}}]);